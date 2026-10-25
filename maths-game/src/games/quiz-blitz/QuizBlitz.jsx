import { useState, useEffect, useRef, useCallback } from 'react';
import MathText from '../../components/MathText';
import Diagram from '../../components/Diagram';
import { calculateAnswerXp } from '../../utils/gamification';
import { playSound } from '../../utils/sound';
import {
  StreakIcon,
  CheckIcon,
  CloseIcon,
  ClockIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '../../components/Icons';

const QUESTION_TIME_LIMIT = 20; // 20 seconds per question
const MAX_QUESTIONS = 10;
const INITIAL_LIVES = 3;

/**
 * QuizQuestionView manages the active question's timer and option selection.
 * By keying on `question.id`, its state resets naturally without setState-in-effect.
 */
function QuizQuestionView({
  question,
  streak,
  onAnswer,
  onNext,
  isLast,
}) {
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  const answeredRef = useRef(false);
  const timerRef = useRef(null);
  const timeLeftRef = useRef(QUESTION_TIME_LIMIT);

  const handleSelect = useCallback((option, isTimeout = false) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);

    setIsAnswered(true);
    setSelectedOption(option);

    const result = onAnswer(option, isTimeout, timeLeftRef.current);
    setLastResult(result);
  }, [onAnswer]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        timeLeftRef.current = next;
        if (next <= 0) {
          clearInterval(timerRef.current);
          handleSelect(null, true);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleSelect]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (isAnswered) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNext();
        }
        return;
      }

      if (!question?.options) return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= question.options.length) {
        e.preventDefault();
        handleSelect(question.options[num - 1]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, question, handleSelect, onNext]);

  const timerPercent = (timeLeft / QUESTION_TIME_LIMIT) * 100;

  return (
    <>
      {/* Timer Bar */}
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'var(--surface-muted)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: 'var(--space-4)',
        }}
        role="progressbar"
        aria-valuenow={timeLeft}
        aria-valuemin="0"
        aria-valuemax={QUESTION_TIME_LIMIT}
        aria-label="Question timer"
      >
        <div
          style={{
            height: '100%',
            width: `${timerPercent}%`,
            backgroundColor: timeLeft <= 5 ? 'var(--error)' : 'var(--primary)',
            transition: 'width 1s linear, background-color 200ms ease',
          }}
        />
      </div>

      {/* Main Question Card */}
      <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
        {streak > 1 && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'var(--warning)',
              backgroundColor: 'var(--warning-soft)',
              padding: '3px 8px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-2)',
            }}
          >
            <StreakIcon size={14} />
            <span>{streak} in a row streak</span>
          </div>
        )}

        <div
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            lineHeight: '1.4',
            color: 'var(--text)',
            marginBottom: question.diagram ? 'var(--space-3)' : 'var(--space-4)',
          }}
        >
          <MathText text={question.question} />
        </div>

        {question.diagram && <Diagram data={question.diagram} />}

        {/* 4 Option Buttons (Large, Touch-friendly 56px min height) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-3)',
          }}
          role="radiogroup"
          aria-label="Answer options"
        >
          {question.options.map((opt, idx) => {
            let btnBg = 'var(--surface)';
            let btnBorder = 'var(--border)';
            let btnColor = 'var(--text)';
            let badgeBg = 'var(--surface-muted)';
            let badgeColor = 'var(--text-secondary)';

            const isThisOption = selectedOption === opt;
            const isCorrectOption =
              opt === question.answer ||
              (question.acceptedAnswers && question.acceptedAnswers.includes(opt));

            if (isAnswered) {
              if (isCorrectOption) {
                btnBg = 'var(--success-soft)';
                btnBorder = 'var(--success)';
                btnColor = 'var(--success)';
                badgeBg = 'var(--success)';
                badgeColor = '#FFFFFF';
              } else if (isThisOption && !isCorrectOption) {
                btnBg = 'var(--error-soft)';
                btnBorder = 'var(--error)';
                btnColor = 'var(--error)';
                badgeBg = 'var(--error)';
                badgeColor = '#FFFFFF';
              } else {
                btnBg = 'var(--surface-muted)';
                btnColor = 'var(--text-secondary)';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelect(opt)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-3) var(--space-4)',
                  minHeight: '56px',
                  backgroundColor: btnBg,
                  border: `1.5px solid ${btnBorder}`,
                  borderRadius: 'var(--radius-sm)',
                  color: btnColor,
                  fontSize: '1rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  cursor: isAnswered ? 'default' : 'pointer',
                  transition: 'background-color 150ms ease, border-color 150ms ease',
                  outline: 'none',
                }}
                className="quiz-option-btn"
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '4px',
                    backgroundColor: badgeBg,
                    color: badgeColor,
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>
                <span style={{ flex: 1 }}>
                  <MathText text={opt} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer Feedback & Explanation Panel */}
      {isAnswered && lastResult && (
        <div
          className="card"
          style={{
            borderLeft: `4px solid ${lastResult.isCorrect ? 'var(--success)' : 'var(--error)'}`,
            backgroundColor: lastResult.isCorrect ? 'var(--success-soft)' : 'var(--surface)',
            padding: 'var(--space-4)',
            marginBottom: 'var(--space-4)',
          }}
          role="status"
          aria-live="polite"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-2)',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '700',
                color: lastResult.isCorrect ? 'var(--success)' : 'var(--error)',
                fontSize: '1rem',
              }}
            >
              {lastResult.isCorrect ? (
                <>
                  <CheckIcon size={16} /> Correct!
                </>
              ) : lastResult.isTimeout ? (
                <>
                  <ClockIcon size={16} /> Time ran out
                </>
              ) : (
                <>
                  <CloseIcon size={16} /> Not quite right
                </>
              )}
            </span>

            {lastResult.isCorrect && (
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary)' }}>
                +{lastResult.xpEarned} XP
                {lastResult.streakBonus > 0 && ` (+${lastResult.streakBonus} streak bonus)`}
              </span>
            )}
          </div>

          {!lastResult.isCorrect && (
            <div style={{ marginBottom: 'var(--space-2)' }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text)' }}>
                <strong>Correct answer:</strong> <MathText text={lastResult.correctAnswer} />
              </p>
              {lastResult.hint && (
                <p style={{ fontSize: '0.875rem', color: 'var(--warning)', marginTop: '4px' }}>
                  <strong>Hint:</strong> {lastResult.hint}
                </p>
              )}
            </div>
          )}

          {lastResult.explanation && (
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border)',
                paddingTop: 'var(--space-2)',
                marginTop: 'var(--space-2)',
              }}
            >
              <strong>Explanation:</strong> <MathText text={lastResult.explanation} />
            </div>
          )}

          <button
            type="button"
            onClick={onNext}
            className="btn btn-primary"
            style={{
              width: '100%',
              marginTop: 'var(--space-3)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>{isLast ? 'See Results' : 'Next Question'}</span>
            <ArrowRightIcon size={16} />
          </button>
        </div>
      )}
    </>
  );
}

