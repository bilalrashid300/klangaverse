import React from "react";
import styled from "styled-components";
import PropTypes from "proptypes";
import DottedLine from "components/general/DottedLine";
import { OpenSans400, OpenSans600, Oswald500 } from "components/general/Texts";
import Subscribe from "components/general/Subscribe";
import Footer from "components/navigation/Footer";
import ScrollToTop from "components/navigation/ScrollToTop";
import COLORS from "assets/styles/colors";
import Waves from "components/general/Waves";
import { ReactComponent as TokenVesting } from "assets/images/token-vesting.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: ${COLORS.offwhite};
  padding: 68px 154px 106.42px 169px;
  .desc {
    margin-top: 39px;
  }
  .description_list {
    margin-top: 59px;
    margin-bottom: 70px;
    li {
      display: grid;
      column-gap: 152px;
      margin-bottom: 15px;
      grid-template-columns: 142px 167px;
    }
  }
  .points_legend {
    margin-left: 120px;
    @media (max-width: 1262px) {
      margin-left: 0;
    }
  }
  .vesting_details {
    margin-top: 20px;
    margin-bottom: 66px;
  }
  .points {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 58px;
    row-gap: 14px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
  .points_header {
    margin-bottom: 30px;
    span:first-of-type {
      font-family: Inter400;
      color: #333333;
      font-size: 18px;
    }
    span:nth-of-type(2) {
      font-family: Inter500;
      color: #000;
      font-size: 18px;
    }
  }
  @media (max-width: 1000px) {
    padding: 30px;
    .header {
      font-size: 64px;
    }
    .desc {
      margin-top: 20px;
      font-size: 16px;
    }
    .description_list {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      margin-bottom: 30px;
      li {
        column-gap: 30px;
        p {
          font-size: 16px;
        }
      }
    }
    .vesting {
      h2 {
        font-size: 32px;
      }
      .vesting_details {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 50px;
      }
    }
    .points_legend {
      margin: 50px auto 0 auto;
    }
  }
`;

const PointContainer = styled.div`
  .point {
    width: 17px;
    height: 16px;
    background: ${(props) => props.color};
    margin-right: 15px;
  }
  p {
    font-family: Inter400;
    font-size: 18px;
    color: #333333;
  }
`;

const Point = ({ color, text }) => (
  <PointContainer color={color} className="flex align-center">
    <div className="point" />
    <p>{text}</p>
  </PointContainer>
);

const Tokenomics = () => {
  const { t } = useTranslation();
  
  const tokenomicsProperties = [
    { name: t('tokenomics_label_1'), value: "KLANGAVERSE" },
    { name: t('tokenomics_label_2'), value: "$KLG" },
    { name: t('tokenomics_label_3'), value: "12" },
    { name: t('tokenomics_label_4'), value: "10,000,000,000" },
    { name: t('tokenomics_label_5'), value: "3,000,000,000" },
  ];

  const points = [
    { text: t('ts_1'), color: "#F07B72" },
    { text: t('ts_5'), color: "#34A853" },
    { text: t('ts_2'), color: "#7BAAF7" },
    { text: t('ts_6'), color: "#FBBC04" },
    { text: t('ts_3'), color: "#46BDC6" },
    { text: t('ts_7'), color: "#EA4335" },
    { text: t('ts_4'), color: "#FF6D01" },
    { text: t('ts_8'), color: "#4285F4" },
  ];

  return (
    <ScrollToTop>
      <Container className="relative">
        <DottedLine position="left" style={{ top: "68px", bottom: 0 }} />
        <DottedLine position="right" style={{ top: "68px", bottom: 0 }} />
        <Oswald500 size="72px" className="header">
          {t('nav_tokenomics')}
        </Oswald500>
        <OpenSans400 className="desc">
          {t('tokenomics_desc')}
        </OpenSans400>
        <ul className="description_list">
          {tokenomicsProperties.map((property, index) => (
            <li key={index}>
              <OpenSans400>{property.name}</OpenSans400>
              <OpenSans600>{property.value}</OpenSans600>
            </li>
          ))}
        </ul>
        <div className="vesting">
          <Oswald500 size="52px">{t('token_vesting_heading')}</Oswald500>
          <OpenSans400 className="vesting_details">
          {t('token_vesting_desc')}
          </OpenSans400>
        </div>
        <div className="flex wraps">
          <TokenVesting style={{ marginBottom: 10 }} />
          <div className="points_legend">
            <h2 className="points_header">
              <span>{t('total_supply')}</span>
              <span> 100 Billion</span>
            </h2>
            <div className="points">
              {points.map((point, _) => (
                <Point color={point.color} text={point.text} key={_} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Waves />
      <Subscribe />
      <Footer />
    </ScrollToTop>
  );
};

Point.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Tokenomics;
