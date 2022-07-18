import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Dashboard } from "assets/icons/navigation/dashboard.svg";
import { ReactComponent as BuyTokens } from "assets/icons/navigation/buy-tokens.svg";
import { ReactComponent as MyTokens } from "assets/icons/navigation/wallet.svg";
import { ReactComponent as Transactions } from "assets/icons/navigation/transactions.svg";
import { ReactComponent as Profile } from "assets/icons/navigation/profile.svg";
import { ReactComponent as MainSite } from "assets/icons/navigation/mainsite.svg";
import { ReactComponent as Logout } from "assets/icons/navigation/logout.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 25px 47px;
  gap: 20px;
  position: fixed;
  width: 256px;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 0px 26px 26px 0px;
  transition: 0.4s ease;

  .nav-links {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 0;
    border-bottom: 1px solid rgba(224, 223, 240, 1);
  }
  .nav-link {
    gap: 17px;
    height: 53.6px;
    width: 206px;
    padding: 15px 28px;
    border-radius: 6px;
    span {
      font-family: Poppins600;
      font-weight: 600;
      font-size: 17px;
      display: flex;
      align-items: center;
      color: #a1a0bd;
    }
    transition: 0.4s ease;
    :not(.active-nav-link):hover {
      background: rgba(255, 240, 219, 0.5);
    }
  }
  .active-nav-link {
    background: #fff0db;
    span {
      color: #f09819;
    }
    svg path {
      fill: #f09819;
    }
  }
  .logout {
    margin-top: auto;
    gap: 18px;
    align-self: flex-start;
    margin-left: 32px;
    cursor: pointer;
    span {
      font-family: Poppins600;
      font-size: 17px;
      color: #cccbd8;
    }
  }
  @media (max-width: 800px) {
    .nav-link,
    .logout {
      width: auto;
      span {
        display: none;
      }
    }
    .logout {
      align-self: center;
      margin-left: 0 !important;
      margin-bottom: 20px;
    }

    width: 150px;
    padding: 0;
    left: -150px;
    z-index: 10001;
    border-right: 1px solid #ccc;

    &.active {
      left: 0;
    }
  }
`;

const SideNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navLinks = [
    { name: t('nav_dashboard'), icon: <Dashboard />, to: "/dashboard" },
    { name: t('nav_buy_tokens'), icon: <BuyTokens />, to: "/buy-tokens" },
    { name: t('nav_my_tokens'), icon: <MyTokens />, to: "/my-tokens" },
    { name: t('nav_transactions'), icon: <Transactions />, to: "/transactions" },
    { name: t('nav_profile'), icon: <Profile />, to: "/profile" },
    { name: t('nav_main_site'), icon: <MainSite />, to: "/" },
  ];
  const logOut = () => navigate("/");
  return (
    <Container id="sidenav">
      <Logo />
      <ul className="nav-links">
        {navLinks.map((navLink, index) => (
          <NavLink
            key={index}
            to={navLink.to}
            className={({ isActive }) =>
              isActive
                ? "nav-link active-nav-link flex align-center"
                : "flex align-center nav-link"
            }
          >
            {navLink.icon}
            <span>{navLink.name}</span>
          </NavLink>
        ))}
      </ul>
      <div className="logout flex align-center" onClick={logOut}>
        <Logout />
        <span>{t('nav_logout')}</span>
      </div>
    </Container>
  );
};

export default SideNav;
