import styled from "styled-components";
import React from "react";
import DottedLine from "components/general/DottedLine";
import { OpenSans400, Oswald500 } from "components/general/Texts";
import COLORS from "assets/styles/colors";
import { ReactComponent as Bag } from "assets/icons/bag.svg";
import { ReactComponent as Community } from "assets/icons/community.svg";
import { ReactComponent as Ribbon } from "assets/icons/ribbon.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: #fcc7b7;
  padding: 70px 153px 136px 153px;
  position: relative;
  @media (max-width: 620px) {
    padding: 30px;
  }

  @media (max-width: 1000px) {
    h2 {
      text-align: center;
    }
    .offers {
      align-items: center;
      justify-content: center;
      margin-top: 40px !important;
    }
  }

  .offers {
    margin-top: 72px;
    gap: 30px;
    flex-wrap: wrap;
  }

  .offer {
    background: ${COLORS.white};
    width: 358px;
    height: 258px;
    box-shadow: 0px 8px 24px 5px rgba(10, 9, 9, 0.1);
    border-radius: 20px;
    gap: 16px;
    padding: 40px 42px;
  }
`;

const WhatWeOffer = () => {
  const { t } = useTranslation();
  const offers = [
    {
      icon: <Bag />,
      text: t('what_we_offer_text_1')
    },
    {
      icon: <Community />,
      text: t('what_we_offer_text_2')
    },
    {
      icon: <Ribbon />,
      text: t('what_we_offer_text_3')
    },
  ];
  
  return (
    <Container>
      <DottedLine position="left" withoutTop />
      <DottedLine position="right" withoutTop />
      <Oswald500>{t('what_we_offer')}</Oswald500>
      <div className="offers flex">
        {offers.map((offer, index) => (
          <div
            className="offer flex-col justify-center align-center"
            key={index}
          >
            {offer.icon}
            <OpenSans400 size="20px">{offer.text}</OpenSans400>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhatWeOffer;
