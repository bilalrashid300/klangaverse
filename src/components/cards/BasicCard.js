import proptypes from "proptypes";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 299px;
  background: #fff;
  border-radius: 20px;
  width: ${(props) => props.width || "347px"};
`;

const CardHead = styled.div`
  background: linear-gradient(90deg, #ff8008 0%, #ffc837 100%);
  border-radius: 20px 20px 0px 0px;
  height: 95px;

  .header {
    font-family: Poppins600;
    font-weight: 600;
    font-size: 17px;
    color: #ffffff;
    padding: 29px 0 40px 0;
    text-align: center;
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;

const BasicCard = ({
  headerText,
  customHeader,
  children,
  width,
  className,
}) => {
  return (
    <Container width={width} className={className}>
      <CardHead>
        {customHeader && customHeader}
        {headerText && <p className="header">{headerText}</p>}
      </CardHead>
      <CardBody>{children}</CardBody>
    </Container>
  );
};

BasicCard.propTypes = {
  headerText: proptypes.string,
  customHeader: proptypes.element,
  children: proptypes.any,
  width: proptypes.string,
  className: proptypes.string,
};

export default BasicCard;
