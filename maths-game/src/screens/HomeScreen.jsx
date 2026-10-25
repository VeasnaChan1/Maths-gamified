import { getLevelInfo } from '../utils/gamification';
import { ArrowRightIcon } from '../components/Icons';

export default function HomeScreen({ progress, onSelectYear }) {
  const levelInfo = getLevelInfo(progress?.totalXp || 0);
  const hasHistory = progress?.totalXp > 0;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {/* Title & Prompt */}
      <div style={{ marginBottom: 'var(--space-6)', textAlign: 'left' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>
          Which year do you want to practise?
        </h1>
        <p className="text-secondary" style={{ fontSize: '1rem' }}>
          Choose your curriculum level to explore topics and play short quiz games.
        </p>
      </div>

      {/* Year Selection Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)',
        }}
      >
        {/* Year 6 Card */}
        <div
          className="card year-card"
          tabIndex={0}
          role="button"
          onClick={() => onSelectYear(6)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelectYear(6);
          }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1.5px solid var(--border)',
            transition: 'border-color 150ms ease, background-color 150ms ease',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px',
                backgroundColor: 'var(--primary-soft)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary)',
                fontWeight: '700',
                fontSize: '0.875rem',
                marginBottom: 'var(--space-3)',
              }}
            >
              <span>Year 6</span>
              <span style={{ color: 'var(--text-secondary)' }}>•</span>
              <span>Key Stage 2</span>
            </div>

            <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
              Primary Maths Practice
            </h2>
            <p className="text-secondary" style={{ marginBottom: 'var(--space-4)', lineHeight: '1.5' }}>
              Fractions, decimals, percentages, ratio, area and perimeter, and order of operations.
            </p>

            {/* Purposeful SVG mini illustration */}
            <div
              style={{
                padding: 'var(--space-3)',
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <svg width="60" height="24" viewBox="0 0 60 24" role="img" aria-hidden="true">
                <rect x="0" y="2" width="20" height="20" fill="var(--primary)" rx="2" />
                <rect x="20" y="2" width="20" height="20" fill="var(--primary)" rx="2" />
                <rect x="40" y="2" width="20" height="20" fill="#FFFFFF" stroke="var(--border)" rx="2" />
              </svg>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Fraction bar model (⅔ shaded)
              </span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', pointerEvents: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <span>Practise Year 6</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>

        {/* Year 9 Card */}
        <div
          className="card year-card"
          tabIndex={0}
          role="button"
          onClick={() => onSelectYear(9)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelectYear(9);
          }}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1.5px solid var(--border)',
            transition: 'border-color 150ms ease, background-color 150ms ease',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px',
                backgroundColor: 'var(--primary-soft)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary)',
                fontWeight: '700',
                fontSize: '0.875rem',
                marginBottom: 'var(--space-3)',
              }}
            >
              <span>Year 9</span>
              <span style={{ color: 'var(--text-secondary)' }}>•</span>
              <span>Key Stage 3 / GCSE Prep</span>
            </div>

            <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
              Secondary &amp; GCSE Prep
            </h2>
            <p className="text-secondary" style={{ marginBottom: 'var(--space-4)', lineHeight: '1.5' }}>
              Algebra, linear graphs, Pythagoras' theorem, standard form, angles, and transformations.
            </p>

            {/* Purposeful SVG mini illustration */}
            <div
              style={{
                padding: 'var(--space-3)',
                backgroundColor: 'var(--surface-muted)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <svg width="60" height="24" viewBox="0 0 60 24" role="img" aria-hidden="true">
                <polygon points="4,20 40,20 4,4" fill="var(--primary-soft)" stroke="var(--primary)" strokeWidth="1.5" />
                <rect x="4" y="16" width="4" height="4" fill="none" stroke="var(--primary)" strokeWidth="1" />
              </svg>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Right-angled triangle (Pythagoras)
              </span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', pointerEvents: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <span>Practise Year 9</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>

      {/* Progress Summary (real data only) */}
      {hasHistory && (
        <div className="card" style={{ backgroundColor: 'var(--surface)' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-3)', color: 'var(--text)' }}>
            Your Practice Summary
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-4)',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Current Level
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>
                Level {levelInfo.level}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Total XP Earned
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text)' }}>
                {levelInfo.totalXp} XP
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Level Progress
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'var(--surface-muted)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginTop: '4px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${levelInfo.progressPercent}%`,
                    backgroundColor: 'var(--primary)',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {levelInfo.xpInCurrentLevel} / {levelInfo.xpRequiredForNext} XP to Level {levelInfo.level + 1}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
