import styles from './AboutMe.module.css';

// const base = import.meta.env.BASE_URL;

// const photos = [
//   { src: `${base}about/photo1.jpg`, alt: 'Фото 1', className: 'photoTopLeft' },
//   { src: `${base}about/photo2.jpg`, alt: 'Фото 2', className: 'photoTopRight' },
//   { src: `${base}about/photo3.jpg`, alt: 'Фото 3', className: 'photoBottomLeft1' },
//   { src: `${base}about/photo4.jpg`, alt: 'Фото 4', className: 'photoBottomRight1' },
//   { src: `${base}about/photo5.jpg`, alt: 'Фото 5', className: 'photoBottomRight2' },
// ];

const AboutMe = () => (
  <section className={styles.section}>
    <div className="container">
      <div className={styles.cardWrapper}>
        <div className={styles.cardBack} />
        <div className={styles.card}>
          {/* <div className={styles.photosZone}>
            {photos.map((photo) => (
              <div key={photo.src} className={`${styles.photo} ${styles[photo.className]}`}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div> */}
          <div className={styles.textArea}>
            <h2 className={styles.title}>Немного о себе</h2>
            <p className={styles.text}>
              Образование в области философии и перевода. Жила в Китае и говорю на китайском,
              английском и французском. Много читаю, рисую, путешествую и катаюсь на лодочках.
              Вдохновляюсь красотой мира вокруг.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
