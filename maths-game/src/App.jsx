import { useState, useCallback } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import TopicPickerScreen from './screens/TopicPickerScreen';
import GamePickerScreen from './screens/GamePickerScreen';
import ResultsScreen from './screens/ResultsScreen';
import { getGameById } from './games/registry';
import { getQuestions } from './questions';
import {
  loadProgress,
  saveProgress,
  loadSoundPreference,
  saveSoundPreference,
} from './utils/storage';
import { getLevelInfo } from './utils/gamification';
import { playSound } from './utils/sound';

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [soundEnabled, setSoundEnabled] = useState(loadSoundPreference);

  // Navigation State
  const [screen, setScreen] = useState('home'); // 'home' | 'topics' | 'games' | 'play' | 'results'
  const [selectedYear, setSelectedYear] = useState(null); // 6 | 9
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState('quiz-blitz');
  const [resultData, setResultData] = useState(null);
  const [didLevelUp, setDidLevelUp] = useState(false);

  // Toggle sound
  const handleToggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      saveSoundPreference(next);
      return next;
    });
  }, []);

  // Year Selection
  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setScreen('topics');
  };

  // Topic Selection
  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setScreen('games');
  };

  // Game Selection
  const handleSelectGame = (gameId) => {
    setSelectedGameId(gameId);
    setDidLevelUp(false);
    setScreen('play');
  };

  // Shared Shell: Game finished callback
  const handleGameFinish = useCallback((results) => {
    setResultData(results);

    // Update Student Progress
    const oldLevel = getLevelInfo(progress.totalXp).level;
    const newTotalXp = progress.totalXp + (results.xpEarned || 0);
    const newLevelInfo = getLevelInfo(newTotalXp);
    const leveledUp = newLevelInfo.level > oldLevel;

    const topicKey = `y${selectedYear}-${selectedTopicId}`;
    const prevStats = progress.topicStats?.[topicKey] || { correct: 0, total: 0, rounds: 0 };

    const updatedProgress = {
      ...progress,
      totalXp: newTotalXp,
      level: newLevelInfo.level,
      topicXp: {
        ...progress.topicXp,
        [topicKey]: (progress.topicXp?.[topicKey] || 0) + (results.xpEarned || 0),
      },
      topicStats: {
        ...progress.topicStats,
        [topicKey]: {
          correct: prevStats.correct + results.correct,
          total: prevStats.total + results.total,
          rounds: prevStats.rounds + 1,
        },
      },
    };

    saveProgress(updatedProgress);
    setProgress(updatedProgress);
    setDidLevelUp(leveledUp);

    if (leveledUp) {
      playSound('levelUp', soundEnabled);
    }

    setScreen('results');
  }, [progress, selectedYear, selectedTopicId, soundEnabled]);

  // Back Navigation
  const handleNavigateBack = () => {
    if (screen === 'topics') {
      setSelectedYear(null);
      setScreen('home');
    } else if (screen === 'games') {
      setSelectedTopicId(null);
      setScreen('topics');
    } else if (screen === 'play') {
      setScreen('games');
    } else if (screen === 'results') {
      setScreen('topics');
    }
  };

  // Home Navigation
  const handleNavigateHome = () => {
    setSelectedYear(null);
    setSelectedTopicId(null);
    setResultData(null);
    setDidLevelUp(false);
    setScreen('home');
  };

  // Replay Game
  const handlePlayAgain = () => {
    setDidLevelUp(false);
    setScreen('play');
  };

  // Prepare questions for selected topic
  const currentQuestions = selectedYear && selectedTopicId
    ? getQuestions(selectedYear, selectedTopicId)
    : [];

  const activeGame = getGameById(selectedGameId);
  const ActiveGameComponent = activeGame?.component;

  return (
    <div className="app-shell">
      <Header
        screen={screen}
        selectedYear={selectedYear}
        progress={progress}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onNavigateHome={handleNavigateHome}
        onNavigateBack={handleNavigateBack}
      />

      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {screen === 'home' && (
          <HomeScreen
            progress={progress}
            onSelectYear={handleSelectYear}
          />
        )}

        {screen === 'topics' && (
          <TopicPickerScreen
            selectedYear={selectedYear}
            progress={progress}
            onSelectTopic={handleSelectTopic}
          />
        )}

        {screen === 'games' && (
          <GamePickerScreen
            selectedYear={selectedYear}
            selectedTopicId={selectedTopicId}
            onSelectGame={handleSelectGame}
          />
        )}

        {screen === 'play' && ActiveGameComponent && (
          <ActiveGameComponent
            questions={currentQuestions}
            soundEnabled={soundEnabled}
            onFinish={handleGameFinish}
            onExit={() => setScreen('games')}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            resultData={resultData}
            progress={progress}
            didLevelUp={didLevelUp}
            onPlayAgain={handlePlayAgain}
            onBackToTopics={() => setScreen('topics')}
          />
        )}
      </main>
    </div>
  );
}
