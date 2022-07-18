import React from "react";
import styled from "styled-components";
import { Oswald500 } from "components/general/Texts";
import OurBitcoinNews from "assets/icons/our-bitcoin-news.svg";
import CoinCheckup from "assets/icons/coin-checkup.svg";
import BeinCrypto from "assets/icons/bein-crypto.svg";
import CoinTelegraph from "assets/icons/coin-telegraph.svg";
import BusinessStandard from "assets/icons/business-standard.svg";
import CoinCodex from "assets/icons/coin-codex.svg";
import CoinMarketBag from "assets/icons/coin-market-bag.svg";
import AnalyticsInsight from "assets/icons/analytics-insight.svg";
import Waves from "components/general/Waves";
import { useTranslation } from "react-i18next";

const companies = [
  { icon: OurBitcoinNews, alt: "Our bitcoin news" },
  { icon: CoinCheckup, alt: "Coin checkup" },
  { icon: BeinCrypto, alt: "bein crypto" },
  { icon: CoinTelegraph, alt: "Coin Telegraph" },
  { icon: BusinessStandard, alt: "Business Standard" },
  { icon: CoinCodex, alt: "Coin codex" },
  { icon: CoinMarketBag, alt: "Coin Market Bag" },
  { icon: AnalyticsInsight, alt: "Analytics Insight" },
];

const Container = styled.div`
  padding: 70px 126.68px 64.62px 140px;
  background: #fffbfa;

  @media (max-width: 620px) {
    padding: 30px;

    h2 {
      font-size: 64px;
    }
  }

  .case_studies {
    display: grid;
    padding-left: 28px;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 75px;
    margin-top: 40px;
    align-items: center;
    row-gap: 20.61px;

    @media (max-width: 1388px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

const CaseStudies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Oswald500 size="72px">{t('as_seen_on')}</Oswald500>
        <div className="case_studies">
          {companies.map((company, index) => (
            <img src={company.icon} alt={company.alt} key={index} />
          ))}
        </div>
      </Container>
      <Waves />
    </div>
  );
};

export default CaseStudies;
