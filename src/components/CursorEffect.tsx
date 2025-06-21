import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'pointer-events-none fixed z-50 w-6 h-6 rounded-full bg-pink-300 opacity-60 blur-sm';
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