export default function QuizBlitz({ questions, onFinish, onExit, soundEnabled = true }) {
  const [roundQuestions] = useState(() => {
    const list = [...questions];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list.slice(0, MAX_QUESTIONS);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [accumulatedXp, setAccumulatedXp] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const startTimeRef = useRef(null);
  const livesRef = useRef(INITIAL_LIVES);

  useEffect(() => {
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }
  }, []);

  const currentQ = roundQuestions[currentIndex];

  const finishGame = useCallback(() => {
    const start = startTimeRef.current || Date.now();
    const totalElapsedSeconds = Math.round((Date.now() - start) / 1000);

    onFinish({
      score: correctCount,
      correct: correctCount,
      total: Math.min(currentIndex + 1, roundQuestions.length),
      timeSeconds: totalElapsedSeconds,
      roundQuestions,
      wrongAnswers,
      maxStreak,
      xpEarned: accumulatedXp,
    });
  }, [correctCount, currentIndex, roundQuestions, wrongAnswers, maxStreak, accumulatedXp, onFinish]);

  const handleAnswer = useCallback((option, isTimeout, secondsRemaining) => {
    if (!currentQ) return null;

    const isCorrect =
      !isTimeout &&
      (option === currentQ.answer ||
        (currentQ.acceptedAnswers && currentQ.acceptedAnswers.includes(option)));

    if (isCorrect) {
      playSound('correct', soundEnabled);
      let xpEarned = 0;
      let streakBonus = 0;
      let speedBonus = 0;

      setStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        setMaxStreak((prevMax) => Math.max(prevMax, newStreak));

        const xpResult = calculateAnswerXp({
          isCorrect: true,
          timeLeftSeconds: secondsRemaining,
          currentStreak: newStreak,
        });

        xpEarned = xpResult.xp;
        streakBonus = xpResult.streakBonus;
        speedBonus = xpResult.speedBonus;

        setAccumulatedXp((prevXp) => prevXp + xpResult.xp);
        return newStreak;
      });

      setCorrectCount((prev) => prev + 1);

      return {
        isCorrect: true,
        isTimeout: false,
        xpEarned,
        streakBonus,
        speedBonus,
        explanation: currentQ.explanation,
      };
    } else {
      playSound('wrong', soundEnabled);
      setStreak(0);
      setLives((prevLives) => {
        const updated = Math.max(0, prevLives - 1);
        livesRef.current = updated;
        return updated;
      });

      const wrongRecord = {
        questionId: currentQ.id,
        question: currentQ.question,
        selectedAnswer: isTimeout ? 'Timed out (No answer)' : option,
        correctAnswer: currentQ.answer,
        explanation: currentQ.explanation,
        hint: currentQ.hint,
        diagram: currentQ.diagram,
      };

      setWrongAnswers((prev) => [...prev, wrongRecord]);

      return {
        isCorrect: false,
        isTimeout,
        xpEarned: 0,
        hint: currentQ.hint,
        explanation: currentQ.explanation,
        correctAnswer: currentQ.answer,
      };
    }
  }, [currentQ, soundEnabled]);

  const handleNext = useCallback(() => {
    if (livesRef.current <= 0 || currentIndex + 1 >= roundQuestions.length) {
      finishGame();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, roundQuestions.length, finishGame]);

  if (!currentQ) {
    return (
      <div className="card" style={{ textAlign: 'center', margin: '40px auto', maxWidth: '500px' }}>
        <p>No questions found for this topic.</p>
        <button className="btn btn-secondary" onClick={onExit} style={{ marginTop: '16px' }}>
          Back to Topics
        </button>
      </div>
    );
  }

  const isLast = lives <= 1 || currentIndex + 1 >= roundQuestions.length;

  return (
    <div className="game-blitz-container" style={{ maxWidth: '640px', margin: '0 auto', width: '100%' }}>
      {/* Top Status Bar: Exit, Question count, Lives */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-3)',
          gap: 'var(--space-2)',
        }}
      >
        <button
          type="button"
          onClick={onExit}
          className="back-btn"
          aria-label="Exit Game"
          style={{
            padding: '6px 12px',
            fontSize: '0.8125rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <ArrowLeftIcon size={14} />
          <span>Exit</span>
        </button>

        <div style={{ fontWeight: '600', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
          Question {currentIndex + 1} of {roundQuestions.length}
        </div>

        {/* Lives Display */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          aria-label={`${lives} lives remaining`}
        >
          {Array.from({ length: INITIAL_LIVES }).map((_, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: i < lives ? 'var(--error)' : 'var(--border)',
                transition: 'background-color 200ms ease',
              }}
              title={i < lives ? 'Active Life' : 'Lost Life'}
            />
          ))}
        </div>
      </div>

      {/* Render active question with clean keying */}
      <QuizQuestionView
        key={currentQ.id}
        question={currentQ}
        streak={streak}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isLast={isLast}
      />
    </div>
  );
}
