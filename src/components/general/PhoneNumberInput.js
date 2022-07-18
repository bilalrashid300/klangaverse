import React, { useState } from "react";
import proptypes from "proptypes";
import "react-phone-number-input/style.css";
import { ReactComponent as ArrowDown } from "assets/icons/arrow_down.svg";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
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

  .PhoneInput {
    height: 54px;
    border: 1px solid #888888;
    border-radius: 10px;
    color: #000000;
    font-family: Poppins400;
    padding: 15px;
    background: ${(props) => props.background || "transparent"};
  }

  .PhoneInputCountryIcon,
  .PhoneInputCountryIconImg {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }

  .PhoneInputCountryIconImg {
    object-fit: cover;
  }

  .PhoneInputInput {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    color: #000000;
    font-family: Quicksand700;
    opacity: 0.85;
    font-size: 16px;
    line-height: 20px;

    ::placeholder {
      font-family: Poppins500;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #888888;
    }
  }
  .arrow_component {
    margin-left: 9px;
    span {
      font-family: Quicksand700;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      margin-right: 4px;
    }
  }
`;

const PhoneNumberInput = ({ label, width, background }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState();
  const [selectedCountry, setSelectedCountry] = useState("US");

  const ArrowComponent = () => {
    return (
      <div className="arrow_component flex align-center">
        <span>+{getCountryCallingCode(selectedCountry)}</span>
        <ArrowDown />
      </div>
    );
  };

  return (
    <Container width={width} background={background}>
      {label && <label>{label}</label>}
      <PhoneInput
        placeholder={t('enter_phone')}
        value={value}
        onChange={setValue}
        defaultCountry="US"
        countrySelectProps={{ arrowComponent: ArrowComponent }}
        withCountryCallingCode={false}
        onCountryChange={setSelectedCountry}
      />
    </Container>
  );
};

PhoneNumberInput.propTypes = {
  label: proptypes.string,
  width: proptypes.any,
  background: proptypes.any,
};

export default PhoneNumberInput;
