import { Link } from 'react-router-dom';
import ScrollReveal from '../components/animations/ScrollReveal';
import { personal, skills, experience } from '../data/siteData';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>

      {/* ── PAGE HEADER ── */}
      <section className={styles.header}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">About me</div>
            <h1 className={`section-heading ${styles.pageTitle}`}>
              The dev behind<br />
              <span className="grad-text">the prompts</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BIO + AVATAR ── */}
      <section className={styles.bioSection}>
        <div className="section-wrap">
          <div className={styles.bioGrid}>

            {/* Avatar */}
            <ScrollReveal className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <div className={styles.avatarRingOuter} />
                <div className={styles.avatarRingInner} />
                <div className={styles.avatarInner}>
                  <span className={styles.avatarInitials}>TP</span>
                  <span className={styles.avatarSub}>Full Stack Dev</span>
                </div>
                <div className={styles.avatarBadge}>
                  <span className={styles.avatarBadgeDot} />
                  Open to work
                </div>
              </div>

              {/* Quick facts */}
              <div className={styles.quickFacts}>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Location</span>
                  <span className={styles.factValue}>Visakhapatnam, India</span>
                </div>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Focus</span>
                  <span className={styles.factValue}>Full Stack + AI</span>
                </div>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Available</span>
                  <span className={styles.factValue}>Remote / Freelance</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bio text */}
            <div className={styles.bioContent}>
              {personal.about.map((para, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <p className={styles.bioPara}>{para}</p>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={250}>
                <div className={styles.bioBtns}>
                  <a href="/resume.pdf" download className="btn btn-gold">Download CV ↓</a>
                  <Link to="/contact" className="btn btn-outline">Contact me →</Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS GRID ── */}
      <section className={styles.skillsSection}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">What I use</div>
            <h2 className="section-heading">
              My <span className="grad-text">stack</span>
            </h2>
          </ScrollReveal>
          <div className={styles.skillsGrid}>
            {skills.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 60}>
                <div className={`glass-card ${styles.skillCard}`}>
                  <div className={styles.skillIcon}>{group.icon}</div>
                  <div className={styles.skillCat}>{group.category}</div>
                  <div className={styles.skillTags}>
                    {group.items.map(item => (
                      <span key={item} className={styles.skillTag}>{item}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section className={styles.expSection}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">Journey</div>
            <h2 className="section-heading">
              Experience &amp; <span className="grad-text">background</span>
            </h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.expMeta}>
                      <span className={styles.expType}>{exp.type}</span>
                      <span className={styles.expPeriod}>{exp.period}</span>
                    </div>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expCompany}>{exp.company}</p>
                    <ul className={styles.expBullets}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} className={styles.expBullet}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
