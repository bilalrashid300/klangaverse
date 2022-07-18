import React from "react";
import clx from "classnames";
import { Link } from "react-router-dom";
import AuthHalf from "components/auth/AuthHalf";
import PhoneNumberInput from "components/general/PhoneNumberInput";
import ScrollToTop from "components/navigation/ScrollToTop";
import Input, { Select } from "components/general/Input";
import smallGirl from "../../assets/images/small-girl.svg";
import styles from "./styles/auth.module.css";
import Button from "./components/Button";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const checkBoxRef = React.useRef();
  const onClickLabel = () => checkBoxRef?.current?.click();
  return (
    <ScrollToTop hasNavBar={false}>
      <div className={styles.wrapper}>
        <AuthHalf />
        <div className={styles.form_container}>
          <h2 className={styles.header}>{t('register_heading')}</h2>
          <form autoComplete="off">
            <Input label={t("full_name")} placeholder={t('enter_name')} autoFocus />
            <Input
              label={t("email")}
              placeholder={t('enter_email')}
              type="email"
            />
            <PhoneNumberInput label={t('phone')} />
            <div className={styles.password_group}>
              <Input
                label={t('password')}
                placeholder={t('enter_password')}
                type="password"
              />
              <Input
                label={t('confirm_password')}
                placeholder={t('reenter_password')}
                type="password"
              />
            </div>
            <div className={styles.purchase_details}>
              <h2 className={styles.purchase_details_header}>
                {t('purchase_details_heading')}
              </h2>
              <Select
                label={t('full_name')}
                placeholder={t('enter_email')}
                type="email"
              />
              <Input label={t('amount')} placeholder="$" type="number" />
            </div>
          </form>
          <div className={clx(styles.terms, "flex align-center")}>
            <input type="checkbox" name="terms" ref={checkBoxRef} />
            <p onClick={onClickLabel}>
              {t('i_agree_to')}<span> {t('term')}</span> {t('and')} <span>{t('privacy_policy')}</span>
            </p>
          </div>
          <Button text={t('signup')} />
          <div className={styles.login_prompt}>
            <p>
              {t('already_account')}?{" "}
              <Link to="/login">
                <span>{t('login')}</span>
              </Link>
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

export default Register;
