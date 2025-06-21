import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import type { Character } from '../types';

export default function StickerBoard() {
  const [stickers, setStickers] = useState<Character[]>([]);

  useEffect(() => {
    const favs = localStorage.getItem('favorites');
    if (favs) setStickers(JSON.parse(favs));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 p-8">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">📒 Your Sticker Book</h2>
      <div className="relative w-full h-[80vh] border-4 border-dashed border-pink-300 rounded-3xl overflow-hidden bg-white">
        {stickers.map((char, index) => (
          <Draggable key={index}>
            <div className="absolute cursor-move w-32 h-32">
              <img
                src={`/${char.hero.toLowerCase()}.png`}
                alt={char.hero}
                className="w-full h-full object-contain border-4 border-white rounded-xl shadow-md"
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}
