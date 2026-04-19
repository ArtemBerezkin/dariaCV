import styles from './Portfolio.module.css';

const ProjectCard = ({ project }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={project.image} alt={project.title} className={styles.image} />
    </div>
    <div className={styles.content}>
      <div className={styles.block}>
        <span className={styles.label}>Проект</span>
        <p className={styles.projectTitle}>{project.title}</p>
      </div>
      <div className={styles.block}>
        <span className={styles.label}>Задача</span>
        <p className={styles.text}>{project.task}</p>
      </div>
      <div className={styles.block}>
        <span className={styles.label}>Итог</span>
        <ul className={styles.results}>
          {project.results.map((result) => (
            <li key={result} className={styles.resultItem}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectCard;
