import proptypes from "proptypes";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  border: 1px dashed #000000;
  border-radius: 10px;
  margin-top: 19px;

  .partition {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    height: 72px;
    justify-content: center;
    align-items: center;
    &:first-of-type,
    &:nth-of-type(2) {
      border-right: 1px solid #d8d8d8;
    }
    span {
      font-size: 17px;
      line-height: 26px;
      color: #000;
      text-align: center;
      font-family: Poppins400;
    }
    span:first-of-type {
      color: #f09819;
      font-family: Poppins600;
    }
  }
`;

const Contribution = ({ usd = 0, bnb = 0, usdt = 0 }) => {
  return (
    <Container className="flex">
      <div className="partition">
        <span>{usd}</span>
        <span>USD</span>
      </div>
      <div className="partition">
        <span>{bnb}</span>
        <span>BNB</span>
      </div>
      <div className="partition">
        <span>{usdt}</span>
        <span>USDT</span>
      </div>
    </Container>
  );
};

Contribution.propTypes = {
  usd: proptypes.number,
  bnb: proptypes.number,
  usdt: proptypes.number,
};

export default Contribution;
