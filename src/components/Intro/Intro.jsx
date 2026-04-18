import styles from './Intro.module.css';

const heroPhoto = 'public/hero.jpg';

const Intro = () => (
  <section className={styles.intro}>
    <div className={`container ${styles.inner}`}>
      <p className={styles.textLeft}>
        Привет! Я UX/UI дизайнер веб и мобильных приложений с большим опытом в службе поддержке.
      </p>

      <div className={styles.photoWrapper}>
        <div className={styles.cardBack1} />
        <div className={styles.cardBack2} />
        <div className={styles.card}>
          <img src={heroPhoto} alt="Дарья Дятлова" className={styles.photo} />
        </div>
      </div>

      <p className={styles.textRight}>
        Работаю в FinTech и EdTech продуктах с B2B и B2C сегментами
      </p>
    </div>
  </section>
);

export default Intro;
