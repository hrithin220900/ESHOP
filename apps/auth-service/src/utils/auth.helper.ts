import crypto from "crypto";
import { ValidationError } from "../../../../packages/error-handler";
import { NextFunction } from "express";
import redis from "../../../../packages/libs/redis";
import { sendEmail } from "./sendMail";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (
  data: any,
  userType: "user" | "seller"
) => {
  const { name, email, password, phone_number, country } = data;

  if (
    !name ||
    !email ||
    !password ||
    (userType === "seller" && (!phone_number || !country))
  ) {
    throw new ValidationError(`Missing required fields!`);
  }

  if (!emailRegex.test(email)) {
    throw new ValidationError(`Invalid email format!`);
  }
};

export const checkOtpRestrictions = async (
  email: string,
  next: NextFunction
) => {
  if (await redis.get(`otp_lock:${email}`)) {
    return next(
      new ValidationError(
        "Account is locked due to multiple failed attempts! Please try again after 30 minutes."
      )
    );
  }

  if (await redis.get(`otp_spam_lock:${email}`)) {
    return next(
      new ValidationError(
        "Too many OTP requests! Please wait for 1 hour before requesting again."
      )
    );
  }

  if (await redis.get(`otp_cooldown:${email}`)) {
    return next(
      new ValidationError(
        "Please wait for 1 minute before requesting a new OTP."
      )
    );
  }
};

export const trackOtpRequests = async (email: string, next: NextFunction) => {
  const otpRequestCount = await `otp_request_count:${email}`;
  let otpRequests = parseInt(
    (await redis.get(`otp_request_count:${email}`)) || "0"
  );

  if (otpRequests >= 2) {
    await redis.set(`otp_spam_lock:${email}`, "true", "EX", 3600); // Lock for 1 hour
    return next(
      new ValidationError(
        "Too many OTP requests! Please wait for 1 hour before requesting again."
      )
    );
  }

  await redis.set(otpRequestCount, otpRequests + 1, "EX", 3600); // Track OTP requests for 1 minute
};

export const sendOtp = async (
  name: string,
  email: string,
  template: string
) => {
  const otp = crypto.randomInt(1000, 9999).toString();
  await sendEmail(email, "Verify your email - eShop", template, {
    name,
    otp,
  });
  await redis.set(`otp:${email}`, otp, "EX", 300); // Store OTP in Redis for 5 minutes
  await redis.set(`otp_cooldown:${email}`, "true", "EX", 60); // Set cooldown for 1 minute
};

export const verifyOtp = async (
  email: string,
  otp: string,
  next: NextFunction
) => {
  const storedOtp = await redis.get(`otp:${email}`);
  if (!storedOtp) {
    throw new ValidationError("Invalid or expired OTP!");
  }

  const failedAttemptsKey = `otp_failed_attempts:${email}`;
  const failedAttempts = parseInt((await redis.get(failedAttemptsKey)) || "0");

  if (storedOtp !== otp) {
    if (failedAttempts >= 2) {
      await redis.set(`otp_lock:${email}`, "locked", "EX", 1800); // Lock account for 30 minutes
      await redis.del(`otp:${email}`, failedAttemptsKey);
      throw new ValidationError(
        "Account is locked due to multiple failed attempts! Please try again after 30 minutes."
      );
    }
    await redis.set(failedAttemptsKey, failedAttempts + 1, "EX", 300);
    throw new ValidationError(
      `Incorrect OTP. ${2 - failedAttempts} attempts left.`
    );
  }
  await redis.del(`otp:${email}`, failedAttemptsKey);
};
