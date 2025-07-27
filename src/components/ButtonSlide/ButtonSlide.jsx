import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
  FaLinkedinIn,
  FaWhatsapp,
  FaTiktok,
  FaSlack,
  FaDiscord,
} from 'react-icons/fa';

import styles from './ButtonSlide.module.css';

const buttons = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: <FaFacebookF className={styles.iconSvg} />,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <FaTwitter className={styles.iconSvg} />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedinIn className={styles.iconSvg} />,
  },
  {
    href: 'https://plus.google.com',
    label: 'Google',
    icon: <FaGooglePlusG className={styles.iconSvg} />,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <FaYoutube className={styles.iconSvg} />,
  },
  {
    href: 'https://telegram.org',
    label: 'Telegram',
    icon: <FaTelegramPlane className={styles.iconSvg} />,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram className={styles.iconSvg} />,
  },
  {
    href: 'https://wa.me/1234567890',
    label: 'WhatsApp',
    icon: <FaWhatsapp className={styles.iconSvg} />,
  },
  {
    href: 'https://tiktok.com/@yourprofile',
    label: 'TikTok',
    icon: <FaTiktok className={styles.iconSvg} />,
  },
  {
    href: 'https://slack.com/yourworkspace',
    label: 'Slack',
    icon: <FaSlack className={styles.iconSvg} />,
  },
  {
    href: 'https://discord.com/invite/yourserver',
    label: 'Discord',
    icon: <FaDiscord className={styles.iconSvg} />,
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
