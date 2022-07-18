import styled from "styled-components";
import React from "react";
import { OpenSans600, Oswald500 } from "components/general/Texts";
import JoinPresale from "components/buttons/JoinPresale";
import COLORS from "assets/styles/colors";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: #fcc7b7;
  padding: 70px 153px 136px 153px;
  position: relative;
  @media (max-width: 620px) {
    padding: 30px;
  }

  @media (max-width: 1000px) {
    h2 {
      text-align: center;
    }
    .salebonuses {
      align-items: center;
      justify-content: center;
      margin-top: 40px !important;
    }
  }

  .salebonuses {
    margin-top: 72px;
    gap: 30px;
    flex-wrap: wrap;
  }

  .salebonus {
    background: ${COLORS.white};
    width: 358px;
    box-shadow: 0px 8px 24px 5px rgba(10, 9, 9, 0.1);
    border-radius: 20px;
    gap: 16px;
    padding: 39px 32px;
  }
  .header {
    margin-bottom: 20px;
  }
  .join_presale_container {
    margin-top: 30px;
  }
  @media (max-width: 720px) {
    .header,
    .content {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

const PreSaleBonuses = () => {
  const { t } = useTranslation();
  const stages = [
    {
      header: `${t('stage')} 1`,
      text: t('stage_text_1'),
    },
    {
      header: `${t('stage')} 2`,
      text: t('stage_text_2'),
    },
    {
      header: `${t('stage')} 3`,
      text: t('stage_text_3'),
    },
  ];
  return (
    <Container>
      <Oswald500>{t('presale_bonuses')}</Oswald500>
      <div className="salebonuses flex">
        {stages.map((stage, index) => (
          <div className="salebonus" key={index}>
            <OpenSans600 className="header" size="33px">
              {stage.header}
            </OpenSans600>
            <OpenSans600 size="33px" className="content">
              {stage.text}
            </OpenSans600>
          </div>
        ))}
      </div>
      <div className="join_presale_container align-center justify-center flex">
        <JoinPresale />
      </div>
    </Container>
  );
};

export default PreSaleBonuses;
