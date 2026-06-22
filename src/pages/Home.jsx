import { Link } from 'react-router-dom';
import ScrambleText from '../components/animations/ScrambleText';
import LogoLoop from '../components/animations/LogoLoop';
import MagicBento from '../components/animations/MagicBento';
import ScrollReveal from '../components/animations/ScrollReveal';
import { personal, projects, techLoop } from '../data/siteData';
import styles from './Home.module.css';

const PHRASES = [
  'Prompting is my Programming.',
  'Full Stack. AI-Powered. Always Shipping.',
  'React · Node · Flutter · OpenAI.',
  'Building Products That Think.',
  'Open to Work. Ready to Build.',
];

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.dotGrid} aria-hidden />

        {/* Ambient orbs */}
        <div className={styles.orb1} aria-hidden />
        <div className={styles.orb2} aria-hidden />

        <div className={styles.heroInner}>
          {/* Status badge */}
          <div className={styles.badge}>
            <span className={styles.badgePulse} />
            Available for work &amp; freelance
          </div>

          {/* Name */}
          <h1 className={styles.heroName}>
            <span className={`${styles.nameAccent} grad-text`}>Tejo Prakash</span>
            <span className={styles.nameSurname}>Madabathula</span>
          </h1>

          {/* Scramble tagline */}
          <div className={styles.scrambleWrap}>
            <span className={styles.scrambleCaret}>&gt;</span>
            <ScrambleText
              phrases={PHRASES}
              className={styles.scramble}
              speed={28}
              pauseDuration={3200}
            />
          </div>

          {/* Role pill */}
          <p className={styles.heroRole}>{personal.role}</p>

          {/* CTA buttons */}
          <div className={styles.heroBtns}>
            <Link to="/projects" className="btn btn-gold">
              View my work →
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>

          {/* Scroll hint */}
          <div className={styles.scrollHint} aria-hidden>
            <div className={styles.scrollLine} />
            <span>scroll</span>
          </div>
        </div>
      </section>

      {/* ── LOGO LOOP ── */}
      <section className={styles.loopSection}>
        <div className={styles.loopLabel}>Tech I work with</div>
        <LogoLoop items={techLoop} speed={32} />
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className={styles.projectsSection}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">Selected work</div>
            <h2 className="section-heading">
              Things I've <span className="grad-text">built</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <MagicBento projects={projects} />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className={styles.allProjects}>
              <Link to="/projects" className="btn btn-outline">
                All projects →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OPEN TO WORK STRIP ── */}
      <ScrollReveal>
        <section className={styles.strip}>
          <div className={styles.stripInner}>
            <div className={styles.stripText}>
              <span className={styles.stripDot} />
              <p>Open to full-time roles, freelance gigs &amp; interesting collaborations.</p>
            </div>
            <Link to="/contact" className="btn btn-gold">Let's talk →</Link>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
