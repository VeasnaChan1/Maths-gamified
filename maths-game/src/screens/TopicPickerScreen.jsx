import { CURRICULUM } from '../questions';
import { getTopicMastery } from '../utils/gamification';

export default function TopicPickerScreen({ selectedYear, progress, onSelectTopic }) {
  const curriculumYear = CURRICULUM[selectedYear];

  if (!curriculumYear) {
    return <div>Invalid curriculum year selected.</div>;
  }

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', width: '100%' }}>
      {/* Title & Description */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-1)' }}>
          Year {selectedYear} Topics
        </h1>
        <p className="text-secondary" style={{ fontSize: '1rem' }}>
          Select a topic to start practising and earning XP.
        </p>
      </div>

      {/* Topics Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-4)',
        }}
      >
        {curriculumYear.topics.map((topic) => {
          const topicKey = `y${selectedYear}-${topic.id}`;
          const topicXp = progress?.topicXp?.[topicKey] || 0;
          const stats = progress?.topicStats?.[topicKey] || { correct: 0, total: 0 };
          const mastery = getTopicMastery(stats);

          return (
            <div
              key={topic.id}
              className="card topic-card"
              tabIndex={0}
              role="button"
              onClick={() => onSelectTopic(topic.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectTopic(topic.id);
              }}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'var(--space-4) var(--space-5)',
                border: '1px solid var(--border)',
                transition: 'border-color 150ms ease, background-color 150ms ease',
              }}
            >
              <div>
                {/* Header row: Symbol + Mastery Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-soft)',
                      color: 'var(--primary)',
                      fontWeight: '700',
                      fontSize: '1rem',
                    }}
                  >
                    {topic.symbol}
                  </span>

                  {/* Mastery Badge (Not started / Practising / Mastered) */}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor:
                        mastery.label === 'Mastered'
                          ? 'var(--success-soft)'
                          : mastery.label === 'Practising'
                          ? 'var(--primary-soft)'
                          : 'var(--surface-muted)',
                      color:
                        mastery.label === 'Mastered'
                          ? 'var(--success)'
                          : mastery.label === 'Practising'
                          ? 'var(--primary)'
                          : 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {mastery.label}
                  </span>
                </div>

                {/* Topic Name */}
                <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--space-1)', color: 'var(--text)' }}>
                  {topic.name}
                </h3>
                <p className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: 'var(--space-3)' }}>
                  {topic.shortDesc}
                </p>
              </div>

              {/* Footer info: XP and question count */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border)',
                  paddingTop: 'var(--space-3)',
                  marginTop: 'var(--space-2)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <span>{topic.questions.length} questions</span>
                <span style={{ fontWeight: '600', color: topicXp > 0 ? 'var(--primary)' : 'var(--text-secondary)' }}>
                  {topicXp > 0 ? `${topicXp} XP earned` : '0 XP'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
