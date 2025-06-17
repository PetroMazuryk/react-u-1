import React from 'react';
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
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
      </ul>

      {/* Social Icons Hover Effect #2 */}
      <div className={styles.wrapper2}>
        <a href="#" className={styles.icon2}>
          <i className="fs-brands fs-instagram">Instagram</i>
        </a>
        <a href="#" className={styles.icon2}>
          <i className="fs-brands fs-linkedin-in">Linkedin</i>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
