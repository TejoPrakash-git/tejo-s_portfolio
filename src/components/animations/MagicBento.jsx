import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MagicBento.module.css';

function BentoCard({ project, size }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <Link
      to={`/projects`}
      ref={cardRef}
      className={`${styles.card} ${styles[size]}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.spotlight} />
      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.num}>{project.num}</span>
          <div className={styles.arrow}>↗</div>
        </div>
        <div className={styles.body}>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>
        </div>
        <div className={styles.tags}>
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
          {project.tags.length > 3 && (
            <span className={styles.tagMore}>+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function MagicBento({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((p) => (
        <BentoCard key={p.id} project={p} size={p.size} />
      ))}
    </div>
  );
}
