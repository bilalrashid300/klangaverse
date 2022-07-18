import React from "react";
import styled from "styled-components";
import { OpenSans400, Oswald500 } from "components/general/Texts";
import rockband from "assets/images/rockband.svg";
import DottedLine from "components/general/DottedLine";
import Subscribe from "components/general/Subscribe";
import Footer from "components/navigation/Footer";
import ScrollToTop from "components/navigation/ScrollToTop";
import Waves from "components/general/Waves";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: 66.27px 140px 0 140px;
  .content {
    margin-bottom: 50px;
    h2 {
      margin-bottom: 19px;
    }
    p {
      line-height: 32px;
    }
    ul {
      list-style: disc;
      padding-left: 20px;
      margin-top: 10px;
      li {
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 1000px) {
    padding: 40px;
    h2.header {
      font-size: 64px;
      margin-bottom: 11px;
      text-align: center;
    }
    .rockband {
      width: 379.27px;
      height: 425.86px;
    }
    .content {
      p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 429px) {
    padding: 30px;
    .content {
      h2 {
        margin-bottom: 14px;
        text-align: center;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;
const About = () => {
  const { t } = useTranslation()
  return (
    <ScrollToTop>
      <Waves />
      <Container className="relative">
        <DottedLine position="left" />
        <DottedLine position="right" />
        <Oswald500 className="header" size="72px">
          {t('about_us_heading')}
        </Oswald500>
        <div className="flex align-center justify-center">
          <img src={rockband} alt="Rockband" className="rockband" />
        </div>
        <div className="content">
          <Oswald500 size="48px">{t('about_h1')}</Oswald500>
          <OpenSans400>
            {t('about_h1_d1')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d2')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d3')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d4')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d5')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d6')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h1_d7')}
          </OpenSans400>
        </div>
        <div className="content">
          <Oswald500 size="48px">{t('about_h2')}</Oswald500>
          <OpenSans400>
            {t('about_h2_d1')}
          </OpenSans400>
        </div>
        {/* The KLANGAVERSE PLEDGE FOR TRANSPARENCY */}
        <div className="content">
          <Oswald500 size="48px">
            {t('about_h3')}
          </Oswald500>
          <OpenSans400>
            {t('about_h3_d1')}
          </OpenSans400>
        </div>
        {/* KLANGAVERSE For Artists */}
        <div className="content">
          <Oswald500 size="48px">{t('about_h4')}</Oswald500>
          <OpenSans400>
            {t('about_h4_d1')}
          </OpenSans400>
          <ul>
            <li>
              <OpenSans400>{t('about_h4_d2')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h4_d3')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h4_d4')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>
              {t('about_h4_d5')}
              </OpenSans400>
            </li>
          </ul>
        </div>
        {/* KLANGAVERSE for Fans */}
        <div className="content">
          <Oswald500 size="48px">{t('about_h5')}</Oswald500>
          <OpenSans400>
            {t('about_h5_d1')}
          </OpenSans400>
          <OpenSans400>
            {t('about_h5_d2')}
          </OpenSans400>
          <br />
          <OpenSans400>
            {t('about_h5_d3')}
          </OpenSans400>
        </div>
        {/* The KLANGAVERSE promise */}
        <div className="content">
          <Oswald500 size="48px">{t('about_h7')}</Oswald500>
          <OpenSans400>
          {t('about_h7_d1')}
          </OpenSans400>
          <br />
          <OpenSans400>
          {t('about_h7_d2')}
          </OpenSans400>
        </div>
        {/* KLANGAVERSE GameFi */}
        <div className="content">
          <Oswald500 size="48px">{t('about_h6')}</Oswald500>
          <OpenSans400>
            {t('about_h6_d1')}
          </OpenSans400>
          <OpenSans400>{t('about_h6_d2')}</OpenSans400>
          <ul>
            <li>
              <OpenSans400>
              {t('about_h6_d3')}
              </OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d4')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d5')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d6')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d7')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d8')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d9')}</OpenSans400>
            </li>
            <li>
              <OpenSans400>{t('about_h6_d10')}</OpenSans400>
            </li>
          </ul>
        </div>
      </Container>
      <Waves />
      <Subscribe />
      <Footer />
    </ScrollToTop>
  );
};

export default About;
