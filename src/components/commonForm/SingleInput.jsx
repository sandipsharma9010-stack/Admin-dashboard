import React from "react";

function SingleInput({ field, formik }) {
  const {
    name,
    label,
    type,
    placeholder,
    options = [],
    col = "col-span-1",
  } = field;

  const error = formik.touched[name] && formik.errors[name];

  const inputBaseStyles =
    "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 transition duration-150 text-sm";
  const inputNormal =
    "border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white";
  const inputError = "border-red-500 focus:ring-red-500 focus:border-red-500";

  return (
    <div className={`${col} mb-4`}>
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${inputBaseStyles} ${
            error ? inputError : inputNormal
          }`}
        >
          <option value="">Select {label}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${inputBaseStyles} ${
            error ? inputError : inputNormal
          }`}
        />
      )}

      {error && <p className="text-red-600 text-xs mt-1">{formik.errors[name]}</p>}
    </div>
  );
}

export default SingleInput;
