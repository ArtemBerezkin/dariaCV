import styles from './ICan.module.css';

const skills = [
  {
    id: 'ux',
    title: 'UX исследования',
    description:
      'Проведение качественных и количественных исследований, составление User Flow, CJM/UJM, JTBD. Построение и проверка гипотез основанных на основных метриках (retention rate, LTV и другие). A/B тестирование.',
  },
  {
    id: 'ui',
    title: 'UI разработка',
    description:
      'Создание дизайн-систем и UI kit, а также работа с имеющимися, разработка прототипов, адаптация веб-интерфейса под любой формат.',
  },
];

const ICan = () => (
  <section className={styles.section} id="resume">
    <div className={`container ${styles.inner}`}>
      <h2 className={styles.title}>Что я могу</h2>
      <div className={styles.list}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.item}>
            <span className={styles.itemTitle}>{skill.title}:</span>
            <span className={styles.itemDesc}> {skill.description}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ICan;
