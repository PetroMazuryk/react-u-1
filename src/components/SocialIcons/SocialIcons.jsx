import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';

import styles from './SocialIcons.module.css';

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: <FaFacebookF className={styles.icon} />,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <FaTwitter className={styles.icon} />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedinIn className={styles.icon} />,
  },
  {
    href: 'https://plus.google.com',
    label: 'Google Plus',
    icon: <FaGooglePlusG className={styles.icon} />,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <FaYoutube className={styles.icon} />,
  },
  {
    href: 'https://telegram.org',
    label: 'Telegram',
    icon: <FaTelegramPlane className={styles.icon} />,
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: <FaInstagram className={styles.icon} />,
  },
  {
    href: 'https://wa.me/1234567890',
    label: 'WhatsApp',
    icon: <FaWhatsapp className={styles.icon} />,
  },
  {
    href: 'https://tiktok.com/@yourprofile',
    label: 'TikTok',
    icon: <FaTiktok className={styles.icon} />,
  },
];

const SocialIcons = () => {
  return (
    <ul className={styles.socialList}>
      {socialLinks.map(({ href, label, icon }) => (
        <li className={styles.socialItem} key={label}>
          <a
            href={href}
            className={styles.socialLink}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
