import React from "react";
import PropTypes from "proptypes";
import DottedLine from "components/general/DottedLine";
import styled from "styled-components";
import ScrollToTop from "components/navigation/ScrollToTop";
import { OpenSans400, OpenSans600, Oswald500 } from "components/general/Texts";
import { faqList } from "utils/data";
import Subscribe from "components/general/Subscribe";
import Footer from "components/navigation/Footer";
import Waves from "components/general/Waves";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: 66.27px 140px 136px 140px;

  .faqs_container {
    margin-top: 69px;
    gap: 20px;
  }
  @media (max-width: 1000px) {
    padding: 24px;
    h2 {
      font-size: 64px;
    }
    .faqs_container {
      margin-top: 30px;
    }
  }
`;

const FaqContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 37px 173px 17px 68px;
  gap: 15px;
  p:nth-of-type(2) {
    color: #8a8a8a;
  }
  @media (max-width: 1000px) {
    padding: 15px;
    p:nth-of-type(2) {
      font-size: 16px;
    }
  }
`;

const Faq = ({ question, answer }) => {
  return (
    <FaqContainer className="flex-col">
      <OpenSans600>{question}</OpenSans600>
      <OpenSans400 size="16px">{answer}</OpenSans400>
    </FaqContainer>
  );
};

const Faqs = () => {
  const { t } = useTranslation();

  const faqList = [
    {
      question: t('faq_q1'),
      answer: t('faq_d1')
    },
    {
      question: t('faq_q2'),
      answer: t('faq_d2')
    },
    {
      question: t('faq_q3'),
      answer: t('faq_d3')
    },
    {
      question: t('faq_q4'),
      answer: t('faq_d4')
    },
    {
      question: t('faq_q5'),
      answer: t('faq_d5')
    },
    {
      question: t('faq_q6'),
      answer: t('faq_d6')
    },
  ]

  return (
    <ScrollToTop>
      <Waves />
      <Container className="relative">
        <DottedLine position="left" />
        <DottedLine position="right" />
        <Oswald500 size="72px">{t('nav_faq')}</Oswald500>
        <div className="faqs_container flex-col">
          {faqList.map((faq, index) => (
            <Faq question={faq.question} answer={faq.answer} key={index} />
          ))}
        </div>
      </Container>
      <Waves />
      <Subscribe />
      <Footer />
    </ScrollToTop>
  );
};

Faq.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
};

export default Faqs;
