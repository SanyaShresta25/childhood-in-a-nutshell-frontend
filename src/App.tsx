import { useState, useEffect } from 'react';
import type { Character } from './types';
import StickerLayer from './components/StickerLayer';
import CharacterCard from './components/CharacterCard';
import FavoritesPanel from './components/FavoritesPanel';
import ThemeToggle from './components/ThemeToggle';
import{ useLocalStorage} from './hooks/useLocalStorage';
import { exportToCSV } from './utils/csvExport';
import SimilarSuggestions from './components/SimilarSuggestions';

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useLocalStorage<Character[]>('favorites', []);
  const [showFavorites, setShowFavorites] = useState(false);

  const API_BASE = 'https://childhood-in-a-nutshell-backend.onrender.com';

  const handleError = (err: any, defaultMsg: string) => {
    setError(err?.message || defaultMsg);
    setTimeout(() => setError(''), 5000);
  };

  const fetchAllCharacters = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/characters`);
      if (!response.ok) throw new Error('Failed to fetch characters');
      const data = await response.json();
      setCharacters(data);
      setShowAll(true);
      setCurrentCharacter(null);
    } catch (err) {
      handleError(err, 'Failed to fetch all characters');
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomCharacter = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/random`);
      if (!response.ok) throw new Error('Failed to fetch random character');
      const data = await response.json();
      setCurrentCharacter(data);
      setShowAll(false);
      setCharacters([]);
    } catch (err) {
      handleError(err, 'Failed to fetch random character');
    } finally {
      setLoading(false);
    }
  };

  const searchHero = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/hero/${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Hero "${searchTerm}" not found`);
        }
        throw new Error('Failed to search hero');
      }
      const data = await response.json();
      setCurrentCharacter(data);
      setShowAll(false);
      setCharacters([]);
    } catch (err) {
      handleError(err, 'Failed to search hero');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (character: Character) => {
    const exists = favorites.find(fav => fav.hero === character.hero);
    const updated = exists ? favorites.filter(fav => fav.hero !== character.hero) : [...favorites, character];
    setFavorites(updated);
  };

  const handleExport = () => {
    exportToCSV(favorites, 'favorites');
  };

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 relative overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-70 h-70 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-20 w-50 h-50 bg-pink-300/20 rounded-full blur-3xl"></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}>
            {i % 4 === 0 ? '🌸' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🦋' : '💫'}
          </div>
        ))}
      </div>

      <StickerLayer />
      <ThemeToggle />
 <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 drop-shadow-lg font-['Press_Start_2P',cursive]">
            ✨ Childhood in a Nutshell ✨
          </h1>
          <p className="text-xl text-pink-500/80 drop-shadow-sm">
            Discover the magical world of Disney characters
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-lg border border-pink-100 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
            <button onClick={fetchAllCharacters} disabled={loading} className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full shadow-md">
              🏰 Show All Characters
            </button>
            <button onClick={fetchRandomCharacter} disabled={loading} className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-md">
              🎲 Get Random Character
            </button>
            <button onClick={() => setShowFavorites(!showFavorites)} className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full shadow-md">
              💖 {showFavorites ? 'Hide' : 'Show'} Favorites
            </button>
            <button onClick={handleExport} disabled={!favorites.length} className="bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full shadow-md">
              📁 Export CSV
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchHero()}
              placeholder="Search for a hero..."
              className="px-4 py-3 rounded-full border border-pink-200 bg-white focus:border-pink-400 w-full md:w-64"
            />
            <button onClick={searchHero} disabled={loading || !searchTerm.trim()} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full">
              🔍 Search Hero
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-pink-500 border-t-transparent"></div>
            <p className="text-pink-600 mt-4">Loading magical memories...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-2xl mb-6 text-center shadow-md max-w-2xl mx-auto">
            {error}
          </div>
        )}

        {showFavorites ? (
          <FavoritesPanel favorites={favorites} toggleFavorite={toggleFavorite} />
        ) : showAll && characters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {characters.map((character, index) => (
              <CharacterCard
                key={index}
                character={character}
                toggleFavorite={toggleFavorite}
                isFav={!!favorites.find(fav => fav.hero === character.hero)}
              />
            ))}
          </div>
        ) : currentCharacter ? (
          <div className="flex justify-center">
            <CharacterCard
              character={currentCharacter}
              isLarge={true}
              toggleFavorite={toggleFavorite}
              isFav={!!favorites.find(fav => fav.hero === currentCharacter.hero)}
            />
          {currentCharacter && (
  <SimilarSuggestions hero={currentCharacter.hero} />
)}

          </div>
        ) : (
          <div className="text-center text-pink-600 bg-white/60 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg mb-4">✨ Welcome to your childhood memories! ✨</p>
            <p>Click a button above to relive the magic of Disney characters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
