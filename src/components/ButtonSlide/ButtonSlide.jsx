import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import styles from './ButtonSlide.module.css';

const buttons = [
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedinIn size={28} className={styles.iconSvg} />,
  },
];

const ButtonSlide = () => {
  return (
    <div className={styles.wrapper}>
      {buttons.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          className={`${styles.icon} ${styles[label.toLowerCase()]}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default ButtonSlide;
