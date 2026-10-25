import { CURRICULUM } from '../questions';
import { getTopicMastery } from '../utils/gamification';

export default function TopicPickerScreen({ selectedYear, progress, onSelectTopic }) {
  const curriculumYear = CURRICULUM[selectedYear];

  if (!curriculumYear) {
    return <div>Invalid curriculum year selected.</div>;
  }

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', width: '100%' }}>
      {/* Title & Description Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '3px 10px',
            backgroundColor: 'var(--primary-soft)',
            border: '1px solid var(--primary-border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--primary)',
            fontWeight: '600',
            fontSize: '0.8125rem',
            marginBottom: 'var(--space-2)',
          }}
        >
          <span>Year {selectedYear}</span>
          <span style={{ color: 'var(--text-secondary)' }}>•</span>
          <span>{selectedYear === 6 ? 'Key Stage 2' : 'Key Stage 3 & GCSE Prep'}</span>
        </div>

        <h1 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-1)', color: 'var(--text)' }}>
          Year {selectedYear} Topics
        </h1>
        <p className="text-secondary" style={{ fontSize: '0.9375rem' }}>
          Select a topic to start practising and earning XP.
        </p>
      </div>

      {/* Topics Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-6)',
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
              className="topic-card"
              tabIndex={0}
              role="button"
              onClick={() => onSelectTopic(topic.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectTopic(topic.id);
              }}
            >
              <div>
                {/* Header row: Mathematical Symbol + Mastery Badge */}
                <div className="topic-card-top">
                  <span className="topic-symbol-box">
                    {topic.symbol}
                  </span>

                  {/* Mastery Badge (Not started / Practising / Mastered) */}
                  <span
                    className="topic-mastery-badge"
                    style={{
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
                      borderColor:
                        mastery.label === 'Mastered'
                          ? '#BBF7D0'
                          : mastery.label === 'Practising'
                          ? 'var(--primary-border)'
                          : 'var(--border)',
                    }}
                  >
                    {mastery.label}
                  </span>
                </div>

                {/* Topic Name & Short Description */}
                <div className="topic-card-body">
                  <h3 className="topic-title">
                    {topic.name}
                  </h3>
                  <p className="topic-desc">
                    {topic.shortDesc}
                  </p>
                </div>
              </div>

              {/* Footer info: XP and question count */}
              <div className="topic-card-footer">
                <span>{topic.questions.length} questions</span>
                <span
                  style={{
                    fontWeight: '600',
                    color: topicXp > 0 ? 'var(--primary)' : 'var(--text-secondary)',
                  }}
                >
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
