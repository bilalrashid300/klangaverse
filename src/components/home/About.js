import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rockband from "assets/images/rockband.svg";
import { Oswald500, OpenSans400, OpenSans600 } from "components/general/Texts";
import DottedLine from "components/general/DottedLine";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.div`
  padding: 66.27px 140px 0 140px;
  position: relative;
  .text {
    max-width: 566px;
  }
  @media (max-width: 620px) {
    padding: 30px;
    h2 {
      font-size: 64px;
    }
  }
  @media (max-width: 1000px) {
    padding-bottom: 108px;
    h2 {
      text-align: center;
    }
    .content-container {
      flex-direction: column;
      gap: 46.14px;
    }
  }
  @media (max-width: 429px) {
    .content-container {
      gap: 20px;
    }
    .content-container img {
      width: 379.27px;
      height: 425.86px;
    }
  }
`;

const About = () => {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <DottedLine position="left" />
      <DottedLine position="right" />
      <Oswald500 size="72px">{t('about_us_heading')}</Oswald500>
      <div className="flex align-center content-container">
        <img src={rockband} alt="Rockband" />
        <div className="text">
          <OpenSans400 style={{ marginBottom: 30 }}>
            {t('about_us_desc')}
          </OpenSans400>
          <Link to="/about">
            <OpenSans600 color="#FF8008">{t('read_more')}</OpenSans600>
          </Link>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
