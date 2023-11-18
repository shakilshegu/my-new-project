import React from "react";

const Input = ({ label, type, id }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block  text-gray-600 font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        autoComplete="off"
        className="w-ful p-2 rounded-md border border-orange-700  "
      />
    </div>
  );
};

export default Input;
