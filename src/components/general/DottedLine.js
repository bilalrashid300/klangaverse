import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  border-left: 2px dashed #000;
  .circle {
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 13px;
    background: #000;
    left: -14px;
  }
  .circle.top {
    top: 0;
  }
  .circle.bottom {
    bottom: 0;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const DottedLine = ({ position, style = {}, withoutTop }) => {
  return (
    <Container className={position || "left"} style={style}>
      {!withoutTop && <div className="circle top" />}
      <div className="circle bottom" />
    </Container>
  );
};

DottedLine.propTypes = {
  position: PropTypes.string.isRequired,
  style: PropTypes.any,
  withoutTop: PropTypes.bool,
};

export default DottedLine;
