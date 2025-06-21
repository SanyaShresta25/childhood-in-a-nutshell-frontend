
import type { Character } from '../types';
import CharacterCard from './CharacterCard';

interface Props {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
}

export default function FavoritesPanel({ favorites, toggleFavorite }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {favorites.map((character, index) => (
        <CharacterCard
          key={index}
          character={character}
          isFav={true}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
