import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import ProjectCard from './ProjectCard.jsx';
import projects from './projects.js';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Мои проекты</h2>
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          slidesPerView={1}
          className={styles.swiper}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.id}>
              <ProjectCard
                project={project}
                index={i}
                total={projects.length}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
