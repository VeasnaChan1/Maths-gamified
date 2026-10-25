import { useState } from 'react';
import { getLevelInfo } from '../utils/gamification';
import {
  VolumeUpIcon,
  VolumeMuteIcon,
  ArrowLeftIcon,
  GlobeIcon,
  TelegramIcon,
} from './Icons';
import logoImg from '../assets/logo.jpg';
import { TRANSLATIONS } from '../utils/translations';

export default function Header({
  screen,
  selectedYear,
  progress,
  soundEnabled,
  lang,
  onToggleSound,
  onToggleLang,
  onNavigateHome,
  onNavigateBack,
  onNavigateToLanding,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const levelInfo = getLevelInfo(progress?.totalXp || 0);

  const isLanding = screen === 'landing';
  const isMathsMode = !isLanding;

  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="brand-section">
          {/* Back button in maths mode */}
          {isMathsMode && screen !== 'home' && (
            <button
              type="button"
              onClick={onNavigateBack}
              className="back-btn"
              aria-label="Go back"
            >
              <ArrowLeftIcon size={14} />
              <span>Back</span>
            </button>
          )}

          {/* Brand title */}
          <div
            className="brand-title"
            onClick={isLanding ? () => handleScrollTo('hero') : onNavigateHome}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                isLanding ? handleScrollTo('hero') : onNavigateHome();
              }
            }}
          >
            <img
              src={logoImg}
              alt="Brilliance Tutoring Logo"
              className="brand-logo-img"
            />
            <div className="brand-text-col">
              <span className="brand-name">
                {lang === 'km' ? 'សាលាបំប៉ន ប្រ៊ីលាន' : 'Brilliance Tutoring'}
              </span>
              <span className="brand-subtitle">
                {isMathsMode
                  ? selectedYear
                    ? `Year ${selectedYear} Maths`
                    : 'Maths Practice'
                  : t.motto}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav for landing page */}
        {isLanding && (
          <nav className="header-nav" aria-label="Main navigation">
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleScrollTo('curriculums')}
            >
              {t.navCurriculum}
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleScrollTo('subjects')}
            >
              {t.navSubjects}
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleScrollTo('features')}
            >
              {t.navFeatures}
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleScrollTo('contact')}
            >
              {t.navContact}
            </button>
          </nav>
        )}

        <div className="header-actions">
          {/* Back to website button (in maths mode) */}
          {isMathsMode && (
            <button
              type="button"
              className="back-btn"
              onClick={onNavigateToLanding}
              aria-label="Back to website"
            >
              <ArrowLeftIcon size={14} />
              <span>{lang === 'km' ? 'ត្រឡប់ទៅគេហទំព័រ' : 'Website'}</span>
            </button>
          )}

          {/* Maths mode: Level + XP + Sound */}
          {isMathsMode && (
            <>
              <div
                className="stats-pill"
                title={`Level ${levelInfo.level} · ${levelInfo.totalXp} Total XP`}
              >
                <span>Lvl {levelInfo.level}</span>
                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                <span>{levelInfo.totalXp} XP</span>
              </div>

              <button
                type="button"
                className="sound-toggle"
                onClick={onToggleSound}
                aria-label={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
                title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
              >
                {soundEnabled ? <VolumeUpIcon size={18} /> : <VolumeMuteIcon size={18} />}
              </button>
            </>
          )}

          {/* Language toggle */}
          <button
            type="button"
            className="lang-toggle-btn"
            onClick={onToggleLang}
            aria-label="Switch language"
          >
            <GlobeIcon size={16} />
            <span>{t.langToggle}</span>
          </button>

          {/* Enroll CTA on landing page */}
          {isLanding && (
            <a
              href="https://t.me/BrillianceTutoringKH"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary header-enroll-btn"
            >
              <TelegramIcon size={14} />
              <span>{t.btnEnroll}</span>
            </a>
          )}

          {/* Mobile hamburger on landing page */}
          {isLanding && (
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isLanding && (
        <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => handleScrollTo('curriculums')}
          >
            {t.navCurriculum}
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => handleScrollTo('subjects')}
          >
            {t.navSubjects}
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => handleScrollTo('features')}
          >
            {t.navFeatures}
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => handleScrollTo('contact')}
          >
            {t.navContact}
          </button>
        </div>
      )}
    </header>
  );
}
