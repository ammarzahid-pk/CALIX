import React, { useState } from 'react';
import { Exercise } from '../data/exercises';

interface ExerciseCardProps {
  exercise: Exercise;
  compact?: boolean;
  onFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

const difficultyConfig = {
  beginner: { label: 'Beginner', class: 'difficulty-beginner bg-difficulty-beginner' },
  intermediate: { label: 'Intermediate', class: 'difficulty-intermediate bg-difficulty-intermediate' },
  advanced: { label: 'Advanced', class: 'difficulty-advanced bg-difficulty-advanced' },
  elite: { label: 'Elite', class: 'difficulty-elite bg-difficulty-elite' },
};

const categoryColors: Record<string, string> = {
  push: '#6c63ff',
  pull: '#ff6b35',
  core: '#00ff88',
  legs: '#ffd700',
  'full-body': '#ff0040',
  mobility: '#00ccff',
  static: '#ff8c00',
  dynamic: '#9c88ff',
  plyometric: '#ff4466',
  isometric: '#88ccff',
};

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  compact = false,
  onFavorite,
  isFavorited = false
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('execution');

  const diff = difficultyConfig[exercise.difficulty];
  const equipmentLabels = exercise.equipment.map(e =>
    e === 'none' ? 'No Equipment' : e === 'dip-bars' ? 'Dip Bars' :
    e.charAt(0).toUpperCase() + e.slice(1)
  );

  const sections = [
    { id: 'execution', label: 'Execution', icon: '▶️' },
    { id: 'cues', label: 'Coaching Cues', icon: '💬' },
    { id: 'mistakes', label: 'Common Mistakes', icon: '⚠️' },
    { id: 'mastery', label: 'Mastery Standards', icon: '🏆' },
    { id: 'science', label: 'Science Notes', icon: '🔬' },
    { id: 'progression', label: 'Progressions', icon: '🔗' },
  ];

  if (compact) {
    return (
      <div
        className="p-4 rounded-xl cursor-pointer transition-all card-hover"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`badge ${diff.class} text-xs`}>{diff.label}</div>
            <span className="font-semibold text-sm" style={{ color: 'var(--calix-text)' }}>{exercise.name}</span>
          </div>
          <span style={{ color: 'var(--calix-muted)' }}>{expanded ? '▲' : '▼'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden transition-all"
      style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>

      {/* Card Header */}
      <div
        className="p-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Tags row */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`badge ${diff.class}`}>{diff.label}</span>
              {exercise.category.slice(0, 2).map(cat => (
                <span key={cat} className="badge text-xs" style={{
                  color: categoryColors[cat] || '#888',
                  borderColor: categoryColors[cat] || '#888',
                  backgroundColor: (categoryColors[cat] || '#888') + '20'
                }}>
                  {cat}
                </span>
              ))}
              {exercise.equipment.includes('none') ? (
                <span className="text-xs calix-muted">No Equipment</span>
              ) : (
                equipmentLabels.slice(0, 2).map(eq => (
                  <span key={eq} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-muted)' }}>
                    {eq}
                  </span>
                ))
              )}
            </div>

            {/* Exercise Name */}
            <h3 className="text-lg font-bold leading-tight" style={{ color: 'var(--calix-text)' }}>
              {exercise.name}
            </h3>

            {/* Muscle groups */}
            <p className="text-xs mt-1 calix-muted">
              {exercise.muscleGroups.slice(0, 3).join(' · ')}
              {exercise.muscleGroups.length > 3 && ` +${exercise.muscleGroups.length - 3} more`}
            </p>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {onFavorite && (
              <button
                onClick={e => { e.stopPropagation(); onFavorite(exercise.id); }}
                className="text-lg transition-all hover:scale-110"
                title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isFavorited ? '⭐' : '☆'}
              </button>
            )}
            <span className="text-lg" style={{ color: 'var(--calix-muted)' }}>
              {expanded ? '▲' : '▼'}
            </span>
          </div>
        </div>

