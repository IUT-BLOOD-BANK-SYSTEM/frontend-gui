import React from "react";

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  options,
  bgColor,
  textColor,
  borderColor,
  labelColor,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <label
        className={`block ${
          labelColor != undefined ? labelColor : `text-white`
        } text-sm font-medium mb-2`}
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          onChange={handleChange}
          name={name}
          className={`w-full p-2 px-4 border ${
            borderColor ? borderColor : `border-[#e0e0e0]`
          } rounded ${bgColor ? bgColor : `bg-primary `} ${
            textColor ? textColor : `text-white`
          } focus:outline-none`}
          required={required}
        >
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
          className={`w-full p-2 border ${
            borderColor ? borderColor : `border-[#e0e0e0]`
          } rounded ${borderColor ? borderColor : `border-[#e0e0e0]`} ${
            bgColor ? bgColor : `bg-primary`
          }  ${
            textColor ? textColor : `text-white`
          }  focus:outline-none focus:ring focus:ring-[#e0e0e0]`}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
