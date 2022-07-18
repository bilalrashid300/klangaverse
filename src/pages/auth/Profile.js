import Input, { Select } from "components/general/Input";
import PhoneNumberInput from "components/general/PhoneNumberInput";
import AuthenticatedPage from "components/navigation/AuthenticatedPage";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "./components/Button";
import ProfileBanner from "./components/ProfileBanner";


const Container = styled.div`
  .header {
    font-family: Poppins600;
    font-size: 32px;
    line-height: 48px;
    color: #000;
    margin-bottom: 34px;
  }
  .tabs {
    margin-top: 69px;
    gap: 20px;

    @media (max-width: 1060px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  form {
    margin-top: 50px;
    .row {
      gap: 25px;
      flex-wrap: wrap;
      margin-bottom: 25px;
      @media (max-width: 435px) {
        > div,
        .responsive {
          width: 100%;
        }
      }
      label {
        color: #000;
      }
      input:not(.PhoneInputInput) {
        width: 436px;
        @media (max-width: 435px) {
          width: 100%;
        }
      }
    }
  }
  .btn_container {
    padding-bottom: 100px;
    .ml_auto {
      margin-left: auto;
      margin-right: 136px;
      @media (max-width: 1200px) {
        margin-left: 0;
      }
    }
  }
  .password_form {
    margin-left: 73px;
    max-width: 436px;
    padding-bottom: 70px;
    @media (max-width: 500px) {
      margin-left: 0;
      input,
      > div {
        @media (max-width: 435px) {
          width: 100%;
        }
      }
    }
    .update_password {
      margin-top: 19px;
    }
  }
`;

const Profile = () => {
  const { t } = useTranslation();
  const tabs = [t('personal_data'), "Change Password"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <AuthenticatedPage>
      <Container>
        <h1 className="header">{t('nav_profile')}</h1>
        <ProfileBanner />
        <div className="flex tabs items-center justify-center">
          {tabs.map((tab, index) => (
            <Button
              onClick={() => setCurrentTab(tab)}
              text={tab}
              width="174px"
              key={index}
              color={currentTab === tab ? "var(--primary)" : "transparent"}
              border={currentTab === tab ? "none" : "1px solid #979797"}
              textColor={currentTab === tab ? "#fff" : "#979797"}
            />
          ))}
        </div>
        {currentTab === tabs[0] ? (
          <form>
            <div className="row flex">
              <Input label={t('full_name')} placeholder="Ken Modric" />
              <Input
                label={t('email')}
                placeholder="kenmodric@gmail.com"
                type="email"
              />
            </div>
            <div className="row flex">
              <PhoneNumberInput
                label={t('phone')}
                placeholder="11 000 555"
                width="436px"
                background="#fff"
              />
              <Select label={t('nationality')} width="436px" />
            </div>
            <div className="btn_container flex">
              <div className="ml_auto">
                <Button
                  text={t('update_profile')}
                  width="298px"
                  styleName="responsive"
                />
              </div>
            </div>
          </form>
        ) : (
          <form className="flex-col password_form">
            <Input label={t('old_pw')} type="password" />
            <Input label={t('new_pw')} type="password" />
            <Input label={t('confirm_pw')} type="password" />
            <div className="update_password">
              <Button text={t('update_profile')} styleName="responsive" />
            </div>
          </form>
        )}
      </Container>
    </AuthenticatedPage>
  );
};

export default Profile;
