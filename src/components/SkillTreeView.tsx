import React, { useState } from 'react';
import { exercises, Exercise } from '../data/exercises';

const diffColors: Record<string, string> = {
  beginner: '#00ff88',
  intermediate: '#ffd700',
  advanced: '#ff6b35',
  elite: '#ff0040',
};

const skillTrees = [
  {
    id: 'push-tree',
    name: 'Push Mastery Tree',
    icon: '💪',
    description: 'From wall push-ups to full planche — the complete horizontal and vertical pushing progression',
    color: 'from-blue-600 to-purple-700',
    rootExercises: ['wall-push-up'],
    treeOrder: [
      ['wall-push-up'],
      ['incline-push-up'],
      ['push-up'],
      ['diamond-push-up', 'decline-push-up', 'archer-push-up', 'explosive-push-up'],
      ['pike-push-up', 'pseudo-planche-push-up', 'clapping-push-up'],
      ['one-arm-push-up', 'planche-lean'],
      ['tuck-planche'],
      ['straddle-planche'],
      ['full-planche'],
      ['planche-push-up'],
      ['maltese'],
    ],
  },
  {
    id: 'pull-tree',
    name: 'Pull Mastery Tree',
    icon: '🔗',
    description: 'From dead hang to one-arm pull-up and front lever',
    color: 'from-orange-600 to-red-700',
    rootExercises: ['dead-hang'],
    treeOrder: [
      ['dead-hang'],
      ['scapular-pull', 'australian-row'],
      ['negative-pull-up'],
      ['pull-up'],
      ['chin-up', 'wide-grip-pull-up', 'muscle-up'],
      ['front-lever', 'back-lever'],
      ['typewriter-pull-up'],
      ['one-arm-pull-up'],
    ],
  },
  {
    id: 'handstand-tree',
    name: 'Handstand Tree',
    icon: '🤸',
    description: 'From wall handstand to one-arm handstand',
    color: 'from-teal-600 to-green-700',
    rootExercises: ['wall-handstand'],
    treeOrder: [
      ['wall-handstand'],
      ['handstand-push-up'],
      ['freestanding-handstand'],
    ],
  },
  {
    id: 'rings-tree',
    name: 'Rings Mastery Tree',
    icon: '⭕',
    description: 'From ring support hold to iron cross and Maltese — the complete rings progression',
    color: 'from-yellow-600 to-orange-700',
    rootExercises: ['ring-support-hold'],
    treeOrder: [
      ['ring-support-hold'],
      ['ring-push-up', 'ring-dip'],
      ['ring-muscle-up'],
      ['iron-cross'],
      ['maltese'],
    ],
  },
  {
    id: 'core-tree',
    name: 'Core Mastery Tree',
    icon: '🔥',
    description: 'From hollow body to manna — the complete core and compression progression',
    color: 'from-red-600 to-pink-700',
    rootExercises: ['hollow-body', 'arch-body'],
    treeOrder: [
      ['hollow-body', 'arch-body'],
      ['plank'],
      ['toes-to-bar'],
      ['L-sit', 'dragon-flag'],
      ['V-sit'],
      ['manna'],
    ],
  },
];

