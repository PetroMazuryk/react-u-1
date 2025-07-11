import React from 'react';

import clsx from 'clsx';
import RippleButton from 'components/RippleButton/RippleButton';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import ButtonSlide from 'components/ButtonSlide/ButtonSlide';

import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <div className={styles.btnWrapper}>
      <div className={styles.pageItem}>
        <RippleButton className={clsx(styles.rippleButton)}>
          Ripple Button
        </RippleButton>
      </div>

      <SocialIcons />

      <ButtonSlide />
    </div>
  );
};

export default Buttons;
