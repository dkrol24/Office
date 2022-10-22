import React, { useState } from "react";

function InputField(props) {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div className="form-elem">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputField;
