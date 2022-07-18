/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import eyeSlash from "assets/icons/eye-slash.svg";
import eye from "assets/icons/eye.svg";

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => props.width || "auto"};
  label {
    font-family: Poppins600;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  input,
  select {
    min-height: 54px;
    border: 1px solid #888888;
    border-radius: 10px;
    color: #000000;
    padding: 15px;
    font-family: Poppins400;
  }
  select {
    cursor: pointer;
  }
  input::placeholder {
    font-family: Poppins500;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #888888;
  }
`;

export const PasswordFormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-family: Poppins600;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .input_wrapper {
    height: 54px;
    overflow: hidden;
    border: 1px solid #888888;
    border-radius: 10px;
    color: #000000;
    padding: 15px;
    font-family: Poppins400;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
  }
  input::placeholder {
    font-family: Poppins500;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #888888;
  }
  .icon {
    margin-right: 20px;
  }
`;

export const PasswordInput = ({ label, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  return (
    <PasswordFormGroup>
      <label>{label}</label>
      <div className="input_wrapper flex align-center">
        <input {...rest} type={passwordVisible ? "text" : "password"} />
        <div
          className="icon cursor-pointer flex align-center justify-center"
          onClick={togglePasswordVisibility}
        >
          <img
            src={passwordVisible ? eyeSlash : eye}
            alt="Toggle password visibility"
          />
        </div>
      </div>
    </PasswordFormGroup>
  );
};

const Input = ({ label, ...rest }) => {
  return (
    <FormGroup>
      <label>{label}</label>
      <input {...rest} />
    </FormGroup>
  );
};

export const Select = ({ label, options, labelProps, width, ...rest }) => {
  return (
    <FormGroup width={width}>
      <label {...labelProps}>{label}</label>
      <select {...rest}>
        {(options || []).map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormGroup>
  );
};

export default Input;
