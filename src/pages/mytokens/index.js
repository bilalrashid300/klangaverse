import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AuthenticatedPage from "components/navigation/AuthenticatedPage";
import BasicCard from "components/cards/BasicCard";
import logo from "assets/icons/logo-textless.svg";
import Contribution from "components/general/Contribution";
import { ReactComponent as LinkIcon } from "assets/icons/link.svg";
import { ReactComponent as Copy } from "assets/icons/copy.svg";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding-bottom: 100px;
  .referral_card {
    width: 730px;
  }
  .page-header {
    font-family: Poppins600;
    font-size: 32px;
    line-height: 48px;
    color: #000;
  }
  .referral {
    margin-top: 36px;
    .referral_header {
      padding-left: 107px;
      padding-top: 29px;
      font-family: OpenSans600;
      color: #fff;
    }
    .invite {
      font-family: Poppins400;
      font-size: 17px;
      line-height: 26px;
      color: #747474;
      margin-bottom: 25px;
    }
  }
  @media (max-width: 1024px) {
    .referral_card {
      width: auto;
    }
  }
`;

const CardGroup = styled.div`
  gap: 36px;
  margin-top: 40px;
  .buy-more-tokens {
    padding: 14px 10px;
    width: 298px;
    height: 54px;
    background: #f09819;
    border-radius: 8px;
    border: none;
    font-size: 17px;
    color: #fff;
    font-family: Poppins600;
    margin-top: 30px;
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
  .token-list {
    gap: 20px;
    li {
      span {
        font-size: 17px;
        line-height: 26px;
        font-family: OpenSans400;
        color: rgba(51, 51, 51, 0.7);
      }
      span:nth-of-type(2) {
        color: #000000;
        font-family: OpenSans600;
      }
    }
  }
`;

const ReferralLinkContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  max-width: 552px;
  height: 54px;
  padding: 0 20px;
  
  svg{
    flex-shrink:0;
  }

  .link {
    font-family: Poppins400;
    font-size: 17px;
    line-height: 26px;
    color: #000000;
    margin: 0 20px;
  }

  @media (max-width: 540px) {
    .link {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
  }
    }
  }
`;

const MyTokens = () => {
  const { t } = useTranslation();
  const referralUrl = "https://presale.klangaverse/invite?ref=UD098";
  const showToast = () => toast.success("Referral url copied!");
  return (
    <AuthenticatedPage>
      <Container>
        <h1 className="page-header">{t('nav_my_tokens')}</h1>

        <CardGroup className="flex wraps">
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
              <button className="buy-more-tokens" type="button">
                {t('buy_more_tokens')}
              </button>
            </div>
          </BasicCard>

          <BasicCard
            customHeader={
              <div className="flex-col card-header align-center justify-center">
                <div className="text">
                  <p>{t('total_token_amount')}</p>
                  <p>0 $KLG</p>
                </div>
              </div>
            }
          >
            <ul className="token-list flex-col">
              <li className="space-between align-center flex">
                <span>{t('purchased_token')}</span>
                <span>0 $KLG</span>
              </li>
            </ul>
          </BasicCard>

          <BasicCard headerText={t('receiving_wallet')}>
            <div className="flex align-center justify-center receiving-wallet">
              <p>0x09E197...56D4b1</p>
              <span>{t('edit')}</span>
            </div>
          </BasicCard>
        </CardGroup>
        <div className="referral">
          <BasicCard
            className="referral_card"
            customHeader={
              <p className="referral_header">{t('earn')}</p>
            }
          >
            <p className="invite">{t('invite')}</p>
            <ReferralLinkContainer className="flex align-center space-between">
              <LinkIcon />
              <p className="link">{referralUrl}</p>
              <CopyToClipboard text={referralUrl} onCopy={showToast}>
                <Copy className="cursor-pointer" />
              </CopyToClipboard>
            </ReferralLinkContainer>
          </BasicCard>
        </div>
      </Container>
    </AuthenticatedPage>
  );
};

export default MyTokens;
