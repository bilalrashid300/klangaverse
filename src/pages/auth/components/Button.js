import React from "react";
import proptypes from "proptypes";
import styled from "styled-components";
import clx from "classnames";

const ButtonContainer = styled.div`
  font-family: Poppins600;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.textColor || "#ffffff"};
  background-color: ${(props) => props.color || "var(--primary)"};
  max-width: ${(props) => props.maxWidth || "495.35px"};
  width: ${(props) => props.width || "auto"};
  height: 54px;
  border-radius: 8px;
  cursor: pointer;
  border: ${(props) => props.border || "none"};

  @media (max-width: 1000px) {
    margin: auto;
  }
`;

const Button = ({
  text,
  styleName,
  maxWidth,
  color,
  onClick,
  width,
  textColor,
  border,
}) => {
  console.log(styleName, text, color);
  return (
    <ButtonContainer
      className={clx("flex align-center justify-center", styleName)}
      maxWidth={maxWidth}
      onClick={onClick}
      color={color}
      width={width}
      textColor={textColor}
      border={border}
    >
      {text}
    </ButtonContainer>
  );
};

Button.propTypes = {
  text: proptypes.string,
  maxWidth: proptypes.any,
  width: proptypes.any,
  border: proptypes.any,
  onClick: proptypes.func,
  color: proptypes.string,
  textColor: proptypes.string,
  styleName: proptypes.any,
};

export default Button;
