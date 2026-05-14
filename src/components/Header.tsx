import React, { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: '⚡' },
  { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
  { id: 'exercises', label: 'Exercises', icon: '💪' },
  { id: 'skills', label: 'Skill Trees', icon: '🌳' },
  { id: 'programs', label: 'Programs', icon: '📋' },
  { id: 'mobility', label: 'Mobility', icon: '🧘' },
  { id: 'prehab', label: 'Prehab', icon: '🛡️' },
  { id: 'equipment', label: 'Equipment', icon: '🏋️' },
  { id: 'science', label: 'Science', icon: '🔬' },
];

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'var(--calix-surface)', borderBottom: '1px solid var(--calix-border)' }}
      className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-accent">
            <span className="text-white font-black text-lg">C</span>
          </div> */}
          <img
            src="/icon-192.png"
            alt="Calix Logo"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <div className="font-black text-xl tracking-wider text-gradient-accent">CALIX</div>
            <div className="text-xs opacity-50 tracking-widest uppercase leading-none" style={{ color: 'var(--calix-text)' }}>
              MASTER YOUR MOVEMENT
            </div>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: 'var(--calix-surface2)', border: '1px solid var(--calix-border)' }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="text-base">{darkMode ? '☀️' : '🌙'}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-lg transition-all"
            style={{ backgroundColor: 'var(--calix-surface2)', border: '1px solid var(--calix-border)', color: 'var(--calix-text)' }}
          >
            <span className="text-sm">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1 px-4 pb-3 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab.id ? 'tab-active' : ''
              }`}
            style={activeTab !== tab.id ? {
              color: 'var(--calix-muted)',
              backgroundColor: 'transparent'
            } : {}}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden grid grid-cols-3 gap-2 p-4"
          style={{ borderTop: '1px solid var(--calix-border)' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
              className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl text-xs font-medium transition-all ${activeTab === tab.id ? 'tab-active' : ''
                }`}
              style={activeTab !== tab.id ? {
                color: 'var(--calix-muted)',
                backgroundColor: 'var(--calix-surface2)',
              } : {}}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
