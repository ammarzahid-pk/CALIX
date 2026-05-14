import React, { useState } from 'react';
import { roadmapPhases, RoadmapPhase } from '../data/roadmap';

const getLevelIcon = (level: string) => {
  const icons: Record<string, string> = {
    foundation: '🪨',
    beginner: '🌱',
    intermediate: '🔥',
    advanced: '⚡',
    elite: '👑',
  };
  return icons[level] || '⭐';
};

const getCompletedPhases = (): number[] => {
  try {
    const stored = localStorage.getItem('calix-completed-phases');
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
};

const saveCompletedPhases = (phases: number[]) => {
  try { localStorage.setItem('calix-completed-phases', JSON.stringify(phases)); } catch {}
};

const PhaseCard: React.FC<{ phase: RoadmapPhase; isCompleted: boolean; onToggleComplete: () => void }> = ({
  phase, isCompleted, onToggleComplete
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'movements', label: 'Key Movements' },
    { id: 'structure', label: 'Weekly Structure' },
    { id: 'mastery', label: 'Mastery Req.' },
    { id: 'pitfalls', label: 'Pitfalls' },
    { id: 'science', label: 'Science' },
  ];

  return (
    <div className="rounded-2xl overflow-hidden transition-all"
      style={{
        backgroundColor: 'var(--calix-surface)',
        border: `1px solid ${isCompleted ? '#00ff88' : 'var(--calix-border)'}`,
        boxShadow: isCompleted ? '0 0 20px rgba(0,255,136,0.1)' : 'none'
      }}>

      {/* Phase Header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-4">
            {/* Phase number */}
            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${phase.color}`}>
              <span className="text-2xl">{getLevelIcon(phase.level)}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-md font-black" style={{ color: 'var(--calix-text)' }}>
                  {phase.title}
                </h3>
                {isCompleted && (
                  <span className="text-sm px-2 py-1 rounded-full font-bold"
                    style={{ backgroundColor: 'rgba(0,255,136,0.2)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.5)' }}>
                    ✓ Completed
                  </span>
                )}
              </div>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--calix-accent)' }}>
                {phase.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs calix-muted flex items-center gap-1">
                  <span>⏱️</span> {phase.duration}
                </span>
                <span className="text-xs calix-muted flex items-center gap-1 capitalize">
                  <span>📊</span> {phase.level}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={e => { e.stopPropagation(); onToggleComplete(); }}
              className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                backgroundColor: isCompleted ? 'rgba(0,255,136,0.2)' : 'var(--calix-surface2)',
                color: isCompleted ? '#00ff88' : 'var(--calix-muted)',
                border: `1px solid ${isCompleted ? 'rgba(0,255,136,0.5)' : 'var(--calix-border)'}`
              }}
            >
              {isCompleted ? '✓ Done' : 'Mark Complete'}
            </button>
            <span style={{ color: 'var(--calix-muted)' }}>{expanded ? '▲' : '▼'}</span>
          </div>
        </div>

        {/* Brief description */}
        <p className="text-sm mt-4 leading-relaxed"
          style={{ color: 'var(--calix-text)', opacity: 0.8 }}>
          {phase.description.substring(0, 220)}
          {phase.description.length > 220 ? '...' : ''}
        </p>

        {/* Goals preview */}
        <div className="flex flex-wrap gap-2 mt-3">
          {phase.goals.slice(0, 3).map((goal, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-lg"
              style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-muted)' }}>
              ✓ {goal.substring(0, 40)}{goal.length > 40 ? '...' : ''}
            </span>
          ))}
          {phase.goals.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-lg calix-muted">+{phase.goals.length - 3} more</span>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ borderTop: '1px solid var(--calix-border)' }}>
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto gap-1 p-3"
            style={{ backgroundColor: 'var(--calix-surface2)' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all"
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--calix-accent)' : 'transparent',
                  color: activeTab === tab.id ? 'white' : 'var(--calix-muted)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--calix-accent)' }}>
                    Phase Goals
                  </h4>
                  <div className="space-y-2">
                    {phase.goals.map((goal, i) => (
                      <div key={i} className="flex gap-3 text-sm" style={{ color: 'var(--calix-text)' }}>
                        <span style={{ color: '#00ff88' }}>✓</span>
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--calix-accent)' }}>
                    Daily Practice
                  </h4>
                  <div className="space-y-2">
                    {phase.dailyPractice.map((item, i) => (
                      <div key={i} className="flex gap-3 p-2.5 rounded-xl text-sm"
                        style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                        <span>📅</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)' }}>
                  <div className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: 'var(--calix-accent)' }}>
                    Unlocks
                  </div>
                  <p className="text-sm" style={{ color: 'var(--calix-text)' }}>{phase.unlocks}</p>
                </div>
              </div>
            )}

            {activeTab === 'movements' && (
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--calix-accent)' }}>
                  Key Movements for This Phase
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phase.keyMovements.map((movement, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                      <span style={{ color: 'var(--calix-gold)' }}>▶</span>
                      <span>{movement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#00ccff' }}>
                    Mobility Focus
                  </h4>
                  <div className="space-y-2">
                    {phase.mobilityFocus.map((mob, i) => (
                      <div key={i} className="p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(0,204,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,204,255,0.15)' }}>
                        {mob}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'structure' && (
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--calix-accent)' }}>
                  Weekly Training Structure
                </h4>
                <div className="space-y-2">
                  {phase.weeklyStructure.map((day, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                      <span style={{ color: 'var(--calix-accent)', fontWeight: 'bold', minWidth: '20px' }}>{i + 1}.</span>
                      <span>{day}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#ff6b35' }}>
                    Prehab Protocol
                  </h4>
                  <div className="space-y-2">
                    {phase.phrehab.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(255,107,53,0.07)', color: 'var(--calix-text)' }}>
                        <span>🛡️</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mastery' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--calix-gold)' }}>
                    Mastery Requirements (to advance to next phase)
                  </h4>
                  <div className="space-y-2">
                    {phase.masteryRequirements.map((req, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(255,215,0,0.08)', color: 'var(--calix-text)', border: '1px solid rgba(255,215,0,0.2)' }}>
                        <span style={{ color: 'var(--calix-gold)' }}>🏆</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#00ff88' }}>
                    Phase Milestones
                  </h4>
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(0,255,136,0.07)', color: 'var(--calix-text)' }}>
                        <span style={{ color: '#00ff88' }}>→</span>
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pitfalls' && (
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#ff0040' }}>
                  Common Pitfalls to Avoid
                </h4>
                <div className="space-y-3">
                  {phase.commonPitfalls.map((pitfall, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(255,0,64,0.08)', color: 'var(--calix-text)', border: '1px solid rgba(255,0,64,0.2)' }}>
                      <span className="flex-shrink-0">🚫</span>
                      <span>{pitfall}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'science' && (
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#00ccff' }}>
                  Sports Science Foundation
                </h4>
                <div className="p-5 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(0,204,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,204,255,0.2)' }}>
                  <p>{phase.scienceNotes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const RoadmapView: React.FC = () => {
  const [completedPhases, setCompletedPhases] = useState<number[]>(getCompletedPhases());

  const togglePhase = (phaseNum: number) => {
    const updated = completedPhases.includes(phaseNum)
      ? completedPhases.filter(p => p !== phaseNum)
      : [...completedPhases, phaseNum];
    setCompletedPhases(updated);
    saveCompletedPhases(updated);
  };

  const progressPct = Math.round((completedPhases.length / roadmapPhases.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>
          The CALIX Roadmap
        </h1>
        <p className="mt-1 calix-muted">
          Your complete journey from absolute beginner to elite mastery — follow this in order
        </p>
      </div>

      {/* Progress Bar */}
      <div className="p-5 rounded-2xl" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="font-bold text-lg" style={{ color: 'var(--calix-text)' }}>Your Progress</div>
            <div className="text-sm calix-muted">{completedPhases.length} of {roadmapPhases.length} phases completed</div>
          </div>
          <div className="text-3xl font-black text-gradient-accent">{progressPct}%</div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="flex justify-between mt-2">
          {roadmapPhases.map(phase => (
            <div key={phase.id}
              className="flex flex-col items-center gap-1">
              <div className={`w-3 h-3 rounded-full transition-all ${
                completedPhases.includes(phase.phase)
                  ? 'bg-green-400 shadow-lg shadow-green-400/50'
                  : 'opacity-30'
              }`}
              style={{ backgroundColor: completedPhases.includes(phase.phase) ? '#00ff88' : 'var(--calix-muted)' }} />
              <div className="text-xs calix-muted hidden md:block">{phase.phase}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Overview */}
      <div className="p-5 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(255,107,53,0.1) 100%)', border: '1px solid rgba(108,99,255,0.2)' }}>
        <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--calix-text)' }}>The Journey Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {roadmapPhases.map(phase => (
            <div key={phase.id}
              className={`flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                completedPhases.includes(phase.phase) ? 'opacity-100' : 'opacity-60'
              }`}>
              <span className="text-2xl mb-1">{getLevelIcon(phase.level)}</span>
              <div className="text-xs font-bold capitalize" style={{ color: 'var(--calix-text)' }}>{phase.level}</div>
              <div className="text-xs calix-muted mt-0.5">{phase.duration.split(' ').slice(0,2).join(' ')}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Cards */}
      <div className="space-y-4">
        {roadmapPhases.map((phase, i) => (
          <div key={phase.id} className="relative">
            {/* Connection line */}
            {i < roadmapPhases.length - 1 && (
              <div className="absolute left-7 bottom-0 w-0.5 h-4 z-10"
                style={{
                  background: `linear-gradient(to bottom, ${completedPhases.includes(phase.phase) ? '#00ff88' : 'rgba(255,255,255,0.1)'}, transparent)`,
                  transform: 'translateY(100%)'
                }} />
            )}
            <PhaseCard
              phase={phase}
              isCompleted={completedPhases.includes(phase.phase)}
              onToggleComplete={() => togglePhase(phase.phase)}
            />
          </div>
        ))}
      </div>

      {/* Final Note */}
      <div className="p-6 rounded-2xl text-center"
        style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(255,215,0,0.15) 100%)', border: '1px solid rgba(108,99,255,0.3)' }}>
        <div className="text-3xl mb-3">👑</div>
        <h3 className="font-black text-xl mb-2" style={{ color: 'var(--calix-text)' }}>The Road Never Ends</h3>
        <p className="text-sm calix-muted max-w-2xl mx-auto leading-relaxed">
          Elite mastery in calisthenics is a lifelong pursuit. Phase 4 athletes are always working
          toward new skills, refining existing ones, and deepening their movement intelligence.
          The roadmap ends — the journey does not.
        </p>
      </div>
    </div>
  );
};
