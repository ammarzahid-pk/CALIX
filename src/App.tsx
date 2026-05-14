import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { RoadmapView } from './components/RoadmapView';
import { ExercisesView } from './components/ExercisesView';
import { SkillTreeView } from './components/SkillTreeView';
import { ProgramsView } from './components/ProgramsView';
import { MobilityView } from './components/MobilityView';
import { PrehabView } from './components/PrehabView';
import { EquipmentView } from './components/EquipmentView';
import { ScienceView } from './components/ScienceView';

type Tab = 'dashboard' | 'roadmap' | 'exercises' | 'skills' | 'programs' | 'mobility' | 'prehab' | 'equipment' | 'science';

const getDarkMode = (): boolean => {
  try {
    const stored = localStorage.getItem('calix-dark-mode');
    if (stored !== null) return stored === 'true';
  } catch {}
  return true; // default dark
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [darkMode, setDarkMode] = useState<boolean>(getDarkMode());

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !darkMode);
    try { localStorage.setItem('calix-dark-mode', String(darkMode)); } catch {}
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={tab => setActiveTab(tab as Tab)} />;
      case 'roadmap':
        return <RoadmapView />;
      case 'exercises':
        return <ExercisesView />;
      case 'skills':
        return <SkillTreeView />;
      case 'programs':
        return <ProgramsView />;
      case 'mobility':
        return <MobilityView />;
      case 'prehab':
        return <PrehabView />;
      case 'equipment':
        return <EquipmentView />;
      case 'science':
        return <ScienceView />;
      default:
        return <Dashboard setActiveTab={tab => setActiveTab(tab as Tab)} />;
    }
  };

  return (
    <div className="min-h-screen calix-bg" style={{ backgroundColor: 'var(--calix-bg)' }}>
      <Header
        activeTab={activeTab}
        setActiveTab={tab => setActiveTab(tab as Tab)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="pb-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center"
        style={{ borderTop: '1px solid var(--calix-border)', backgroundColor: 'var(--calix-surface)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-black tracking-wider text-gradient-accent mb-1">CALIX</div>
          <div className="text-xs calix-muted">
            Developed & Owned by Ammar Zahid | All Rights Reserved - 2026
          </div>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs calix-muted">
            <span>💪 60+ Exercises</span>
            <span>·</span>
            <span>🗺️ Complete Roadmap</span>
            <span>·</span>
            <span>📋 Training Programs</span>
            <span>·</span>
            <span>🛡️ Injury Prevention</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
