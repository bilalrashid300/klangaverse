import AuthenticatedPage from "components/navigation/AuthenticatedPage";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


const Container = styled.div`
  padding-bottom: 100px;

  > div {
    overflow-x: scroll;
  }

  width: 100%;
  .header {
    font-family: Poppins600;
    font-size: 32px;
    line-height: 48px;
    color: #000;
    margin-bottom: 34px;
  }
  table {
    width: 100%;

    thead {
      background: linear-gradient(90deg, #ff8008 0%, #ffc837 100%);
      td {
        height: 95px;
        padding: 0 15px;
        color: #fff;
        font-family: Poppins600;
        border-right: 2px solid #ffffff;
        vertical-align: middle;
        text-align: center;
        :last-of-type {
          border-right: none;
        }
      }
    }
    tbody {
      @media (max-width: 1085px) {
        overflow-x: hidden;
      }
      td {
        background: #ffffff;
        height: 137px;
        text-align: center;
        font-family: Poppins400;
        &.align-left {
          text-align: left;
          padding-left: 48px;
        }
        &.type {
          font-family: Poppins600;
          color: #f09819;
        }
        .faded {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;

const Transactions = () => {
  const { t } = useTranslation();

  const transactions = [
    {
      tx_no: "TNX014316",
      date: "22 Mar, 2022 09:03 PM",
      tokens: "5,000,000",
      amount_bnb: "0.2",
      amount_usd: "$50",
      to: "bs123xfg344",
      type: t('purchased'),
    },
  ];

  return (
    <AuthenticatedPage>
      <Container>
        <h1 className="header">{t('nav_transactions')}</h1>
        <div>
          <table>
            <thead>
              <tr>
                <td>{t('table_label_1')}</td>
                <td>{t('table_label_2')}</td>
                <td>{t('table_label_3')} BNB</td>
                <td>{t('table_label_3')} USD</td>
                <td>{t('table_label_4')}</td>
                <td>{t('table_label_5')}</td>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="align-left">
                    <div className="flex-col">
                      <span>{transaction.tx_no}</span>
                      <span className="faded">{transaction.date}</span>
                    </div>
                  </td>
                  <td>{transaction.tokens}</td>
                  <td>{transaction.amount_bnb}</td>
                  <td>{transaction.amount_usd}</td>
                  <td>{transaction.to}</td>
                  <td className="type">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </AuthenticatedPage>
  );
};

export default Transactions;
