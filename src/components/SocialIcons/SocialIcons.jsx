import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from 'react-icons/fa';

import styles from './SocialIcons.module.css';

const SocialIcons = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <Link href="#" className={styles.socialLink} aria-label="Facebook">
          <FaFacebookF className={styles.icon} />
        </Link>
      </li>
      <li className={styles.socialItem}>
        <Link href="#" className={styles.socialLink} aria-label="Twitter">
          <FaTwitter className={styles.icon} />
        </Link>
      </li>
      <li className={styles.socialItem}>
        <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
          <FaLinkedinIn className={styles.icon} />
        </Link>
      </li>
      <li className={styles.socialItem}>
        <Link href="#" className={styles.socialLink} aria-label="Google Plus">
          <FaGooglePlusG className={styles.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
