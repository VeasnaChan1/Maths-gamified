import { GAME_REGISTRY } from '../games/registry';
import { CURRICULUM } from '../questions';
import { ArrowRightIcon } from '../components/Icons';

export default function GamePickerScreen({ selectedYear, selectedTopicId, onSelectGame }) {
  const curriculumYear = CURRICULUM[selectedYear];
  const topic = curriculumYear?.topics.find((t) => t.id === selectedTopicId || t.idSlug === selectedTopicId);

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>
          Year {selectedYear} • {topic?.name}
        </div>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>
          Choose a Game
        </h1>
        <p className="text-secondary" style={{ fontSize: '1rem' }}>
          Select a practice mode to start answering questions.
        </p>
      </div>

      {/* Game List (Only implemented & registered games per Section 15.9) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {GAME_REGISTRY.map((game) => (
          <div
            key={game.id}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              border: '1.5px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)' }}>
                  {game.name}
                </h2>
                <p className="text-secondary" style={{ fontSize: '0.9375rem', lineHeight: '1.5' }}>
                  {game.description}
                </p>
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  backgroundColor: 'var(--primary-soft)',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  whiteSpace: 'nowrap',
                }}
              >
                {game.durationText}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border)',
                paddingTop: 'var(--space-3)',
                marginTop: 'var(--space-1)',
              }}
            >
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                10 questions · 3 lives · Streak bonuses
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onSelectGame(game.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Play {game.name}</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
