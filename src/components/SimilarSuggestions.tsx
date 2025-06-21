import { useEffect, useState } from 'react';
import { fetchSimilarCharacters } from '../utils/mlModelClient';
import type { Character } from '../types';

export default function SimilarSuggestions({ hero }: { hero: string }) {
  const [related, setRelated] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hero) return;
    setLoading(true);
    fetchSimilarCharacters(hero)
      .then(setRelated)
      .finally(() => setLoading(false));
  }, [hero]);

  if (!hero) return null;

  return (
    <div className="mt-8 bg-white/80 p-4 rounded-xl border border-purple-200 shadow">
      <h3 className="text-lg font-bold text-purple-600 mb-2">🧠 Similar Characters</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-1 text-purple-800 list-disc list-inside">
          {related.map((c, i) => (
            <li key={i}>{c.hero} — {c.movie_title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
