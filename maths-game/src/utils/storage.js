const STORAGE_KEY_PROGRESS = 'maths_student_progress_v1';
const STORAGE_KEY_SOUND = 'maths_sound_pref_v1';

const DEFAULT_PROGRESS = {
  totalXp: 0,
  level: 1,
  topicXp: {},
  topicStats: {}, // { [topicKey]: { correct: 0, total: 0, rounds: 0 } }
};

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw);
    return {
      totalXp: Number(parsed.totalXp) || 0,
      level: Number(parsed.level) || 1,
      topicXp: parsed.topicXp || {},
      topicStats: parsed.topicStats || {},
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage', err);
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to localStorage', err);
  }
}

export function loadSoundPreference() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SOUND);
    if (raw === null) return true;
    return raw === 'true';
  } catch {
    return true;
  }
}

export function saveSoundPreference(enabled) {
  try {
    localStorage.setItem(STORAGE_KEY_SOUND, String(enabled));
  } catch (err) {
    console.error('Failed to save sound preference', err);
  }
}
