import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      <a href="/" className={styles.logo}>
        <div className={styles.logoIcon} />
        <span className={styles.logoText}>Дарья Дятлова</span>
      </a>
      <nav className={styles.nav}>
        <a href="#resume" className={styles.navLink}>
          Резюме
        </a>
        <a href="#contacts" className={styles.navLink}>
          Контакты
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
