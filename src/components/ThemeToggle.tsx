import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 p-2 rounded-full bg-pink-300 hover:bg-pink-400 text-white shadow-lg z-50"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
