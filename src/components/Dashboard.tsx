import React, { useState } from 'react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

interface UserProgress {
  completedPhases: number[];
  favoritedExercises: string[];
  bookmarks: string[];
  notes: string;
  streak: number;
  lastLogin: string;
}

const getProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem('calix-progress');
    if (stored) return JSON.parse(stored);
  } catch {}
  return {
    completedPhases: [],
    favoritedExercises: [],
    bookmarks: [],
    notes: '',
    streak: 0,
    lastLogin: new Date().toISOString()
  };
};

const saveProgress = (p: UserProgress) => {
  try {
    localStorage.setItem('calix-progress', JSON.stringify(p));
  } catch {}
};

const stats = [
  { label: 'Total Exercises', value: '60+', icon: '💪', color: 'from-blue-500 to-blue-700' },
  { label: 'Complete Programs', value: '4', icon: '📋', color: 'from-green-500 to-green-700' },
  { label: 'Roadmap Phases', value: '5', icon: '🗺️', color: 'from-orange-500 to-orange-700' },
  { label: 'Injury Protocols', value: '5+', icon: '🛡️', color: 'from-red-500 to-red-700' },
];

const quickLinks = [
  { label: 'Beginner Roadmap', tab: 'roadmap', icon: '🗺️', desc: 'Start your calisthenics journey', color: 'from-green-500 to-emerald-700' },
  { label: 'Exercise Database', tab: 'exercises', icon: '💪', desc: '50+ detailed exercises', color: 'from-blue-500 to-blue-700' },
  { label: 'Skill Trees', tab: 'skills', icon: '🌳', desc: 'Prerequisite maps & progression paths', color: 'from-purple-500 to-purple-700' },
  { label: '3-Day Program', tab: 'programs', icon: '📋', desc: 'Complete beginner program', color: 'from-orange-500 to-orange-700' },
  { label: 'Mobility System', tab: 'mobility', icon: '🧘', desc: 'Joint prep & flexibility', color: 'from-teal-500 to-teal-700' },
  { label: 'Injury Prevention', tab: 'prehab', icon: '🛡️', desc: 'Stay pain-free & healthy', color: 'from-red-500 to-red-700' },
];

