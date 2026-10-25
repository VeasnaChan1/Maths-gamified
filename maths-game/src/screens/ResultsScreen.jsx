import MathText from '../components/MathText';
import Diagram from '../components/Diagram';
import { getLevelInfo } from '../utils/gamification';
import { TrophyIcon, RefreshIcon, ArrowRightIcon } from '../components/Icons';

export default function ResultsScreen({
  resultData,
  progress,
  didLevelUp,
  onPlayAgain,
  onBackToTopics,
}) {
  const { correct = 0, total = 0, xpEarned = 0, wrongAnswers = [] } = resultData || {};
  const levelInfo = getLevelInfo(progress?.totalXp || 0);

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
      {/* Level-Up Banner if a real threshold was crossed */}
      {didLevelUp && (
        <div
          className="card"
          style={{
            backgroundColor: 'var(--success-soft)',
            border: '1.5px solid var(--success)',
            marginBottom: 'var(--space-4)',
            textAlign: 'center',
            padding: 'var(--space-4)',
          }}
          role="alert"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--success)',
              marginBottom: '4px',
            }}
          >
            <TrophyIcon size={22} />
            <span>Level Up!</span>
          </div>
          <p style={{ fontWeight: '500', color: 'var(--text)', fontSize: '1rem' }}>
            Well done! You reached <strong>Level {levelInfo.level}</strong>!
          </p>
        </div>
      )}

      {/* Main Results Summary Card */}
      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
          Round Complete
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--space-4)',
            padding: 'var(--space-4)',
            backgroundColor: 'var(--surface-muted)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Score</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text)' }}>
              {correct} / {total}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              questions answered correctly
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>XP Earned</div>
            <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--primary)' }}>
              +{xpEarned} XP
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              added to your total progress
            </div>
          </div>
        </div>

        {/* Updated Level Progress */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              Level {levelInfo.level} Progress
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              {levelInfo.xpInCurrentLevel} / {levelInfo.xpRequiredForNext} XP to Level {levelInfo.level + 1}
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '10px',
              backgroundColor: 'var(--surface-muted)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${levelInfo.progressPercent}%`,
                backgroundColor: 'var(--primary)',
                transition: 'width 300ms ease',
              }}
            />
          </div>
        </div>

        {/* Action Buttons with Icons */}
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={onPlayAgain}
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <RefreshIcon size={16} />
            <span>Play Again</span>
          </button>
          <button
            type="button"
            onClick={onBackToTopics}
            className="btn btn-secondary"
            style={{ flex: 1, minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <span>Choose Another Topic</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>

      {/* Review of Incorrect Answers */}
      {wrongAnswers && wrongAnswers.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>
            Review Mistakes ({wrongAnswers.length})
          </h2>
          <p className="text-secondary" style={{ marginBottom: 'var(--space-4)' }}>
            Reviewing where you got stuck is how you improve.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {wrongAnswers.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  borderLeft: '4px solid var(--border)',
                  padding: 'var(--space-4)',
                }}
              >
                <div style={{ fontSize: '1rem', fontWeight: '600', marginBottom: 'var(--space-2)' }}>
                  Question: <MathText text={item.question} />
                </div>

                {item.diagram && <Diagram data={item.diagram} />}

                <div style={{ fontSize: '0.875rem', marginBottom: '4px', color: 'var(--error)' }}>
                  <strong>Your answer:</strong> <MathText text={item.selectedAnswer} />
                </div>

                <div style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--success)' }}>
                  <strong>Correct answer:</strong> <MathText text={item.correctAnswer} />
                </div>

                {item.hint && (
                  <div style={{ fontSize: '0.8125rem', color: 'var(--warning)', marginBottom: '4px' }}>
                    <strong>Hint:</strong> {item.hint}
                  </div>
                )}

                {item.explanation && (
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--surface-muted)',
                      padding: 'var(--space-2) var(--space-3)',
                      borderRadius: 'var(--radius-sm)',
                      marginTop: 'var(--space-2)',
                    }}
                  >
                    <strong>Explanation:</strong> <MathText text={item.explanation} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
