import React from "react";
import proptypes from "proptypes";
import { useCountdown } from "hooks/useCountdown";
import { Oswald500 } from "./Texts";
import { useTranslation } from "react-i18next";

const Countdown = ({ targetDate }) => {
  const { t } = useTranslation();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const hasPassed = new Date() > targetDate;
  return (
    <div className="presale_container">
      <div className="header_with_music_bg">
        <Oswald500>{t('presale_text')}</Oswald500>
      </div>
      <div className="countdown">
        <div className="countdown_item">
          <h2 className="countdown_item_value">{hasPassed ? 0 : days}</h2>
          <span className="countdown_item_value">{t('days')}</span>
        </div>
        <div className="countdown_item">
          <h2 className="countdown_item_value">{hasPassed ? 0 : hours}</h2>
          <span className="countdown_item_value">{t('hours')}</span>
        </div>
        <div className="countdown_item">
          <h2 className="countdown_item_value">{hasPassed ? 0 : minutes}</h2>
          <span className="countdown_item_value">{t('mins')}</span>
        </div>
        <div className="countdown_item">
          <h2 className="countdown_item_value">{hasPassed ? 0 : seconds}</h2>
          <span className="countdown_item_value">{t('secs')}</span>
        </div>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: proptypes.any,
};

export default Countdown;