const eliteGoals = [
  { skill: 'Planche', emoji: '🏋️', time: '1-3 years', level: 'Elite' },
  { skill: 'Front Lever', emoji: '🔥', time: '6-18 months', level: 'Advanced' },
  { skill: 'Muscle-Up', emoji: '⚡', time: '2-6 months', level: 'Intermediate' },
  { skill: 'Handstand', emoji: '🤸', time: '3-12 months', level: 'Advanced' },
  { skill: 'Iron Cross', emoji: '✝️', time: '2-5 years', level: 'Elite' },
  { skill: 'Human Flag', emoji: '🚩', time: '1-3 years', level: 'Advanced' },
];

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const [progress, setProgress] = useState<UserProgress>(getProgress());
  const [notes, setNotes] = useState(progress.notes);
  const [noteSaved, setNoteSaved] = useState(false);

  const saveNotes = () => {
    const updated = { ...progress, notes };
    setProgress(updated);
    saveProgress(updated);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const motivationalQuotes = [
    'Mastery is not a destination — it is a daily commitment to deliberate practice.',
    'The body achieves what the mind believes. Program the mind first.',
    'Controlled imperfect movement is superior to no movement at all.',
    'A perfect push-up is more valuable than a sloppy planche.',
    'Build tendons like you build skills — slowly, with patience, and never rushing.',
    'The elite calisthenics athlete is not the one who trains hardest, but the one who trains smartest.',
  ];

  const quote = motivationalQuotes[Math.floor(Date.now() / 86400000) % motivationalQuotes.length];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-12"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #0a1628 40%, #0a2a1a 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #6c63ff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 60% 80%, #00ff88 0%, transparent 40%)' }} />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#6c63ff' }}>
                THE COMPLETE CALISTHENICS MASTER SYSTEM
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight">
                CALIX
              </h1>
              <p className="text-lg md:text-xl text-white opacity-80 max-w-2xl leading-relaxed">
                Your complete offline calisthenics encyclopedia, training academy, and skill progression system.
                Everything from absolute beginner to elite mastery — all in one system.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="px-6 py-3 rounded-xl font-bold text-white gradient-accent transition-all hover:opacity-90 shadow-lg"
                >
                  🗺️ Start the Roadmap
                </button>
                <button
                  onClick={() => setActiveTab('exercises')}
                  className="px-6 py-3 rounded-xl font-bold transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  💪 Browse Exercises
                </button>
              </div>
            </div>

            {/* Stat pills */}
            <div className="flex flex-col gap-3 min-w-fit">
              {stats.map(stat => (
                <div key={stat.label} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-white opacity-60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Quote */}
      <div className="rounded-2xl p-6 text-center glass-card" style={{ borderColor: 'var(--calix-border)', border: '1px solid' }}>
        <div className="text-xs font-bold tracking-widest uppercase mb-3 calix-muted">Today's Mindset</div>
        <blockquote className="text-lg md:text-xl font-medium italic" style={{ color: 'var(--calix-text)' }}>
          "{quote}"
        </blockquote>
        <div className="mt-2 text-sm calix-muted">— CALIX Training Philosophy</div>
      </div>

      {/* Quick Navigation */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--calix-text)' }}>
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map(link => (
            <button
              key={link.label}
              onClick={() => setActiveTab(link.tab)}
              className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all card-hover group"
              style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex-shrink-0`}>
                <span className="text-2xl">{link.icon}</span>
              </div>
              <div>
                <div className="font-bold text-base group-hover:text-gradient-accent" style={{ color: 'var(--calix-text)' }}>
                  {link.label}
                </div>
                <div className="text-sm mt-0.5 calix-muted">{link.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Elite Skills Showcase */}
      <div>
        <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--calix-text)' }}>Elite Skill Goals</h2>
        <p className="text-sm mb-4 calix-muted">The pinnacle movements you are working toward</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {eliteGoals.map(goal => (
            <div key={goal.skill}
              className="flex flex-col items-center text-center p-4 rounded-2xl transition-all card-hover cursor-pointer"
              style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}
              onClick={() => setActiveTab('exercises')}
            >
              <span className="text-3xl mb-2">{goal.emoji}</span>
              <div className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{goal.skill}</div>
              <div className="text-xs mt-1 calix-muted">{goal.time}</div>
              <div className={`mt-2 text-xs px-2 py-1 rounded-full border font-medium
                ${goal.level === 'Elite' ? 'difficulty-elite bg-difficulty-elite' :
                  goal.level === 'Advanced' ? 'difficulty-advanced bg-difficulty-advanced' :
                  'difficulty-intermediate bg-difficulty-intermediate'}`}>
                {goal.level}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notes */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--calix-text)' }}>
            <span>📝</span> Training Notes
          </h3>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Track your goals, PRs, insights, and progress notes here. Saved locally to your browser."
            className="w-full h-32 p-3 rounded-xl resize-none text-sm focus:outline-none transition-all"
            style={{
              backgroundColor: 'var(--calix-surface2)',
              border: '1px solid var(--calix-border)',
              color: 'var(--calix-text)'
            }}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs calix-muted">{notes.length} characters</span>
            <button
              onClick={saveNotes}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: noteSaved ? 'var(--calix-green)' : 'var(--calix-accent)',
                color: 'white'
              }}
            >
              {noteSaved ? '✓ Saved!' : 'Save Notes'}
            </button>
          </div>
        </div>

        {/* Philosophy */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--calix-text)' }}>
            <span>⚡</span> CALIX Philosophy
          </h3>
          <div className="space-y-3">
            {[
              { title: 'Form First, Always', desc: 'Perfect controlled movement beats sloppy advanced skills every time.' },
              { title: 'Progressive Overload', desc: 'Small consistent increments compound into extraordinary results over time.' },
              { title: 'Joint Health is Wealth', desc: 'A single injury can erase months of progress. Prevention is the priority.' },
              { title: 'Mastery Over Performance', desc: 'True mastery means owning a movement at every level, not just completing it.' },
            ].map(item => (
              <div key={item.title} className="flex gap-3">
                <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--calix-accent)', minHeight: '16px' }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>{item.title}</div>
                  <div className="text-xs mt-0.5 calix-muted">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="rounded-2xl p-6" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--calix-text)' }}>What CALIX Contains</h3>
        <p className="text-sm mb-6 calix-muted">Everything you need to go from absolute beginner to elite mastery — permanently offline</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '💪', label: '50+ Exercises', sub: 'Beginner to Elite' },
            { icon: '🌳', label: 'Skill Trees', sub: 'Full prerequisite maps' },
            { icon: '🗺️', label: '5-Phase Roadmap', sub: 'Beginner to elite journey' },
            { icon: '📋', label: '4 Complete Programs', sub: '2-6 day options' },
            { icon: '🧘', label: 'Mobility System', sub: 'Joint & flexibility work' },
            { icon: '🛡️', label: 'Injury Protocols', sub: 'Prevention & rehab' },
            { icon: '🏋️', label: 'Equipment Guide', sub: 'What you need & why' },
            { icon: '🔬', label: 'Sports Science', sub: 'The theory behind it' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl"
              style={{ backgroundColor: 'var(--calix-surface2)' }}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>{item.label}</div>
                <div className="text-xs calix-muted">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
