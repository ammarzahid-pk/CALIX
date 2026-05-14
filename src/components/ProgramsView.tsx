import React, { useState } from 'react';
import { programs, WorkoutDay } from '../data/programs';

const levelColors: Record<string, string> = {
  Beginner: '#00ff88',
  Intermediate: '#ffd700',
  Advanced: '#ff6b35',
  Elite: '#ff0040',
};

const WorkoutDayCard: React.FC<{ dayName: string; workout: WorkoutDay | string }> = ({ dayName, workout }) => {
  const [expanded, setExpanded] = useState(false);

  if (typeof workout === 'string') {
    return (
      <div className="p-4 rounded-xl flex items-center gap-3"
        style={{ backgroundColor: 'var(--calix-surface2)', border: '1px solid var(--calix-border)' }}>
        <div className="text-lg">🛌</div>
        <div>
          <div className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>{dayName}</div>
          <div className="text-xs calix-muted">{workout}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden"
      style={{ backgroundColor: 'var(--calix-surface2)', border: '1px solid var(--calix-border)' }}>
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{dayName}</span>
            <span className="text-xs calix-muted">—</span>
            <span className="text-sm font-medium" style={{ color: 'var(--calix-accent)' }}>{workout.name}</span>
          </div>
          <div className="text-xs mt-0.5 calix-muted">{workout.focus} · {workout.duration}</div>
        </div>
        <span className="calix-muted">{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className="px-4 pb-4 space-y-4" style={{ borderTop: '1px solid var(--calix-border)' }}>

          {/* Warmup */}
          <div className="pt-4">
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#00ccff' }}>
              🔥 Warmup
            </div>
            <div className="space-y-1.5">
              {workout.warmup.map((item, i) => (
                <div key={i} className="text-xs flex gap-2" style={{ color: 'var(--calix-text)' }}>
                  <span style={{ color: '#00ccff' }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exercises */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--calix-gold)' }}>
              💪 Exercises
            </div>
            <div className="space-y-3">
              {workout.exercises.map((ex, i) => (
                <div key={i} className="p-3 rounded-xl"
                  style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>
                      {i + 1}. {ex.name}
                    </div>
                    <div className="flex items-center gap-2 text-xs flex-shrink-0">
                      <span className="px-2 py-0.5 rounded-lg font-bold"
                        style={{ backgroundColor: 'rgba(108,99,255,0.2)', color: 'var(--calix-accent)' }}>
                        {ex.sets} sets
                      </span>
                    </div>
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--calix-gold)' }}>
                    {ex.reps} · Rest: {ex.rest}
                  </div>
                  <p className="text-xs mt-2 leading-relaxed calix-muted">{ex.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cooldown */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#9c88ff' }}>
              🧘 Cooldown
            </div>
            <div className="space-y-1.5">
              {workout.cooldown.map((item, i) => (
                <div key={i} className="text-xs flex gap-2" style={{ color: 'var(--calix-text)' }}>
                  <span style={{ color: '#9c88ff' }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProgramsView: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0].id);
  const [activeSection, setActiveSection] = useState('schedule');

  const program = programs.find(p => p.id === selectedProgram) || programs[0];

  const sections = [
    { id: 'schedule', label: 'Weekly Schedule' },
    { id: 'overview', label: 'Overview & Philosophy' },
    { id: 'progression', label: 'Progression Method' },
    { id: 'recovery', label: 'Recovery & Deload' },
  ];

  const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Training Programs</h1>
        <p className="mt-1 calix-muted">Complete structured programs with full exercise, warmup, and progression details</p>
      </div>

      {/* Program selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {programs.map(prog => (
          <button
            key={prog.id}
            onClick={() => { setSelectedProgram(prog.id); setActiveSection('schedule'); }}
            className={`p-4 rounded-2xl text-left transition-all card-hover`}
            style={{
              backgroundColor: selectedProgram === prog.id ? 'rgba(108,99,255,0.1)' : 'var(--calix-surface)',
              border: `1px solid ${selectedProgram === prog.id ? 'var(--calix-accent)' : 'var(--calix-border)'}`,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="badge"
                style={{
                  color: levelColors[prog.level] || '#888',
                  borderColor: levelColors[prog.level] || '#888',
                  backgroundColor: (levelColors[prog.level] || '#888') + '20'
                }}>
                {prog.level}
              </span>
              <span className="text-xs calix-muted">{prog.daysPerWeek}x / week</span>
            </div>
            <div className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{prog.name}</div>
            <div className="text-xs mt-1 calix-muted">{prog.goal}</div>
            <div className="text-xs mt-1" style={{ color: 'var(--calix-accent)' }}>{prog.duration}</div>
          </button>
        ))}
      </div>

      {/* Program Detail */}
      <div className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>

        {/* Program Header */}
        <div className="p-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="flex items-center gap-3 mb-3">
            <span className="badge"
              style={{
                color: levelColors[program.level] || '#888',
                borderColor: levelColors[program.level] || '#888',
                backgroundColor: (levelColors[program.level] || '#888') + '20'
              }}>
              {program.level}
            </span>
            <span className="text-xs calix-muted">{program.daysPerWeek} days/week · {program.duration}</span>
          </div>
          <h2 className="text-xl font-black" style={{ color: 'var(--calix-text)' }}>{program.name}</h2>
          <p className="text-sm mt-2 calix-muted">{program.goal}</p>

          {/* Prerequisites */}
          {program.prerequisites.length > 0 && (
            <div className="mt-4">
              <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Prerequisites</div>
              <div className="flex flex-wrap gap-2">
                {program.prerequisites.map((prereq, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-lg"
                    style={{ backgroundColor: 'rgba(255,107,53,0.15)', color: '#ff6b35', border: '1px solid rgba(255,107,53,0.3)' }}>
                    {prereq}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section Nav */}
        <div className="flex overflow-x-auto gap-1 p-3"
          style={{ backgroundColor: 'var(--calix-surface2)', borderTop: '1px solid var(--calix-border)' }}>
          {sections.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className="px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all"
              style={{
                backgroundColor: activeSection === sec.id ? 'var(--calix-accent)' : 'transparent',
                color: activeSection === sec.id ? 'white' : 'var(--calix-muted)'
              }}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeSection === 'schedule' && (
            <div className="space-y-3">
              <h3 className="font-bold mb-4" style={{ color: 'var(--calix-text)' }}>Weekly Training Schedule</h3>
              {dayOrder.map(day => {
                const workout = (program.schedule as Record<string, WorkoutDay | string>)[day];
                if (!workout) return null;
                return (
                  <WorkoutDayCard
                    key={day}
                    dayName={day}
                    workout={workout}
                  />
                );
              })}
            </div>
          )}

          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--calix-accent)' }}>Program Description</div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--calix-text)' }}>{program.description}</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--calix-gold)' }}>Training Philosophy</div>
                <div className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(255,215,0,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(255,215,0,0.2)' }}>
                  {program.philosophy}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3 calix-muted">Equipment Needed</div>
                <div className="flex flex-wrap gap-2">
                  {program.equipment.map((eq, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                      🏋️ {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'progression' && (
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--calix-green)' }}>
                  📈 Progression Method
                </div>
                <div className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(0,255,136,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,255,136,0.2)' }}>
                  {program.progressionMethod}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'recovery' && (
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#9c88ff' }}>
                  🔄 Deload Protocol
                </div>
                <div className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(156,136,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(156,136,255,0.2)' }}>
                  {program.deloadProtocol}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#00ccff' }}>
                  💤 Recovery Notes
                </div>
                <div className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(0,204,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,204,255,0.2)' }}>
                  {program.recoveryNotes}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
