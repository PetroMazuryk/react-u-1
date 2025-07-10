import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

import styles from './ButtonSlide.module.css';

const buttons = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: <FaFacebookF size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <FaTwitter size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedinIn size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://plus.google.com',
    label: 'Google',
    icon: <FaGooglePlusG size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <FaYoutube size={28} className={styles.iconSvg} />,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram size={28} className={styles.iconSvg} />,
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
