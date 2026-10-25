import { getLevelInfo } from '../utils/gamification';
import { VolumeUpIcon, VolumeMuteIcon, ArrowLeftIcon } from './Icons';

export default function Header({
  screen,
  selectedYear,
  progress,
  soundEnabled,
  onToggleSound,
  onNavigateHome,
  onNavigateBack,
}) {
  const levelInfo = getLevelInfo(progress?.totalXp || 0);

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="brand-section">
          {screen !== 'home' && (
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

          <div
            className="brand-title"
            onClick={onNavigateHome}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onNavigateHome();
            }}
          >
            <span>Maths Practice</span>
            {selectedYear && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  backgroundColor: 'var(--primary-soft)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Year {selectedYear}
              </span>
            )}
          </div>
        </div>

        <div className="header-actions">
          {/* Level & XP Chip */}
          <div
            className="stats-pill"
            title={`Level ${levelInfo.level} · ${levelInfo.totalXp} Total XP (${levelInfo.xpInCurrentLevel}/${levelInfo.xpRequiredForNext} XP to next level)`}
          >
            <span>Lvl {levelInfo.level}</span>
            <span style={{ color: 'var(--text-secondary)' }}>•</span>
            <span>{levelInfo.totalXp} XP</span>
          </div>

          {/* Sound Toggle with Clean SVG Icons */}
          <button
            type="button"
            className="sound-toggle"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
            title={soundEnabled ? 'Sound ON (click to mute)' : 'Sound OFF (click to unmute)'}
          >
            {soundEnabled ? <VolumeUpIcon size={18} /> : <VolumeMuteIcon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
