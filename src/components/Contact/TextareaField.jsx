import React, { useState } from "react";
const TextareaField = (props) => {
  const { handleChange, label, name, placeholder, value } = props;
  return (
    <div className="form-elem">
      <label>{label}</label>
      <textarea
        className="form-control-area"
        required
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextareaField;
