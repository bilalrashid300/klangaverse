import React from "react";
import styled from "styled-components";
import COLORS from "assets/styles/colors";
import About from "components/home/About";
import WhatWeOffer from "components/home/WhatWeOffer";
import CaseStudies from "components/home/CaseStudies";
import PreSaleBonuses from "components/home/PreSaleBonuses";
import Subscribe from "components/general/Subscribe";
import Countdown from "components/general/Countdown";
import ScrollToTop from "components/navigation/ScrollToTop";
import Waves from "components/general/Waves";
import Footer from "components/navigation/Footer";
import JoinPresale from "components/buttons/JoinPresale";
import girl from "assets/images/girl-listening-to-music.svg";
import styles from "./styles/home.module.css";
import { useTranslation } from "react-i18next";

const HomeContainer = styled.div`
  grid-template-columns: 60% 40%;
  gap: 30px;
  padding: 136px 102.76px 0 120px;

  @media (max-width: 1087px) {
    grid-template-columns: 1fr;
    padding: 30px;
    .girl-image-container {
      display: none;
    }
    .header {
      text-align: center;
    }
  }

  @media (max-width: 720px) {
    .header {
      font-size: 64px;
      line-height: 72px;
    }
  }

  @media (max-width: 420px) {
    .header {
      font-size: 3rem;
      line-height: 42px;
    }
  }

  @media (max-width: 380px) {
    .header {
      font-size: 25px;
      line-height: 28px;
    }
  }

  @media (max-width: 420px) {
    .countdown {
      display: grid !important;
      grid-template-columns: repeat(2, auto);
      column-gap: 20px;
      .countdown_item {
        width: 100px !important;
      }
    }
  }

  @media (max-width: 570px) {
    .join_presale {
      width: auto;
      padding: 10px 30px;
    }
  }

  .presale_container {
    margin-top: 40px;
    background: #ffffff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 20px 0 22px 0;
    @media (max-width: 640px) {
      margin-left: -30px;
      margin-right: -30px;
    }
    .countdown {
      gap: 20px;
      margin-top: 29px;
    }
    .countdown_item {
      width: 82px;
    }
    h2 {
      font-size: 32px;
      line-height: 24px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .header_with_music_bg {
    display: grid;
    place-items: center;
  }
  .countdown {
    display: flex;
    gap: 33px;
    justify-content: center;
    margin-top: 10px;
  }
  .countdown_item {
    width: 113px;
    height: 128px;
    background: rgba(217, 217, 217, 0.37);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2,
    p {
      font-family: Oswald500;
      color: ${COLORS.dark};
      font-size: 48px;
      line-height: 48px;
    }

    p {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

const H1 = styled.h1`
  font-size: 108px;
  line-height: 120px;
`;

const P = styled.p`
  font-size: 40px;
  line-height: 48px;
  @media (max-width: 1087px) {
    text-align: center;
  }
  @media (max-width: 720px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Buttons = styled.div`
  margin-top: 40px;
`;
const targetDate = new Date(2022, 12, 1);
const Home = () => {
  const { t } = useTranslation();
  return (
    <ScrollToTop>
      <HomeContainer className={styles.hero}>
        <div className={styles.heroContent}>
          <H1 className="header">KLANGAVERSE</H1>
          <P>{t('hero_text')}</P>
          <Buttons className={styles.buttons}>
            <JoinPresale className="join_presale" />
            <a className={styles.darkbutton} href="/">
            {t('nav_whitepaper')}
            </a>
          </Buttons>
          <Countdown targetDate={targetDate} />
        </div>
        <div className="girl-image-container">
          <img src={girl} alt="Girl listening to music" />
        </div>
      </HomeContainer>
      <Waves />
      <PreSaleBonuses />
      <Waves />
      <About />
      <WhatWeOffer />
      <CaseStudies />
      <Subscribe />
      <Footer />
    </ScrollToTop>
  );
};

export default Home;
