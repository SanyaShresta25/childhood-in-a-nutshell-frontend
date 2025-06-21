export async function fetchSimilarCharacters(hero: string) {
  const res = await fetch(`http://localhost:5000/similar/${encodeURIComponent(hero)}`);
  if (!res.ok) throw new Error("ML model failed");
  return res.json(); // should return Character[]
}
