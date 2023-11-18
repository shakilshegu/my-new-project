import React from "react";

const Input = ({ label, type, id ,...props}) => {
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
        className="w-ful p-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500 "
        {...props}

      />
    </div>
  );
};

export default Input;
