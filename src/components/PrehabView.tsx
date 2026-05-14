import React, { useState } from 'react';
import { injuryProtocols, warmupProtocol, cooldownProtocol } from '../data/prehab';

const severityConfig = {
  common: { label: 'Common', color: '#ffd700', bg: 'rgba(255,215,0,0.1)' },
  serious: { label: 'Serious', color: '#ff6b35', bg: 'rgba(255,107,53,0.1)' },
  critical: { label: 'Critical', color: '#ff0040', bg: 'rgba(255,0,64,0.1)' },
};

export const PrehabView: React.FC = () => {
  const [selectedProtocol, setSelectedProtocol] = useState(injuryProtocols[0].id);
  const [activeSection, setActiveSection] = useState<'prevention' | 'rehab' | 'exercises'>('prevention');
  const [showWarmup, setShowWarmup] = useState(false);
  const [showCooldown, setShowCooldown] = useState(false);

  const protocol = injuryProtocols.find(p => p.id === selectedProtocol) || injuryProtocols[0];
  const sev = severityConfig[protocol.severity];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>Injury Prevention & Prehab</h1>
        <p className="mt-1 calix-muted">Prevention protocols, rehabilitation guidance, and complete warmup/cooldown systems</p>
      </div>

      <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255,0,64,0.07)', border: '1px solid rgba(255,0,64,0.3)' }}>
        <div className="flex items-start gap-3">
          <span className="text-xl">⚕️</span>
          <div>
            <div className="font-bold text-sm mb-1" style={{ color: '#ff0040' }}>Medical Disclaimer</div>
            <p className="text-xs leading-relaxed calix-muted">
              This information is for educational purposes only. It does not replace professional medical advice.
              For any persistent pain or suspected injury, consult a qualified physiotherapist or sports medicine physician.
            </p>
          </div>
        </div>
      </div>

      {/* Protocol Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {injuryProtocols.map(p => {
          const s = severityConfig[p.severity];
          return (
            <button
              key={p.id}
              onClick={() => { setSelectedProtocol(p.id); setActiveSection('prevention'); }}
              className="p-3 rounded-xl text-center transition-all card-hover"
              style={{
                backgroundColor: selectedProtocol === p.id ? s.bg : 'var(--calix-surface)',
                border: `1px solid ${selectedProtocol === p.id ? s.color : 'var(--calix-border)'}`,
              }}
            >
              <div className="text-2xl mb-1">{p.icon}</div>
              <div className="text-xs font-bold" style={{ color: 'var(--calix-text)' }}>{p.area}</div>
              <div className="text-xs mt-1 font-medium" style={{ color: s.color }}>{s.label}</div>
            </button>
          );
        })}
      </div>

      {/* Protocol Detail */}
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <div className="p-6" style={{ backgroundColor: sev.bg, borderBottom: '1px solid var(--calix-border)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{protocol.icon}</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: sev.color }}>{sev.label} Injury Risk</div>
              <h2 className="text-xl font-black" style={{ color: 'var(--calix-text)' }}>{protocol.title}</h2>
            </div>
          </div>
        </div>

        {/* Early Warning */}
        <div className="p-6" style={{ borderBottom: '1px solid var(--calix-border)' }}>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#ffd700' }}>Early Warning Signs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {protocol.earlyWarning.map((w, i) => (
              <div key={i} className="flex gap-2 p-2.5 rounded-lg text-xs"
                style={{ backgroundColor: 'rgba(255,215,0,0.07)', color: 'var(--calix-text)' }}>
                <span style={{ color: '#ffd700' }}>⚠️</span><span>{w}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Nav */}
        <div className="flex gap-1 p-3" style={{ backgroundColor: 'var(--calix-surface2)', borderBottom: '1px solid var(--calix-border)' }}>
          {(['prevention', 'rehab', 'exercises'] as const).map(sec => (
            <button key={sec} onClick={() => setActiveSection(sec)}
              className="px-4 py-2 rounded-lg text-xs font-medium capitalize transition-all"
              style={{ backgroundColor: activeSection === sec ? 'var(--calix-accent)' : 'transparent', color: activeSection === sec ? 'white' : 'var(--calix-muted)' }}>
              {sec === 'rehab' ? 'Rehabilitation' : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeSection === 'prevention' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#00ff88' }}>Prevention Protocol</h3>
                <div className="space-y-2">
                  {protocol.prevention.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(0,255,136,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,255,136,0.15)' }}>
                      <span style={{ color: '#00ff88' }}>✓</span><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#ff6b35' }}>Common Causes</h3>
                <div className="space-y-2">
                  {protocol.commonCauses.map((c, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(255,107,53,0.07)', color: 'var(--calix-text)' }}>
                      <span style={{ color: '#ff6b35' }}>→</span><span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#ff0040' }}>When to Regress</h3>
                <div className="space-y-2">
                  {protocol.when_to_regress.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(255,0,64,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(255,0,64,0.15)' }}>
                      <span>🛑</span><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'rehab' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#ff6b35' }}>Rehabilitation Approach</h3>
                <div className="space-y-2">
                  {protocol.rehabilitation.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(255,107,53,0.07)', color: 'var(--calix-text)' }}>
                      <span className="flex-shrink-0 font-bold" style={{ color: '#ff6b35' }}>{i + 1}.</span><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: '#00ff88' }}>Return to Training Criteria</h3>
                <div className="space-y-2">
                  {protocol.return_to_training.map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-xl text-sm"
                      style={{ backgroundColor: 'rgba(0,255,136,0.07)', color: 'var(--calix-text)', border: '1px solid rgba(0,255,136,0.15)' }}>
                      <span style={{ color: '#00ff88' }}>✓</span><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'exercises' && (
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--calix-accent)' }}>Prehab & Rehab Exercises</h3>
              <div className="space-y-3">
                {protocol.exercises.map((ex, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)', border: '1px solid var(--calix-border)' }}>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--calix-text)' }}>{ex.name}</div>
                    <div className="text-xs mb-2" style={{ color: 'var(--calix-accent)' }}>{ex.sets}</div>
                    <p className="text-xs calix-muted">{ex.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warmup */}
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <button className="w-full p-5 flex items-center justify-between text-left" onClick={() => setShowWarmup(!showWarmup)}>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: 'var(--calix-text)' }}>
              <span>🔥</span> {warmupProtocol.title}
            </h3>
            <p className="text-sm mt-0.5 calix-muted">Duration: {warmupProtocol.duration}</p>
          </div>
          <span className="calix-muted">{showWarmup ? '▲' : '▼'}</span>
        </button>
        {showWarmup && (
          <div className="p-5 space-y-4" style={{ borderTop: '1px solid var(--calix-border)' }}>
            {warmupProtocol.phases.map((phase, i) => (
              <div key={i}>
                <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--calix-accent)' }}>{phase.name}</h4>
                <div className="space-y-1.5">
                  {phase.exercises.map((ex, j) => (
                    <div key={j} className="flex gap-2 text-sm p-2.5 rounded-lg"
                      style={{ backgroundColor: 'var(--calix-surface2)', color: 'var(--calix-text)' }}>
                      <span style={{ color: 'var(--calix-accent)' }}>→</span><span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cooldown */}
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        <button className="w-full p-5 flex items-center justify-between text-left" onClick={() => setShowCooldown(!showCooldown)}>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2" style={{ color: 'var(--calix-text)' }}>
              <span>🧊</span> {cooldownProtocol.title}
            </h3>
            <p className="text-sm mt-0.5 calix-muted">Duration: {cooldownProtocol.duration}</p>
          </div>
          <span className="calix-muted">{showCooldown ? '▲' : '▼'}</span>
        </button>
        {showCooldown && (
          <div className="p-5" style={{ borderTop: '1px solid var(--calix-border)' }}>
            <div className="space-y-2">
              {cooldownProtocol.exercises.map((ex, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: 'var(--calix-surface2)' }}>
                  <div className="font-medium text-sm flex-1" style={{ color: 'var(--calix-text)' }}>{ex.name}</div>
                  <div className="text-xs flex-shrink-0" style={{ color: 'var(--calix-accent)' }}>{ex.duration}</div>
                  <div className="text-xs w-40 calix-muted hidden md:block">{ex.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
