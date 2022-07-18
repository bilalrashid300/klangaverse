import React from "react";
import styled from "styled-components";
import { ReactComponent as NotificationBell } from "assets/icons/navigation/notification.svg";
import { ReactComponent as Hamburger } from "assets/icons/navigation/hamburger.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  .hamburger {
    display: none;
    margin-right: 44px;
    cursor: pointer;
  }
  height: 98px;
  position: fixed;
  width: calc(100% - 292px);
  top: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  .left-nav {
    padding: 36px 0 36px 38px;
  }
  .greeting {
    font-size: 17px;
    color: #000;
    font-family: Poppins400;
  }
  .right-nav {
    gap: 22.1px;
    margin-right: 36px;
  }
  .profile-image-container {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: orange;
  }

  @media (max-width: 800px) {
    width: 100%;
    .hamburger {
      display: block;
    }
    .greeting {
      padding: 0;
    }
  }
`;

const toggleSideNav = () =>
  document.getElementById("sidenav").classList.toggle("active");

const TopNav = () => {
  const { t } = useTranslation();
  return (
    <Container className="flex align-center space-between">
      <div className="left-nav flex align-center">
        <div className="hamburger" onClick={toggleSideNav}>
          <Hamburger />
        </div>
        <p className="greeting">{t('welcome')}, Ken!</p>
      </div>
      <div className="flex align-center right-nav">
        <NotificationBell className="cursor-pointer" />
        <div className="profile-image-container cursor-pointer" />
      </div>
    </Container>
  );
};

export default TopNav;
