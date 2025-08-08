import { PrismaClient } from "../../../../generated/prisma";

const initializeSiteConfig = async () => {
  const prisma = new PrismaClient();

  try {
    const existingConfig = await prisma.site_config.findFirst();
    if (!existingConfig) {
      await prisma.site_config.create({
        data: {
          categories: [
            "Electronics",
            "Fashion",
            "Home & Kitchen",
            "Sports & Fitness",
          ],
          subCategories: {
            Electronics: ["Mobiles", "Laptops", "Accessories", "Gaming"],
            Fashion: ["Men's Clothing", "Women's Clothing", "Kids", "Shoes"],
            "Home & Kitchen": ["Kitchen Appliances", "Furniture", "Decor"],
            "Sports & Fitness": [
              "Fitness Equipment",
              "Outdoor Sports",
              "Wearables",
            ],
          },
        },
      });
    }
  } catch (error) {
    console.log("Error initializing site config:", error);
  }
};

export default initializeSiteConfig;
