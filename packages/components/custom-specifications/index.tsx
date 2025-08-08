import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import Input from "../input";
import { PlusCircle, Trash2 } from "lucide-react";

const CustomSpecifications = ({ control, errors }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "custom_specifications",
  });

  return (
    <div>
      <label className="block font-semibold text-gray-300 mb-1">
        Custom Specifications
      </label>
      <div className="flex flex-col gap-3">
        {fields?.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Controller
              name={`custom_specifications.${index}.name`}
              control={control}
              rules={{ required: "Specification name is required" }}
              render={({ field }) => (
                <Input
                  label="Specification Name"
                  placeholder="e.g., Battery Life, weight, Material, etc."
                  {...field}
                />
              )}
            />
            <Controller
              name={`custom_specifications.${index}.value`}
              control={control}
              rules={{ required: "Specification value is required" }}
              render={({ field }) => (
                <Input
                  label="Specification Value"
                  placeholder="e.g., 5 hours, 4.6 inches, Aluminum, etc."
                  {...field}
                />
              )}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-700 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          onClick={() => append({ name: "", value: "" })}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
        >
          <PlusCircle size={20} /> Add Specifications
        </button>
      </div>
      {errors?.custom_specifications && (
        <p className="text-red-500 text-xs mt-1">
          {errors.custom_specifications.message as string}{" "}
        </p>
      )}
    </div>
  );
};

export default CustomSpecifications;
