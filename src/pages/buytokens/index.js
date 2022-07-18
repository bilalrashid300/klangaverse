import React from "react";
import styled from "styled-components";
import AuthenticatedPage from "components/navigation/AuthenticatedPage";
import Input, { Select } from "components/general/Input";
import { useTranslation } from "react-i18next";

const Form = styled.div`
  .header {
    font-family: Poppins600;
    font-size: 32px;
    line-height: 48px;
    color: #000;
  }
  form {
    margin-top: 39px;
    background: linear-gradient(90deg, #ff8008 0%, #ffc837 100%);
    border-radius: 26px;
    padding: 53px 68px;
    gap: 50px;

    label {
      font-family: Poppins400;
      font-size: 24px;
      line-height: 36px;
      color: #fff;
    }
    select,
    input {
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
    }
    select {
      max-width: 496px;
    }
    .large-input {
      max-width: 280px;
    }
    .small-input {
      max-width: 135px;
    }
    .equal {
      margin: 0 26px;
      color: #fff;
      font-family: OpenSans600;
      display: block;
      font-size: 30px;
    }
  }
  .agreement p {
    color: #ffffff;
    font-family: OpenSans400;
    margin-left: 5px;
  }
  .make-payment {
    padding: 14px 10px;
    border: 3px solid #ffffff;
    border-radius: 8px;
    color: #fff;
    font-family: OpenSans600;
    align-self: center;
    background: transparent;
    width: 270px;
    height: 54px;
  }
`;

const paymentOptions = [{ label: "USDT", value: "USDT" }];

const BuyTokens = () => {
  const { t } = useTranslation();
  const checkBoxRef = React.useRef();
  const toggleClickAgreement = () => checkBoxRef?.current?.click();
  return (
    <AuthenticatedPage>
      <Form>
        <h1 className="header">{ t('nav_buy_tokens') }</h1>
        <form className="flex-col">
          <div>
            <Select
              label={t('select_payment_type')}
              className="select"
              options={paymentOptions}
            />
          </div>
          <div className="flex align-center wraps">
            <Input placeholder="USDT" className="large-input" />
            <span className="equal">=</span>
            <Input placeholder="BNB" className="small-input" />
            <span className="equal">=</span>
            <Input placeholder="$KLG" className="small-input" />
          </div>
          <div className="flex agreement">
            <input type="checkbox" ref={checkBoxRef} />
            <p
              className="cursor-pointer select-none"
              onClick={toggleClickAgreement}
            >
              {t('purchase_agree_text')}
            </p>
          </div>
          <button
            className="make-payment flex align-center justify-center cursor-pointer"
            type="submit"
          >
            {t('make_payment')}
          </button>
        </form>
      </Form>
    </AuthenticatedPage>
  );
};

export default BuyTokens;
