
import type { Character } from '../types';

interface Props {
  character: Character;
  isLarge?: boolean;
  isFav?: boolean;
  toggleFavorite?: (character: Character) => void;
}

export default function CharacterCard({
  character,
  isFav = false,
  toggleFavorite,
}: Props) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-lg border-4 ${
        isFav ? 'border-pink-400' : 'border-transparent'
      }`}
    >
      <h2 className="text-2xl font-bold mb-2 text-pink-600">{character.hero}</h2>
      <p className="text-sm"><strong>Movie:</strong> {character.movie}</p>
      <p className="text-sm"><strong>Release Date:</strong> {character.release_date}</p>
      <p className="text-sm"><strong>Villain:</strong> {character.villian}</p>

      {toggleFavorite && (
        <button
          onClick={() => toggleFavorite(character)}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          {isFav ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
        </button>
      )}
    </div>
  );
}
