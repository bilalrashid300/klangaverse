import React from "react";
import clx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import AuthHalf from "components/auth/AuthHalf";
import ScrollToTop from "components/navigation/ScrollToTop";
import Input, { PasswordInput } from "components/general/Input";
import { OpenSans400 } from "components/general/Texts";
import smallGirl from "../../assets/images/small-girl.svg";
import styles from "./styles/auth.module.css";
import Button from "./components/Button";
import SocialLoginOptions from "./components/SocialLoginOptions";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const checkBoxRef = React.useRef();
  const navigate = useNavigate();
  const onClickLabel = () => checkBoxRef?.current?.click();
  const navigateToDashboard = () => navigate("/dashboard");
  return (
    <ScrollToTop hasNavBar={false}>
      <div className={styles.wrapper}>
        <AuthHalf />
        <div className={styles.form_container}>
          <h2 className={styles.header}>{t('login_heading')}</h2>
          <form autoComplete="off">
            <Input
              label={t('email')}
              placeholder={t('enter_email')}
              type="email"
              autoFocus
            />
            <PasswordInput
              label={t('password')}
              placeholder={t('enter_password')}
              type="password"
            />
          </form>
          <div className={clx(styles.terms, "flex align-center space-between")}>
            <div className="flex align-center">
              <input type="checkbox" name="remember_me" ref={checkBoxRef} />
              <p
                onClick={onClickLabel}
                className="cursor-pointer select-none"
                style={{ marginLeft: 2 }}
              >
                {t('remember_me')}
              </p>
            </div>
            <a href="https://www.google.com">
              <OpenSans400 size="16px" color="#4056CC">
                {t('forgot_password')}?
              </OpenSans400>
            </a>
          </div>
          <Button text={t('login')} maxWidth="100%" onClick={navigateToDashboard} />
          <SocialLoginOptions />
          <div className={styles.login_prompt}>
            <p>
              {t('dont_account')}?{" "}
              <Link to="/register">{t('register')}</Link>
            </p>
          </div>
          <div
            className={clx(
              styles.hidden_girl,
              "flex justify-center align-center"
            )}
          >
            <img src={smallGirl} alt="Little girl listening to music" />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Login;
