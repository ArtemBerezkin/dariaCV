import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard.jsx';
import projects from './projects.js';
import styles from './Portfolio.module.css';

const Portfolio = () => (
  <section className={styles.section}>
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>Мои проекты</h2>
    </div>
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className={styles.swiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Portfolio;
