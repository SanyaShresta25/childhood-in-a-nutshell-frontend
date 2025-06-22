import type { Character } from "../types";

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
      className={`bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl p-6 border-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ${
        isFav ? "border-pink-400" : "border-transparent"
      }`}
    >
      {/* Character Header */}
      <h2 className="text-2xl font-fredoka font-bold text-disney-purple mb-1">
        {character.hero}
      </h2>
      <p className="text-sm text-gray-600 italic mb-4">
        🎬 {character.movie_title} ({character.release_date})
      </p>

      {/* Movie Summary */}
      <p className="text-sm text-gray-700 mb-3">{character.movie}</p>

      {/* Hero & Villain */}
      <div className="grid grid-cols-2 text-sm mb-4">
        <div>
          <span className="font-semibold text-disney-blue">Hero:</span>
          <p className="text-gray-700">{character.hero}</p>
        </div>
        <div>
          <span className="font-semibold text-disney-pink">Villain:</span>
          <p className="text-gray-700">{character.villian}</p>
        </div>
      </div>

      {/* Song */}
      {character.song && (
        <p className="text-sm text-disney-green italic mb-4">
          🎶 {character.song}
        </p>
      )}

      {/* Tags */}
      {character.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {character.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-disney-purple/10 text-disney-purple font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Favorite Button */}
      {toggleFavorite && (
        <button
          onClick={() => toggleFavorite(character)}
          className={`w-full mt-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
            isFav
              ? "bg-pink-100 text-pink-600 hover:bg-pink-200"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          {isFav ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
        </button>
      )}
    </div>
  );
}
