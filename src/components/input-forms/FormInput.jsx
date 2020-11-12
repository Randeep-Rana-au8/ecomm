import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      <label>
        {label ? (
          <div
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </div>
        ) : null}
      </label>
    </div>
  );
};

export default FormInput;
