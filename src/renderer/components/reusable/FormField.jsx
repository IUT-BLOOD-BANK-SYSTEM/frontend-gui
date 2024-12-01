import React from "react";

const FormField = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  required = false, 
  options, 
  labelClassName = "" // New prop to allow custom label styling
}) => {
  return (
    <div>
      {/* Updated label with customizable classes */}
      <label className={`block text-sm font-medium mb-2 ${labelClassName}`}>
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
          required={required}
        >
          <option value="">Select an option</option>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          className="w-full p-2 border border-[#e0e0e0] rounded bg-primary text-white focus:outline-none focus:ring focus:ring-[#e0e0e0]"
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
