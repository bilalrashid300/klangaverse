import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import girl from "assets/images/large-girl.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 50%;
  background: #fff;
  padding: 37px 40px;
  position: fixed;
  left: 0;

  @media (max-width: 1000px) {
    padding: 0;
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    .large_image_container {
      display: none;
    }
  }
`;

const AuthHalf = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <div className="large_image_container">
        <img src={girl} alt="Girl" style={{ height: "70vh" }} />
      </div>
    </Container>
  );
};

export default AuthHalf;
