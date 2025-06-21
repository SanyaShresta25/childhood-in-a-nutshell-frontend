// src/components/StickerLayer.tsx
export default function StickerLayer() {
  const stickers = [
    { name: 'sofia', class: 'top-12 left-4 md:left-12 w-32 h-32 md:w-40 md:h-40 rotate-[-4deg]', delay: '0s' },
    { name: 'olaf', class: 'top-24 right-4 md:right-12 w-28 h-28 md:w-36 md:h-36 rotate-[6deg]', delay: '1s' },
    { name: 'robin', class: 'bottom-28 left-4 md:left-16 w-28 h-28 md:w-36 md:h-36 rotate-[-8deg]', delay: '2s' },
    { name: 'stitch', class: 'bottom-36 right-6 md:right-24 w-32 h-32 md:w-40 md:h-40 rotate-[5deg]', delay: '0.5s' },
    { name: 'jasmine', class: 'top-52 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 rotate-[-6deg]', delay: '1.5s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stickers.map((s, i) => (
        <img
          key={i}
          src={`/${s.name}.png`}
          alt={s.name}
          className={`absolute ${s.class} border-4 border-white rounded-2xl shadow-2xl animate-bounce opacity-90`}
         style={{
  animationDelay: s.delay,
  animationDuration: '3s',
  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))',
}}

        />
      ))}
    </div>
  );
}
