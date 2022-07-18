import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "assets/icons/logo.svg";
import COLORS from "assets/styles/colors";
import Connect from "../../assets/icons/connect-icon.svg";
import { MobileNav } from "./MobileMenu";
import ReactFlagsSelect from "react-flags-select";
import { getCode, getCodeForFlag } from "utils/helper";
import i18n from "i18n";
import { useTranslation } from "react-i18next";

const NavbarContainer = styled.nav`
  height: 204px;
  background: linear-gradient(90deg, #ff512f 0%, #f09819 100%);
  padding: 20px 120px 62px 120px;
  .mobile_nav{
    display:none;
    .background{
      position:fixed;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
      background: #000000;
      z-index:3
    }
  }
  .hamburger{
    cursor:pointer;
    width:fit-content;
  }

  @media(max-width:1189px){
    padding:20px;
  }

  @media(max-width:1087px){
    height:74px;
    background:${COLORS.white};
    .right_nav, .main_nav{
      display:none !important;
    }
    .mobile_nav{
      display:block;
    }
  }

  .main_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLORS.dark};
  }

  .right_nav {
    display: flex;
    align-items: center;

    a, .more span {
      color: ${COLORS.dark};
      font-family: OpenSans400;

      .more {
        position: relative;

        .subnav {
          position: absolute;
          height: 400px;
          left: 79px;
          width: 168px;
        }
      }

      :not(.button) {
        margin-right: 50px;
        :last-of-type {
          margin-right: 80px;
        }
      }
    }

    .button {
      padding: 14px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      border: 1px solid ${COLORS.dark};
      border-radius: 4px;
    }

    .connect_wallet_button {
      display: flex;
      align-items: center;
      margin-left: 30px;

      img {
        margin-right: 10px;
      }
    }
    .more {
        position: relative;
        list-style:none;
        cursor:pointer;
    
        .subnav_wrapper{
            position: absolute;
            left: 50%;
            margin-left:-84px;
            transform: translateY(30px);
            opacity:0;
            pointer-events:none;
            transition:0.4s ease;
            padding-bottom:10px;
            z-index:10;
    
        }
        .subnav {
          margin-top:24px;
          width: 168px;
          background: linear-gradient(90deg, #FF512F 0%, #F09819 100%);
          border-radius: 5px;
          display:flex;
          flex-direction:column;
          gap:30px;
          padding:30px;
          pointer-events:none;

          li{
            color:${COLORS.white};
            font-family: OpenSans400;
            a{
              margin:0;
              color:${COLORS.white};
              width:100%;
            }
          }
        }

        :hover{
            .subnav_wrapper{
                transform: translateY(0px);
                opacity:1;
                pointer-events:all;
                .subnav{
                    pointer-events:all;
                }
            }
        }
    
  }

`;

const NavBar = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(getCodeForFlag('en'));
  
  const handleLocaleChange = (code) => {
    setSelected(code);
    i18n.changeLanguage(getCode(code));
  };
  return (
    <NavbarContainer>
      <MobileNav />
      <div className="main_nav">
        <Link to="/">
          <img src={logo} alt="KlangaVerse" />
        </Link>
        <div className="right_nav">
          <Link to="/about">{t('nav_about')}</Link>
          <Link to="/tokenomics">{t('nav_tokenomics')}</Link>
          <li className="more">
            <span>{t('more')}</span>
            <div className="subnav_wrapper">
              <ul className="subnav">
                <li>
                  <Link to="/">{t('nav_whitepaper')}</Link>
                </li>
                <li>{t('nav_audit')}</li>
                <li>
                  <Link to="/soundmap">{t('nav_sound')}</Link>
                </li>
                <li>
                  <Link to="/faq">{t('nav_faq')}</Link>
                </li>
              </ul>
            </div>
          </li>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => handleLocaleChange(code)}
            countries={["US", "DE", "ES", "FR", "TR"]}
            className="locale-switcher"
            customLabels={{
              US: t("lang_english"),
              DE: t("lang_german"),
              ES: t("lang_spanish"),
              FR: t("lang_french"),
              TR: t("lang_turkish"),
            }}
          />
          <Link className="button" to="/register">
            {t('join_presale')}
          </Link>
          <a className="button connect_wallet_button" href="/">
            <img src={Connect} alt="Connect wallet" />
            <span>{t('connect_wallet')}</span>
          </a>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default NavBar;