        {/* Brief description */}
        <p className="text-sm mt-3 leading-relaxed"
          style={{ color: 'var(--calix-text)', opacity: 0.8 }}>
          {exercise.description.length > 200
            ? exercise.description.substring(0, 200) + '...'
            : exercise.description}
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs calix-muted">Prereqs:</span>
            <span className="text-xs font-medium" style={{ color: 'var(--calix-accent)' }}>
              {exercise.prerequisites.length === 0 ? 'None' : exercise.prerequisites.length}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs calix-muted">Unlocks:</span>
            <span className="text-xs font-medium" style={{ color: '#00ff88' }}>
              {exercise.unlocks.length}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs calix-muted">Type:</span>
            <span className="text-xs font-medium" style={{ color: 'var(--calix-gold)' }}>
              {exercise.movementType.charAt(0).toUpperCase() + exercise.movementType.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ borderTop: '1px solid var(--calix-border)' }}>
          {/* Section Tabs */}
          <div className="flex overflow-x-auto gap-1 p-3" style={{ backgroundColor: 'var(--calix-surface2)' }}>
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all"
                style={{
                  backgroundColor: activeSection === sec.id ? 'var(--calix-accent)' : 'transparent',
                  color: activeSection === sec.id ? 'white' : 'var(--calix-muted)'
                }}
              >
                <span>{sec.icon}</span>
                <span>{sec.label}</span>
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="p-5">
            {activeSection === 'execution' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--calix-accent)' }}>
                    Step-by-Step Execution
                  </h4>
                  <ol className="space-y-2">
                    {exercise.executionSteps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--calix-text)' }}>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: 'var(--calix-accent)' }}>
                          {i + 1}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)' }}>
                    <div className="text-xs font-bold mb-1 calix-muted uppercase tracking-wider">Breathing</div>
                    <p className="text-sm" style={{ color: 'var(--calix-text)' }}>{exercise.breathingGuide}</p>
                  </div>
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)' }}>
                    <div className="text-xs font-bold mb-1 calix-muted uppercase tracking-wider">Tempo</div>
                    <p className="text-sm" style={{ color: 'var(--calix-text)' }}>{exercise.tempoRecommendation}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'cues' && (
              <div>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--calix-accent)' }}>
                  Elite Coaching Cues
                </h4>
                <div className="space-y-2">
                  {exercise.coachingCues.map((cue, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                      <span style={{ color: 'var(--calix-gold)' }}>💡</span>
                      <span>{cue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'mistakes' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: '#ff6b35' }}>
                    Common Mistakes
                  </h4>
                  <div className="space-y-2">
                    {exercise.commonMistakes.map((mistake, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(255,107,53,0.1)', color: 'var(--calix-text)' }}>
                        <span>⚠️</span>
                        <span>{mistake}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: '#ff0040' }}>
                    Injury Risks
                  </h4>
                  <div className="space-y-2">
                    {exercise.injuryRisks.map((risk, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                        style={{ backgroundColor: 'rgba(255,0,64,0.1)', color: 'var(--calix-text)' }}>
                        <span>🚨</span>
                        <span>{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'mastery' && (
              <div className="space-y-4">
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--calix-gold)' }}>
                  Mastery Standards
                </h4>
                {[
                  { label: 'Minimum Mastery', std: exercise.masteryStandards.minimum, color: '#00ff88', bg: 'rgba(0,255,136,0.1)' },
                  { label: 'Advanced Mastery', std: exercise.masteryStandards.advanced, color: '#ffd700', bg: 'rgba(255,215,0,0.1)' },
                  { label: 'Elite Mastery', std: exercise.masteryStandards.elite, color: '#ff0040', bg: 'rgba(255,0,64,0.1)' },
                ].map(item => (
                  <div key={item.label} className="p-4 rounded-xl"
                    style={{ backgroundColor: item.bg, border: `1px solid ${item.color}30` }}>
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: item.color }}>
                      {item.label}
                    </div>
                    <p className="text-sm" style={{ color: 'var(--calix-text)' }}>{item.std}</p>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider calix-muted">Mobility Requirements</div>
                    <ul className="space-y-1">
                      {exercise.mobilityRequirements.map((req, i) => (
                        <li key={i} className="text-xs flex gap-2" style={{ color: 'var(--calix-text)' }}>
                          <span style={{ color: '#00ccff' }}>→</span>{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider calix-muted">Strength Requirements</div>
                    <ul className="space-y-1">
                      {exercise.strengthRequirements.map((req, i) => (
                        <li key={i} className="text-xs flex gap-2" style={{ color: 'var(--calix-text)' }}>
                          <span style={{ color: '#ff6b35' }}>→</span>{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'science' && (
              <div>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ color: '#00ccff' }}>
                  Sports Science Notes
                </h4>
                <div className="p-4 rounded-xl text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(0,204,255,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,204,255,0.2)' }}>
                  <p>{exercise.scienceNotes}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider calix-muted">Movement Type</div>
                    <div className="text-sm font-medium" style={{ color: 'var(--calix-gold)' }}>
                      {exercise.movementType.charAt(0).toUpperCase() + exercise.movementType.slice(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-wider calix-muted">Primary Muscles</div>
                    <div className="text-sm" style={{ color: 'var(--calix-text)' }}>
                      {exercise.muscleGroups.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'progression' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: '#00ff88' }}>
                      ⬆️ Progressions (Harder)
                    </div>
                    {exercise.progressions.length > 0 ? (
                      <div className="space-y-1.5">
                        {exercise.progressions.map(prog => (
                          <div key={prog} className="p-2 rounded-lg text-xs font-medium"
                            style={{ backgroundColor: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}>
                            {prog.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs calix-muted">This is an elite movement — no standard progressions.</p>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: '#ff6b35' }}>
                      ⬇️ Regressions (Easier)
                    </div>
                    {exercise.regressions.length > 0 ? (
                      <div className="space-y-1.5">
                        {exercise.regressions.map(reg => (
                          <div key={reg} className="p-2 rounded-lg text-xs font-medium"
                            style={{ backgroundColor: 'rgba(255,107,53,0.1)', color: '#ff6b35', border: '1px solid rgba(255,107,53,0.3)' }}>
                            {reg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs calix-muted">This is a foundational movement — begin here.</p>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: 'var(--calix-accent)' }}>
                      🔀 Variations
                    </div>
                    {exercise.variations.length > 0 ? (
                      <div className="space-y-1.5">
                        {exercise.variations.slice(0, 5).map(v => (
                          <div key={v} className="p-2 rounded-lg text-xs"
                            style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                            {v}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Prerequisites */}
                {exercise.prerequisites.length > 0 && (
                  <div>
                    <div className="text-xs font-bold mb-3 uppercase tracking-wider calix-muted">
                      🔒 Prerequisites (Must Master First)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.prerequisites.map(prereq => (
                        <span key={prereq}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: 'rgba(108,99,255,0.15)',
                            color: 'var(--calix-accent)',
                            border: '1px solid rgba(108,99,255,0.3)'
                          }}>
                          🔒 {prereq.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Unlocks */}
                {exercise.unlocks.length > 0 && (
                  <div>
                    <div className="text-xs font-bold mb-3 uppercase tracking-wider calix-muted">
                      🔓 Unlocks (What This Enables)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exercise.unlocks.map(unlock => (
                        <span key={unlock}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: 'rgba(0,255,136,0.1)',
                            color: '#00ff88',
                            border: '1px solid rgba(0,255,136,0.3)'
                          }}>
                          🔓 {unlock.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