const ExerciseNode: React.FC<{
  exerciseId: string;
  onClick: (ex: Exercise) => void;
}> = ({ exerciseId, onClick }) => {
  const ex = exercises.find(e => e.id === exerciseId);
  if (!ex) return null;

  return (
    <div
      className="cursor-pointer group"
      onClick={() => onClick(ex)}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="w-36 p-3 rounded-2xl text-center transition-all card-hover border-2 group-hover:scale-105"
          style={{
            backgroundColor: 'var(--calix-surface)',
            borderColor: diffColors[ex.difficulty],
          }}
        >
          <div className="text-xs font-bold uppercase tracking-wider mb-1"
            style={{ color: diffColors[ex.difficulty] }}>
            {ex.difficulty}
          </div>
          <div className="text-xs font-semibold leading-tight" style={{ color: 'var(--calix-text)' }}>
            {ex.name}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExerciseModal: React.FC<{
  exercise: Exercise;
  onClose: () => void;
}> = ({ exercise, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}>
      <div
        className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-70"
          style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="badge text-xs"
              style={{
                color: diffColors[exercise.difficulty],
                borderColor: diffColors[exercise.difficulty],
                backgroundColor: diffColors[exercise.difficulty] + '20'
              }}>
              {exercise.difficulty}
            </span>
            {exercise.category.slice(0, 2).map(cat => (
              <span key={cat} className="text-xs calix-muted px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'var(--calix-surface2)' }}>
                {cat}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-black" style={{ color: 'var(--calix-text)' }}>{exercise.name}</h2>
          <p className="text-sm mt-2 leading-relaxed calix-muted">{exercise.description}</p>
        </div>

        {/* Prerequisites & Unlocks */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Prerequisites</div>
            {exercise.prerequisites.length === 0 ? (
              <div className="text-xs" style={{ color: '#00ff88' }}>None — Entry point</div>
            ) : exercise.prerequisites.map(p => (
              <div key={p} className="text-xs py-0.5" style={{ color: 'var(--calix-accent)' }}>
                🔒 {p.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)' }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Unlocks</div>
            {exercise.unlocks.slice(0, 4).map(u => (
              <div key={u} className="text-xs py-0.5" style={{ color: '#00ff88' }}>
                🔓 {u.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </div>
            ))}
          </div>
        </div>

        {/* Mastery Standards */}
        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-wider mb-3 calix-muted">Mastery Standards</div>
          <div className="space-y-2">
            <div className="p-3 rounded-xl text-xs" style={{ backgroundColor: 'rgba(0,255,136,0.1)', color: 'var(--calix-text)' }}>
              <span className="font-bold" style={{ color: '#00ff88' }}>Minimum: </span>
              {exercise.masteryStandards.minimum}
            </div>
            <div className="p-3 rounded-xl text-xs" style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: 'var(--calix-text)' }}>
              <span className="font-bold" style={{ color: '#ffd700' }}>Advanced: </span>
              {exercise.masteryStandards.advanced}
            </div>
            <div className="p-3 rounded-xl text-xs" style={{ backgroundColor: 'rgba(255,0,64,0.1)', color: 'var(--calix-text)' }}>
              <span className="font-bold" style={{ color: '#ff0040' }}>Elite: </span>
              {exercise.masteryStandards.elite}
            </div>
          </div>
        </div>

        {/* Top 3 coaching cues */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-3 calix-muted">Top Coaching Cues</div>
          <div className="space-y-1.5">
            {exercise.coachingCues.slice(0, 3).map((cue, i) => (
              <div key={i} className="text-xs p-2.5 rounded-lg flex gap-2"
                style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                <span style={{ color: 'var(--calix-gold)' }}>💡</span>
                <span>{cue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkillTreeView: React.FC = () => {
  const [activeTree, setActiveTree] = useState(skillTrees[0].id);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const currentTree = skillTrees.find(t => t.id === activeTree) || skillTrees[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Skill Trees</h1>
        <p className="mt-1 calix-muted">
          Complete prerequisite maps — see exactly what you need to master to unlock the next skill
        </p>
      </div>

      {/* Tree Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {skillTrees.map(tree => (
          <button
            key={tree.id}
            onClick={() => setActiveTree(tree.id)}
            className={`p-4 rounded-2xl text-center transition-all card-hover`}
            style={{
              backgroundColor: activeTree === tree.id ? 'var(--calix-accent)' : 'var(--calix-surface)',
              border: `1px solid ${activeTree === tree.id ? 'var(--calix-accent)' : 'var(--calix-border)'}`,
              color: activeTree === tree.id ? 'white' : 'var(--calix-text)'
            }}
          >
            <div className="text-2xl mb-1">{tree.icon}</div>
            <div className="text-xs font-bold">{tree.name}</div>
          </button>
        ))}
      </div>

      {/* Tree Description */}
      <div className={`p-5 rounded-2xl bg-gradient-to-r ${currentTree.color} text-white`}>
        <div className="text-2xl mb-1">{currentTree.icon}</div>
        <h2 className="text-xl font-black">{currentTree.name}</h2>
        <p className="text-sm mt-1 opacity-80">{currentTree.description}</p>
      </div>

      {/* Tree Visualization */}
      <div className="p-6 rounded-2xl overflow-x-auto"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <div className="min-w-max">
          {currentTree.treeOrder.map((level, levelIdx) => (
            <div key={levelIdx}>
              {/* Level label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xs font-bold uppercase tracking-wider calix-muted">
                  Level {levelIdx + 1}
                </div>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--calix-border)' }} />
              </div>

              {/* Exercise nodes */}
              <div className="flex flex-wrap gap-4 justify-start mb-2">
                {level.map(exId => (
                  <ExerciseNode
                    key={exId}
                    exerciseId={exId}
                    onClick={setSelectedExercise}
                  />
                ))}
              </div>

              {/* Arrow between levels */}
              {levelIdx < currentTree.treeOrder.length - 1 && (
                <div className="flex justify-start pl-16 my-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6"
                      style={{ backgroundColor: 'var(--calix-accent)', opacity: 0.4 }} />
                    <div className="text-xl" style={{ color: 'var(--calix-accent)', opacity: 0.6 }}>▼</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 p-4 rounded-xl"
        style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <div className="text-xs font-bold uppercase tracking-wider calix-muted mr-2">Legend:</div>
        {Object.entries(diffColors).map(([level, color]) => (
          <div key={level} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs capitalize" style={{ color: 'var(--calix-text)' }}>{level}</span>
          </div>
        ))}
        <div className="text-xs calix-muted ml-4">Click any node to see details</div>
      </div>

      {/* How to use */}
      <div className="p-5 rounded-2xl"
        style={{ backgroundColor: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.2)' }}>
        <h3 className="font-bold mb-3" style={{ color: 'var(--calix-accent)' }}>How to Use Skill Trees</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex gap-3" style={{ color: 'var(--calix-text)' }}>
            <span>1️⃣</span>
            <span>Start at the bottom of the tree — master each level before advancing</span>
          </div>
          <div className="flex gap-3" style={{ color: 'var(--calix-text)' }}>
            <span>2️⃣</span>
            <span>Click any exercise node to see its full details, standards, and requirements</span>
          </div>
          <div className="flex gap-3" style={{ color: 'var(--calix-text)' }}>
            <span>3️⃣</span>
            <span>You must meet the mastery requirements of a level before training the next level</span>
          </div>
        </div>
      </div>

      {/* Exercise Modal */}
      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
};
