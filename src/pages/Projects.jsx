import { useState } from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';
import { projects } from '../data/siteData';
import styles from './Projects.module.css';

const ALL_TAGS = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active));

  return (
    <div className={styles.page}>

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">Selected work</div>
            <h1 className={`section-heading ${styles.pageTitle}`}>
              Projects I've <span className="grad-text">shipped</span>
            </h1>
          </ScrollReveal>

          {/* Filter pills */}
          <ScrollReveal delay={100}>
            <div className={styles.filters}>
              {ALL_TAGS.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  className={`${styles.filterPill} ${active === tag ? styles.filterActive : ''}`}
                  onClick={() => setActive(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECT CARDS ── */}
      <section className={styles.listSection}>
        <div className="section-wrap">
          <div className={styles.list}>
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 80}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project: p }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <span className={styles.cardNum}>{p.num}</span>
        <div className={styles.cardMeta}>
          <span className={styles.cardSubtitle}>{p.subtitle}</span>
          <h2 className={styles.cardTitle}>{p.title}</h2>
          <p className={styles.cardDesc}>{p.longDescription}</p>
          <div className={styles.cardTags}>
            {p.tags.map(t => (
              <span key={t} className={styles.cardTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cardActions}>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-outline ${styles.actionBtn}`}
        >
          GitHub ↗
        </a>
        {p.live && p.live !== '#' && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-gold ${styles.actionBtn}`}
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
}
