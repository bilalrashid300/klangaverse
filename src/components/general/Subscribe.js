import React from "react";
import styled from "styled-components";
import SubscribeBackground from "assets/images/subscribe-background.svg";
import COLORS from "assets/styles/colors";
import { OpenSans600 } from "./Texts";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  height: 557px;
  background: linear-gradient(90deg, rgba(21, 35, 49, 0) 0%, #000000 100%),
    url(${SubscribeBackground});
  background-position: center;
  background-size: cover;
  .flex-col {
    gap: 40px;
  }
  input[type="email"] {
    background: #e4e4e4;
    border-radius: 8px;
    padding: 16px 32px;
    width: 414px;
    height: 56px;
    outline: none;
    border: none;
    font-family: OpenSans600;
    color: #747474;
    font-size: 18px;
    margin-right: 12px;
  }

  input[type="submit"] {
    background: #f09819;
    border-radius: 8px;
    width: 197px;
    height: 56px;
    padding: 16px 32px;
    color: #ffffff;
    font-family: OpenSans600;
    font-size: 18px;
    outline: none;
    border: none;
  }

  @media (max-width: 780px) {
    .flex-col p {
      font-size: 24px;
      text-align: center;
    }
    input[type="email"] {
      width: 222px;
    }
    input[type="submit"] {
      width: 141px;
    }
  }

  @media (max-width: 429px) {
    height: 329px;
    form {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      input[type="email"] {
        width: 80%;
      }
    }
  }
`;

const   Subscribe = () => {
  const { t } = useTranslation();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="flex align-center justify-center">
      <div className="flex-col justify-center">
        <OpenSans600 color={COLORS.white} size="40px">
          {t('subscribe_text')}
        </OpenSans600>
        <form className="flex align-center justify-center" onSubmit={onSubmit}>
          <input type="email" placeholder={t('enter_email')} />
          <input type="submit" value={t("subscribe")} />
        </form>
      </div>
    </Container>
  );
};

export default Subscribe;
