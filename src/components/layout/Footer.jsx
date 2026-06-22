import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { personal } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.brand}>Tejo Prakash</span>
          <span className={styles.tagline}>{personal.tagline}</span>
        </div>
        <div className={styles.links}>
          <a href={personal.github} target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} — Built by Tejo Prakash</p>
      </div>
    </footer>
  );
}
