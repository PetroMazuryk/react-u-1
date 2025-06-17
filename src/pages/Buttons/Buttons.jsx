import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <div className={styles.btnWrapper}>
      <div className={styles.pageItem}>
        <button data-ripple="once" className={styles.button} type="button">
          Button once
        </button>
      </div>

      {/* Social Icons Hover Effect #1 */}
      <ul className={styles.socialList}>
        <li>
          <Link href="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fab fa-google-plus-g"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
