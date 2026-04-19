import styles from './Portfolio.module.css';

const ArrowLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectCard = ({ project, index, total, onPrev, onNext }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={project.image} alt={project.title} className={styles.image} />
    </div>
    <div className={styles.panel}>
      <div className={styles.panelTop}>
        <span className={styles.counter}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.block}>
          <span className={styles.label}>Задача</span>
          <p className={styles.text}>{project.task}</p>
        </div>
        <div className={styles.block}>
          <span className={styles.label}>Итог</span>
          <ul className={styles.results}>
            {project.results.map((r) => (
              <li key={r} className={styles.resultItem}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.nav}>
        <button className={styles.navBtn} onClick={onPrev} aria-label="Предыдущий проект">
          <ArrowLeft />
        </button>
        <button className={styles.navBtn} onClick={onNext} aria-label="Следующий проект">
          <ArrowRight />
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
