import COLORS from "assets/styles/colors";

const { default: styled } = require("styled-components");

export const Oswald500 = styled.h2`
  margin: 0;
  font-family: Oswald500;
  font-size: ${(props) => props.size || "56px"};
  color: ${COLORS.dark};
`;

export const OpenSans400 = styled.p`
  margin: 0;
  font-family: OpenSans400;
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || COLORS.dark};
`;

export const OpenSans600 = styled(OpenSans400)`
  margin: 0;
  font-family: OpenSans600;
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || COLORS.dark};
`;
