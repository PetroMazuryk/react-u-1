import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Лого</div>

      <nav className={styles.navDesktop}>
        <Link href="#">Головна</Link>
        <Link href="#">Про нас</Link>
        <Link href="#">Контакти</Link>
      </nav>

      <button
        className={styles.burgerButton}
        onClick={() => setIsOpen(true)}
        aria-label="Відкрити меню"
      >
        <Menu size={28} />
      </button>

      <div
        className={`${styles.offcanvas} ${isOpen ? styles.offcanvasOpen : ''}`}
      >
        <div className={styles.offcanvasHeader}>
          <div className={styles.logo}>Меню</div>
          <button onClick={() => setIsOpen(false)} aria-label="Закрити меню">
            <X size={24} />
          </button>
        </div>
        <nav className={styles.navMobile}>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Головна
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Про нас
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Контакти
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </header>
  );
}
