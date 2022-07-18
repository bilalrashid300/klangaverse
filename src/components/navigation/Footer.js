import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "assets/icons/logo.svg";
import { OpenSans400, OpenSans600 } from "components/general/Texts";
import COLORS from "assets/styles/colors";
import { useTranslation } from "react-i18next";



const Container = styled.div`
  background: ${COLORS.white};
  padding: 77px 141px 132px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 104px;
  .logo {
    height: 235px;
    width: 235px;
  }

  @media (max-width: 1096px) {
    padding: 30px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
    align-items: center;
    row-gap: 50px;
    .footer-list p {
      font-size: 16px;
    }
    .logo {
      height: 164px;
      width: 164px;
    }
  }

  .footer-list {
    gap: 25px;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = [
    {
      header: t('company_links'),
      links: [
        { name: t('nav_about'), link: "/about" },
        { name: t('nav_tokenomics'), link: "/tokenomics" },
        { name: t('nav_whitepaper'), link: "/" },
      ],
    },
    {
      header: t('quick_links'),
      links: [
        { name: t('pancakeswap'), link: "/" },
        { name: t('nav_audit'), link: "/" },
        { name: t('nav_sound'), link: "/soundmap" },
      ],
    },
    {
      header: t('socials'),
      links: [
        { name: "Twitter", link: "/" },
        { name: "Telegram", link: "/" },
        { name: "Discord", link: "/" },
      ],
    },
  ];
  return (
    <Container>
      <Link to="/">
        <img className="logo" src={logo} alt="Klangverse" />
      </Link>
      {footerLinks.map((footerLinkList, index) => (
        <div className="footer-list flex-col" key={index}>
          <OpenSans600 size="32px">{footerLinkList.header}</OpenSans600>
          {footerLinkList.links.map((link, _) => (
            <Link to={link.link} key={_}>
              <OpenSans400 color="#333333">{link.name}</OpenSans400>
            </Link>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Footer;
