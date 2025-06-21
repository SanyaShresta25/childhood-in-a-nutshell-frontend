export async function fetchSimilarCharacters(hero: string) {
  const res = await fetch(`https://childhood-in-a-nutshell-backend.onrender.com/similar/${encodeURIComponent(hero)}`);
  if (!res.ok) throw new Error("ML model failed");
  return res.json(); // should return Character[]
}
