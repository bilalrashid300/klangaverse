/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Select from "react-select";

const FlagImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`;

const Option = styled.div`
  gap: 10px;
  span {
    color: #fff;
    font-family: OpenSans600;
  }
  > * {
    z-index: 1;
  }
`;

const languages = [
  { country: "US", value: "English" },
  { country: "ES", value: "Spanish" },
  { country: "FR", value: "French" },
];

const flagUrl = (countryCode) =>
  `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;

const Flag = ({ country }) => {
  return <FlagImage src={flagUrl(country)} alt={country} />;
};

const Container = styled.div`
  margin: auto;
  .language-select {
    width: 200px;
    background: transparent;

    div {
      background: #000;
    }
  }
`;

const LanguageSelect = () => {
  return (
    <Container>
      <Select
        className="language-select"
        placeholder="Select Country"
        onChange={console.log}
        options={languages}
        defaultValue={{ country: "US", value: "English" }}
        styles={{ width: 200, fontFamily: "OpenSans600" }}
        formatOptionLabel={(option) => (
          <Option className="flex align-center">
            <Flag country={option.country} />
            <span>{option.value}</span>
          </Option>
        )}
      />
    </Container>
  );
};

export default LanguageSelect;
