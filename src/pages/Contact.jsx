import { useState } from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';
import { personal } from '../data/siteData';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  return (
    <div className={styles.page}>

      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="section-eyebrow">Let's connect</div>
            <h1 className={`section-heading ${styles.pageTitle}`}>
              Got a project?<br />
              <span className="grad-text">Let's talk.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className={styles.mainSection}>
        <div className="section-wrap">
          <div className={styles.grid}>

            {/* Left — info */}
            <div className={styles.infoCol}>
              <ScrollReveal>
                <p className={styles.infoText}>
                  I'm open to full-time roles, freelance work, and interesting collaborations.
                  Whether you're building something new or need a developer who ships fast and thinks in AI — reach out.
                </p>
              </ScrollReveal>

              <div className={styles.socialLinks}>
                {[
                  { icon: '⬡', label: 'GitHub', sub: 'TejoPrakash-git', href: personal.github },
                  { icon: '◈', label: 'LinkedIn', sub: 'm-tejo-prakash', href: personal.linkedin },
                  { icon: '✉', label: 'Email', sub: personal.email, href: `mailto:${personal.email}` },
                ].map((s, i) => (
                  <ScrollReveal key={s.label} delay={i * 80}>
                    <a href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                      <div className={styles.socialIcon}>{s.icon}</div>
                      <div className={styles.socialText}>
                        <span className={styles.socialLabel}>{s.label}</span>
                        <span className={styles.socialSub}>{s.sub}</span>
                      </div>
                      <span className={styles.socialArrow}>↗</span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={300}>
                <a href="/resume.pdf" download className={`btn btn-outline ${styles.resumeBtn}`}>
                  Download Resume ↓
                </a>
              </ScrollReveal>
            </div>

            {/* Right — form */}
            <ScrollReveal delay={150}>
              <div className={styles.formCard}>
                {status === 'sent' ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>Message sent!</h3>
                    <p className={styles.successText}>I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className={styles.formTitle}>Send a message</h2>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>What's on your mind?</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, role, or idea..."
                        className={styles.formTextarea}
                      />
                    </div>
                    <button
                      className={styles.formSubmit}
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send message →'}
                    </button>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
