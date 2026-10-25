import {
  TelegramIcon,
  FacebookIcon,
  PhoneIcon,
  SparklesIcon,
  BookOpenIcon,
  GraduationCapIcon,
  UsersIcon,
  TargetIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  TrophyIcon,
} from '../components/Icons';
import logoImg from '../assets/logo.jpg';
import { TRANSLATIONS } from '../utils/translations';

export default function LandingPage({ lang = 'km', onLaunchMaths }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.km;

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featureIcons = [
    <UsersIcon key="users" size={22} />,
    <GraduationCapIcon key="grad" size={22} />,
    <TargetIcon key="target" size={22} />,
    <TrophyIcon key="trophy" size={22} />,
    <SparklesIcon key="sparkle" size={22} />,
    <BookOpenIcon key="book" size={22} />,
  ];

  return (
    <div className={`landing-page ${lang === 'km' ? 'lang-khmer' : ''}`}>
      {/* 1. EARLY 2026 PROMO BANNER */}
      <section className="promo-banner" aria-label="Special Promotion">
        <div className="promo-container">
          <div className="promo-badge-tag">
            <SparklesIcon size={14} />
            <span>{t.promoBadge}</span>
          </div>
          <div className="promo-content">
            <h2 className="promo-heading">{t.promoTitle}</h2>
            <p className="promo-text">{t.promoSubtitle}</p>
            <p className="promo-highlight">{t.promoDetails}</p>
            <div className="promo-footer">
              <span className="promo-seats-note">
                <strong>{t.promoSeats}</strong>
              </span>
              <a
                href="https://t.me/BrillianceTutoringKH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-promo"
                id="cta-promo-telegram"
              >
                <TelegramIcon size={16} />
                <span>{t.promoCta}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO SECTION */}
      <section className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="hero-title">{t.heroQuestion}</h1>

            <p className="hero-description">{t.heroAnswer}</p>

            <p className="hero-tagline">{t.tagline}</p>

            <div className="hero-ctas">
              <a
                href="https://t.me/BrillianceTutoringKH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-hero"
                id="cta-hero-telegram"
              >
                <TelegramIcon size={18} />
                <span>{t.heroCtaPrimary}</span>
              </a>

              <button
                type="button"
                onClick={onLaunchMaths}
                className="btn btn-practice btn-hero"
                id="cta-hero-math-portal"
              >
                <SparklesIcon size={18} />
                <span>{t.heroCtaPractice}</span>
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('curriculums')}
                className="btn btn-secondary btn-hero"
                id="cta-hero-curriculum"
              >
                <BookOpenIcon size={18} />
                <span>{t.heroCtaSecondary}</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-logo-wrapper">
                <img
                  src={logoImg}
                  alt="Brilliance Tutoring Logo"
                  className="hero-logo-img"
                />
              </div>
              <div className="hero-school-name">{t.schoolName}</div>
              <div className="hero-motto">{t.motto}</div>
              <div className="hero-highlights">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">5+</span>
                  <span className="hero-stat-label">Curriculums</span>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">1:1 & Group</span>
                  <span className="hero-stat-label">Flexible Formats</span>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">Year 1-12</span>
                  <span className="hero-stat-label">All Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM SECTION WITH BADGES */}
      <section className="section-block" id="curriculums">
        <div className="section-header">
          <div className="section-badge">{lang === 'km' ? 'កម្មវិធីសិក្សា' : 'Curriculums'}</div>
          <h2 className="section-title">{t.curriculumTitle}</h2>
          <p className="section-subtitle">{t.curriculumSubtitle}</p>
        </div>

        <div className="curriculum-grid">
          {t.curriculums.map((curr) => (
            <div key={curr.badge} className="curriculum-card">
              <div className="curriculum-badge-row">
                <span className={`curriculum-pill pill-${curr.badge.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                  {curr.badge}
                </span>
              </div>
              <h3 className="curriculum-name">{curr.name}</h3>
              <p className="curriculum-levels">{curr.levels}</p>
              <p className="curriculum-desc">{curr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SUBJECTS GRID */}
      <section className="section-block" id="subjects">
        <div className="section-header">
          <div className="section-badge">{lang === 'km' ? 'មុខវិជ្ជា' : 'Subjects'}</div>
          <h2 className="section-title">{t.subjectsTitle}</h2>
          <p className="section-subtitle">{t.subjectsSubtitle}</p>
        </div>

        <div className="subjects-grid">
          {t.subjects.map((subj) => (
            <div key={subj.id} className={`subject-card ${subj.hasPractice ? 'has-portal' : ''}`}>
              <div className="subject-top">
                <h3 className="subject-name">{subj.name}</h3>
                {subj.hasPractice && (
                  <span className="subject-portal-badge">
                    <SparklesIcon size={12} />
                    <span>{lang === 'km' ? 'មានវិបផតថលហាត់រៀន' : 'Online Practice Ready'}</span>
                  </span>
                )}
              </div>
              <p className="subject-desc">{subj.desc}</p>
              {subj.hasPractice ? (
                <button
                  type="button"
                  onClick={onLaunchMaths}
                  className="btn btn-sm btn-primary subject-action-btn"
                  id="btn-launch-maths-from-subject"
                >
                  <SparklesIcon size={14} />
                  <span>{lang === 'km' ? 'ចូលហាត់ Quiz Blitz' : 'Launch Quiz Blitz'}</span>
                  <ArrowRightIcon size={14} />
                </button>
              ) : (
                <a
                  href="https://t.me/BrillianceTutoringKH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subject-link"
                >
                  <span>{lang === 'km' ? 'សាកសួរព័ត៌មានលម្អិត' : 'Inquire for enrollment'}</span>
                  <ArrowRightIcon size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE MATHS TEASER CARD */}
      <section className="portal-teaser-section">
        <div className="portal-teaser-card">
          <div className="portal-teaser-left">
            <div className="portal-badge-row">
              <span className="portal-badge">
                <SparklesIcon size={14} />
                <span>{lang === 'km' ? 'វិបផតថលហាត់រៀនឥតគិតថ្លៃ' : 'Free Digital Practice'}</span>
              </span>
            </div>
            <h2 className="portal-title">{t.practiceTeaserTitle}</h2>
            <p className="portal-desc">{t.practiceTeaserSubtitle}</p>

            <div className="portal-year-tags">
              <div className="portal-year-pill">
                <strong>Year 6 (KS2):</strong> {t.year6PracticeDesc}
              </div>
              <div className="portal-year-pill">
                <strong>Year 9 (KS3/GCSE):</strong> {t.year9PracticeDesc}
              </div>
            </div>

            <div className="portal-actions">
              <button
                type="button"
                onClick={onLaunchMaths}
                className="btn btn-primary btn-portal-launch"
                id="btn-portal-banner-launch"
              >
                <SparklesIcon size={18} />
                <span>{t.btnLaunchPractice}</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURES SECTION */}
      <section className="section-block" id="features">
        <div className="section-header">
          <div className="section-badge">{lang === 'km' ? 'គុណសម្បត្តិ' : 'Why Choose Us'}</div>
          <h2 className="section-title">{t.featuresTitle}</h2>
          <p className="section-subtitle">{t.featuresSubtitle}</p>
        </div>

        <div className="features-grid">
          {t.features.map((feat, index) => (
            <div key={feat.title} className="feature-card">
              <div className="feature-icon-wrapper">
                {featureIcons[index % featureIcons.length]}
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT & SOCIAL FOOTER */}
      <footer className="landing-footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img src={logoImg} alt="Brilliance Tutoring" className="footer-logo-img" />
              <div>
                <h3 className="footer-brand-title">{t.schoolName}</h3>
                <p className="footer-motto-text">{t.motto}</p>
              </div>
            </div>
            <p className="footer-brand-desc">{t.tagline}</p>
            <div className="footer-location-tag">
              <span>{t.addressLabel}: {t.addressValue}</span>
            </div>
          </div>

          <div className="footer-contact-col">
            <h3 className="footer-col-title">{t.contactTitle}</h3>
            <p className="footer-col-subtitle">{t.contactSubtitle}</p>

            <div className="contact-links-list">
              <a
                href="https://t.me/BrillianceTutoringKH"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                id="footer-link-telegram-direct"
              >
                <div className="contact-icon-bubble telegram-bubble">
                  <TelegramIcon size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{t.phoneLabel}</span>
                  <span className="contact-value">077 678 968 (@BrillianceTutoringKH)</span>
                </div>
                <ExternalLinkIcon size={16} className="contact-arrow" />
              </a>

              <a
                href="https://t.me/BrillianceTutoringChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                id="footer-link-telegram-channel"
              >
                <div className="contact-icon-bubble channel-bubble">
                  <TelegramIcon size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{t.telegramChannelLabel}</span>
                  <span className="contact-value">t.me/BrillianceTutoringChannel</span>
                </div>
                <ExternalLinkIcon size={16} className="contact-arrow" />
              </a>

              <a
                href="https://www.facebook.com/share/1H1vTSo9xY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                id="footer-link-facebook"
              >
                <div className="contact-icon-bubble facebook-bubble">
                  <FacebookIcon size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{t.facebookLabel}</span>
                  <span className="contact-value">facebook.com/BrillianceTutoring</span>
                </div>
                <ExternalLinkIcon size={16} className="contact-arrow" />
              </a>

              <a
                href="tel:077678968"
                className="contact-card-link"
                id="footer-link-phone"
              >
                <div className="contact-icon-bubble phone-bubble">
                  <PhoneIcon size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Hotline</span>
                  <span className="contact-value">077 678 968</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footerCopyright}</p>
          <div className="footer-bottom-links">
            <button
              type="button"
              onClick={() => handleScrollTo('hero')}
              className="footer-link-btn"
            >
              {lang === 'km' ? 'ត្រឡប់ទៅលើ' : 'Back to Top ↑'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
