import React from "react";
import styled from "styled-components";
import AuthenticatedPage from "components/navigation/AuthenticatedPage";
import BasicCard from "components/cards/BasicCard";
import logo from "assets/icons/logo-textless.svg";
import Contribution from "components/general/Contribution";
import PriceGraph from "./components/PriceGraph";
import { useTranslation } from "react-i18next";

const CardGroup = styled.div`
  flex-wrap: wrap;
  padding-bottom: 100px;
  gap: 36px;
  margin-top: 40px;

  @media (max-width: 1059px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-header {
    padding-left: 13.12px;
    padding-top: 16px;
    gap: 27.53px;
    .text {
      p {
        color: #fff;
        font-size: 17px;
        line-height: 26px;
        text-align: center;
      }
      p:first-of-type {
        font-family: Poppins400;
      }
      p:nth-of-type(2) {
        font-family: Poppins600;
      }
    }
  }
  .card-content {
    p {
      font-family: Poppins400;
      font-size: 17px;
      line-height: 26px;
      color: #333333;
    }
  }
  .receiving-wallet {
    padding-top: 69px;
    gap: 13px;
    font-size: 17px;
    p {
      font-family: OpenSans400;
    }
    span {
      font-family: OpenSans600;
      color: #f09819;
    }
  }
  .phase {
    padding: 29px 30px 0 29px;
    p {
      color: #fff;
      font-family: OpenSans600;
    }
    .state {
      border: 1px solid #ffffff;
      border-radius: 10px;
      color: #ffffff;
      font-family: OpenSans600;
      padding: 10px;
    }
  }
  .state-list {
    gap: 19px;
    li {
      span {
        font-size: 17px;
        line-height: 26px;
        font-family: OpenSans400;
        color: #000;
      }
      span:nth-of-type(2) {
        color: #f09819;
        font-family: OpenSans600;
      }
    }
  }
`;

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <AuthenticatedPage>
      <PriceGraph />
      <CardGroup className="flex">
        <BasicCard
          customHeader={
            <div className="flex card-header align-center">
              <img
                src={logo}
                alt="Klangaverse logo without text"
                className="logo"
              />
              <div className="flex-col text">
                <p>{t('token_balance')}</p>
                <p>0 $KLG</p>
              </div>
            </div>
          }
        >
          <div className="card-content">
            <p>{t('your_contribution_in')}</p>
            <Contribution />
          </div>
        </BasicCard>
        <BasicCard headerText={t('receiving_wallet')}>
          <div className="flex align-center justify-center receiving-wallet">
            <p>0x09E197...56D4b1</p>
            <span>{t('edit')}</span>
          </div>
        </BasicCard>
        <BasicCard
          customHeader={
            <div className="phase">
              <div className="text flex space-between align-center">
                <p>{t('phase')} 2</p>
                <div className="state flex align-center justify-center">
                {t('running')}
                </div>
              </div>
            </div>
          }
        >
          <ul className="state-list flex-col">
            <li>
              <span>1 $KLG = </span>
              <span>0.0000034567 USD</span>
            </li>
            <li>
              <span>1 $KLG = </span>
              <span>0.002 BNB</span>
            </li>
          </ul>
        </BasicCard>
      </CardGroup>
    </AuthenticatedPage>
  );
};

export default Dashboard;
