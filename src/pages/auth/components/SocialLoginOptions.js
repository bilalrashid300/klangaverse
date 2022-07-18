import React from "react";
import styled from "styled-components";
import { OpenSans600 } from "components/general/Texts";
import google from "assets/icons/google.svg";
import facebook from "assets/icons/facebook.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  margin-top: 50px;
  .line {
    flex: 1;
    border: 1px solid #888888;
  }
  .or {
    margin-bottom: 40px;
    p {
      font-family: Poppins400;
      font-size: 20px;
      color: #4f4f4f;
      margin: 0 10.21px;
    }
  }
  .buttons {
    gap: 38px;
    flex-wrap: wrap;
    margin-bottom: 25px;

    @media (max-width: 1000px) {
      gap: 10px;
      flex-direction: column;
      align-items: center;
    }

    .button {
      border: 1px solid #005bff;
      border-radius: 10px;
      padding: 15px;
      gap: 10px;
      max-width: 214.45px;
      cursor: pointer;
    }
  }
`;

const SocialLoginOptions = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="or flex align-center">
        <div className="line" />
        <p>OR</p>
        <div className="line" />
      </div>
      <div className="buttons flex">
        <div className="button flex align-center">
          <img src={google} alt="Google" height={20} />
          <OpenSans600 color="#005BFF" size="14px">
            {t('log_google')}
          </OpenSans600>
        </div>
        <div className="button flex align-center">
          <img src={facebook} alt="Facebook" height={20} />
          <OpenSans600 color="#005BFF" size="14px">
            {t('log_facebook')}
          </OpenSans600>
        </div>
      </div>
    </Container>
  );
};

export default SocialLoginOptions;
