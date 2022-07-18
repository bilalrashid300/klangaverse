import proptypes from "proptypes";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 288px;
  background: #f77923;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 52px;
  font-family: OpenSans600;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const JoinPresale = ({ className }) => {
  const navigate = useNavigate();
  const goToPresale = () => navigate("/register");
  const { t } = useTranslation();
  return (
    <ButtonContainer className={className} onClick={goToPresale}>
      {t('join_presale')}
    </ButtonContainer>
  );
};

JoinPresale.propTypes = {
  className: proptypes.string,
};

export default JoinPresale;
