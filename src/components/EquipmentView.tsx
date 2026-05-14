import React, { useState } from 'react';
import { equipmentList } from '../data/equipment';

const priorityConfig = {
  essential: { label: 'Essential', color: '#ff0040', bg: 'rgba(255,0,64,0.12)' },
  recommended: { label: 'Recommended', color: '#ff6b35', bg: 'rgba(255,107,53,0.12)' },
  optional: { label: 'Optional', color: '#ffd700', bg: 'rgba(255,215,0,0.12)' },
  advanced: { label: 'Advanced', color: '#6c63ff', bg: 'rgba(108,99,255,0.12)' },
};

export const EquipmentView: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const filtered = filterPriority === 'all'
    ? equipmentList
    : equipmentList.filter(e => e.priority === filterPriority);

  const selected = equipmentList.find(e => e.id === selectedEquipment);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Equipment Guide</h1>
        <p className="mt-1 calix-muted">Every major piece of calisthenics equipment — what it is, why you need it, and how to use it</p>
      </div>

      {/* Priority overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(priorityConfig).map(([key, config]) => {
          const count = equipmentList.filter(e => e.priority === key).length;
          return (
            <button
              key={key}
              onClick={() => setFilterPriority(filterPriority === key ? 'all' : key)}
              className="p-4 rounded-2xl text-center transition-all card-hover"
              style={{
                backgroundColor: filterPriority === key ? config.bg : 'var(--calix-surface)',
                border: `1px solid ${filterPriority === key ? config.color : 'var(--calix-border)'}`,
              }}
            >
              <div className="text-2xl font-black" style={{ color: config.color }}>{count}</div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--calix-text)' }}>{config.label}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Equipment List */}
        <div className="lg:col-span-1 space-y-3">
          {filtered.map(eq => {
            const pc = priorityConfig[eq.priority];
            return (
              <button
                key={eq.id}
                onClick={() => setSelectedEquipment(selectedEquipment === eq.id ? null : eq.id)}
                className="w-full p-4 rounded-2xl text-left transition-all card-hover"
                style={{
                  backgroundColor: selectedEquipment === eq.id ? pc.bg : 'var(--calix-surface)',
                  border: `1px solid ${selectedEquipment === eq.id ? pc.color : 'var(--calix-border)'}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{eq.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm" style={{ color: 'var(--calix-text)' }}>{eq.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: pc.bg, color: pc.color }}>
                        {pc.label}
                      </span>
                      <span className="text-xs calix-muted">{eq.estimatedCost}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Equipment Detail */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="rounded-2xl overflow-hidden sticky top-4"
              style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
              <div className="p-6" style={{ borderBottom: '1px solid var(--calix-border)' }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{selected.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge"
                        style={{
                          color: priorityConfig[selected.priority].color,
                          borderColor: priorityConfig[selected.priority].color,
                          backgroundColor: priorityConfig[selected.priority].bg
                        }}>
                        {priorityConfig[selected.priority].label}
                      </span>
                      <span className="text-xs calix-muted">{selected.category}</span>
                    </div>
                    <h2 className="text-2xl font-black" style={{ color: 'var(--calix-text)' }}>{selected.name}</h2>
                    <div className="text-sm mt-1" style={{ color: 'var(--calix-accent)' }}>{selected.estimatedCost}</div>
                  </div>
                </div>
                <p className="text-sm mt-4 leading-relaxed" style={{ color: 'var(--calix-text)', opacity: 0.85 }}>
                  {selected.description}
                </p>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#00ff88' }}>Benefits</div>
                  <div className="space-y-1.5">
                    {selected.benefits.map((b, i) => (
                      <div key={i} className="flex gap-2 text-sm" style={{ color: 'var(--calix-text)' }}>
                        <span style={{ color: '#00ff88' }}>✓</span><span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--calix-accent)' }}>Beginner Uses</div>
                    <div className="space-y-1">
                      {selected.beginner_uses.map((u, i) => (
                        <div key={i} className="text-xs" style={{ color: 'var(--calix-text)' }}>→ {u}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#ff6b35' }}>Advanced Uses</div>
                    <div className="space-y-1">
                      {selected.advanced_uses.map((u, i) => (
                        <div key={i} className="text-xs" style={{ color: 'var(--calix-text)' }}>→ {u}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Safety Notes</div>
                  <div className="space-y-1.5">
                    {selected.safety.map((s, i) => (
                      <div key={i} className="flex gap-2 p-2.5 rounded-lg text-xs"
                        style={{ backgroundColor: 'rgba(255,215,0,0.07)', color: 'var(--calix-text)' }}>
                        <span>⚠️</span><span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Top Exercises</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.topExercises.map((ex, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-lg"
                        style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--calix-accent)' }}>Purchase Tips</div>
                  <div className="space-y-1.5">
                    {selected.purchaseTips.map((tip, i) => (
                      <div key={i} className="flex gap-2 text-xs" style={{ color: 'var(--calix-text)' }}>
                        <span style={{ color: 'var(--calix-accent)' }}>→</span><span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 rounded-2xl"
              style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
              <span className="text-5xl mb-4">🏋️</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--calix-text)' }}>Select Equipment</h3>
              <p className="text-sm calix-muted">Click any item on the left to see full details</p>
            </div>
          )}
        </div>
      </div>

      {/* Priority Guide */}
      <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--calix-text)' }}>Equipment Priority Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="font-semibold text-sm mb-2" style={{ color: '#ff0040' }}>🔴 Essential (Start Here)</div>
            <p className="text-xs calix-muted">Pull-up bar is the single most important piece. Get this first. Everything else builds from here.</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-sm mb-2" style={{ color: '#ff6b35' }}>🟠 Recommended (Within First Month)</div>
            <p className="text-xs calix-muted">Gymnastic rings and parallettes massively expand what you can do and dramatically improve quality.</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-sm mb-2" style={{ color: '#ffd700' }}>🟡 Optional (Add When Ready)</div>
            <p className="text-xs calix-muted">Chalk, weighted vest, and dip belt are useful once bodyweight movements become easy.</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-sm mb-2" style={{ color: '#6c63ff' }}>🟣 Advanced (Intermediate+ Level)</div>
            <p className="text-xs calix-muted">Specialized tools for specific advanced skill development when you have the base strength.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
