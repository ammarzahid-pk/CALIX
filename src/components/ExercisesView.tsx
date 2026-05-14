import React, { useState, useMemo } from 'react';
import { exercises, searchExercises, Difficulty, Category, Equipment } from '../data/exercises';
import { ExerciseCard } from './ExerciseCard';

const getFavorites = (): string[] => {
  try {
    const stored = localStorage.getItem('calix-favorites');
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
};

const saveFavorites = (favs: string[]) => {
  try { localStorage.setItem('calix-favorites', JSON.stringify(favs)); } catch {}
};

const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'elite'];
const categories: Category[] = ['push', 'pull', 'core', 'legs', 'full-body', 'mobility', 'static', 'isometric', 'plyometric'];
const equipmentTypes: Equipment[] = ['none', 'bar', 'rings', 'parallettes', 'dip-bars', 'band', 'weighted'];

const diffColors: Record<string, string> = {
  beginner: '#00ff88',
  intermediate: '#ffd700',
  advanced: '#ff6b35',
  elite: '#ff0040',
};

export const ExercisesView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | 'all'>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(getFavorites());
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'difficulty'>('default');

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    saveFavorites(updated);
  };

  const filtered = useMemo(() => {
    let result = search.trim() ? searchExercises(search) : [...exercises];

    if (selectedDifficulty !== 'all') {
      result = result.filter(e => e.difficulty === selectedDifficulty);
    }
    if (selectedCategory !== 'all') {
      result = result.filter(e => e.category.includes(selectedCategory));
    }
    if (selectedEquipment !== 'all') {
      result = result.filter(e => e.equipment.includes(selectedEquipment));
    }
    if (showFavoritesOnly) {
      result = result.filter(e => favorites.includes(e.id));
    }

    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'difficulty') {
      const order = { beginner: 0, intermediate: 1, advanced: 2, elite: 3 };
      result = [...result].sort((a, b) => order[a.difficulty] - order[b.difficulty]);
    }

    return result;
  }, [search, selectedDifficulty, selectedCategory, selectedEquipment, showFavoritesOnly, favorites, sortBy]);

  const countByDiff = useMemo(() => {
    const counts: Record<string, number> = {};
    difficulties.forEach(d => { counts[d] = exercises.filter(e => e.difficulty === d).length; });
    return counts;
  }, []);

  const resetFilters = () => {
    setSearch('');
    setSelectedDifficulty('all');
    setSelectedCategory('all');
    setSelectedEquipment('all');
    setShowFavoritesOnly(false);
    setSortBy('default');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-black" style={{ color: 'var(--calix-text)' }}>
          Exercise Database
        </h1>
        <p className="mt-1 calix-muted">
          {exercises.length} exercises with complete execution guides, science notes, and progression trees
        </p>
      </div>

      {/* Difficulty Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {difficulties.map(d => (
          <button
            key={d}
            onClick={() => setSelectedDifficulty(selectedDifficulty === d ? 'all' : d)}
            className="p-4 rounded-2xl text-left transition-all card-hover"
            style={{
              backgroundColor: selectedDifficulty === d ? diffColors[d] + '20' : 'var(--calix-surface)',
              border: `1px solid ${selectedDifficulty === d ? diffColors[d] : 'var(--calix-border)'}`,
            }}
          >
            <div className="text-2xl font-black" style={{ color: diffColors[d] }}>{countByDiff[d]}</div>
            <div className="text-sm font-semibold mt-1 capitalize" style={{ color: 'var(--calix-text)' }}>{d}</div>
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="p-5 rounded-2xl space-y-4" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
        {/* Search bar */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg calix-muted">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search exercises, muscle groups, tags..."
            className="w-full pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
            style={{
              backgroundColor: 'var(--calix-surface2)',
              border: '1px solid var(--calix-border)',
              color: 'var(--calix-text)'
            }}
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 calix-muted hover:opacity-70">✕</button>
          )}
        </div>

        {/* Filter rows */}
        <div className="space-y-3">
          {/* Difficulty filter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Difficulty</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: selectedDifficulty === 'all' ? 'var(--calix-accent)' : 'var(--calix-surface2)',
                  color: selectedDifficulty === 'all' ? 'white' : 'var(--calix-muted)'
                }}
              >
                All
              </button>
              {difficulties.map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === d ? 'all' : d)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all"
                  style={{
                    backgroundColor: selectedDifficulty === d ? diffColors[d] + '30' : 'var(--calix-surface2)',
                    color: selectedDifficulty === d ? diffColors[d] : 'var(--calix-muted)',
                    border: `1px solid ${selectedDifficulty === d ? diffColors[d] : 'transparent'}`
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Category</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: selectedCategory === 'all' ? 'var(--calix-accent)' : 'var(--calix-surface2)',
                  color: selectedCategory === 'all' ? 'white' : 'var(--calix-muted)'
                }}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? 'all' : cat)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all"
                  style={{
                    backgroundColor: selectedCategory === cat ? 'var(--calix-accent)' : 'var(--calix-surface2)',
                    color: selectedCategory === cat ? 'white' : 'var(--calix-muted)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment filter */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2 calix-muted">Equipment</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEquipment('all')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: selectedEquipment === 'all' ? 'var(--calix-accent)' : 'var(--calix-surface2)',
                  color: selectedEquipment === 'all' ? 'white' : 'var(--calix-muted)'
                }}
              >
                All
              </button>
              {equipmentTypes.map(eq => (
                <button
                  key={eq}
                  onClick={() => setSelectedEquipment(selectedEquipment === eq ? 'all' : eq)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize"
                  style={{
                    backgroundColor: selectedEquipment === eq ? 'var(--calix-accent)' : 'var(--calix-surface2)',
                    color: selectedEquipment === eq ? 'white' : 'var(--calix-muted)'
                  }}
                >
                  {eq === 'none' ? 'No Equipment' : eq === 'dip-bars' ? 'Dip Bars' : eq}
                </button>
              ))}
            </div>
          </div>

          {/* Sort & other options */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: showFavoritesOnly ? 'rgba(255,215,0,0.2)' : 'var(--calix-surface2)',
                  color: showFavoritesOnly ? 'var(--calix-gold)' : 'var(--calix-muted)',
                  border: showFavoritesOnly ? '1px solid var(--calix-gold)' : '1px solid transparent'
                }}
              >
                ⭐ Favorites Only
              </button>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium focus:outline-none"
                style={{
                  backgroundColor: 'var(--calix-surface2)',
                  color: 'var(--calix-text)',
                  border: '1px solid var(--calix-border)'
                }}
              >
                <option value="default">Sort: Default</option>
                <option value="name">Sort: Name A-Z</option>
                <option value="difficulty">Sort: Difficulty</option>
              </select>
            </div>

            <button
              onClick={resetFilters}
              className="text-xs calix-muted hover:opacity-70 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center justify-between">
        <p className="text-sm calix-muted">
          Showing <span className="font-bold" style={{ color: 'var(--calix-accent)' }}>{filtered.length}</span> exercises
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 rounded-2xl" style={{ backgroundColor: 'var(--calix-surface)', border: '1px solid var(--calix-border)' }}>
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--calix-text)' }}>No Exercises Found</h3>
          <p className="calix-muted text-sm mb-4">Try adjusting your search or filters</p>
          <button onClick={resetFilters} className="px-4 py-2 rounded-xl text-sm font-medium text-white gradient-accent">
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(exercise => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onFavorite={toggleFavorite}
              isFavorited={favorites.includes(exercise.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
