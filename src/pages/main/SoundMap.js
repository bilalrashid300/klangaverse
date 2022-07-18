import React from "react";
import styled from "styled-components";
import DottedLine from "components/general/DottedLine";
import { Oswald500 } from "components/general/Texts";
import Subscribe from "components/general/Subscribe";
import Footer from "components/navigation/Footer";
import ScrollToTop from "components/navigation/ScrollToTop";
import COLORS from "assets/styles/colors";
import Waves from "components/general/Waves";
import { ReactComponent as SoundMapImage } from "assets/images/soundmap.svg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: ${COLORS.offwhite};
  padding: 68px 154px 170px 169px;

  .sound_map_image_container {
    margin-top: 40px;
    padding-left: 191px;
  }
  @media (max-width: 1000px) {
    padding: 30px;
    h2 {
      font-size: 64px;
      text-align: center;
    }
    .sound_map_image_container {
      padding-left: 0;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const SoundMap = () => {
  const { t } = useTranslation();
  return (
    <ScrollToTop>
      <Container className="relative">
        <DottedLine position="left" style={{ top: "68px", bottom: 0 }} />
        <DottedLine position="right" style={{ top: "68px", bottom: 0 }} />
        <Oswald500 size="72px">{t('nav_sound')}</Oswald500>
        <div className="sound_map_image_container">
          <SoundMapImage />
        </div>
      </Container>
      <Waves />
      <Subscribe />
      <Footer />
    </ScrollToTop>
  );
};

export default SoundMap;
