import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Character } from "@/types";
import { exportToCSV } from "@/utils/csvExport";
import { useState } from "react";


const API_BASE = 'https://childhood-in-a-nutshell-backend.onrender.com/';

const FeaturesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);

  const handleError = (msg: string) => {
    alert(msg);
  };

  const fetchRandomCharacter = async () => {
    try {
      const res = await fetch(`${API_BASE}/random`);
      if (!res.ok) throw new Error("Failed to fetch random character");
      const data = await res.json();
      setCurrentCharacter(data);
    } catch (err) {
      handleError("Random character fetch failed.");
    }
  };

  const fetchAllCharacters = async () => {
    try {
      const res = await fetch(`${API_BASE}/characters`);
      if (!res.ok) throw new Error("Failed to fetch characters");
      const data = await res.json();
      alert(`Fetched ${data.length} characters!`);
    } catch (err) {
      handleError("Failed to fetch all characters.");
    }
  };

  const searchHero = async () => {
    if (!searchTerm.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/hero/${encodeURIComponent(searchTerm)}`);
      if (!res.ok) throw new Error("Hero not found");
      const data = await res.json();
      setCurrentCharacter(data);
    } catch (err) {
      handleError("Search failed.");
    }
  };

  const toggleFavorite = () => {
    if (!currentCharacter) return;
    const exists = favorites.find(fav => fav.hero === currentCharacter.hero);
    const updated = exists
      ? favorites.filter(fav => fav.hero !== currentCharacter.hero)
      : [...favorites, currentCharacter];
    setFavorites(updated);
  };

  const handleExport = () => {
    if (!favorites.length) return;
    exportToCSV(favorites, "favorites");
  };

  const features = [
    {
      icon: "🎭",
      title: "Show All Characters",
      description: "Browse through our complete collection of beloved Disney characters",
      color: "from-disney-pink to-disney-purple",
      action: "Browse Collection",
      onClick: fetchAllCharacters,
    },
    {
      icon: "🎲",
      title: "Get Random Character",
      description: "Discover characters by chance and rediscover forgotten favorites",
      color: "from-disney-purple to-disney-blue",
      action: "Get Surprise",
      onClick: fetchRandomCharacter,
    },
    {
      icon: "❤️",
      title: "Show Favorites",
      description: "Keep track of your most beloved Disney characters in one place",
      color: "from-disney-blue to-disney-green",
      action: "View Favorites",
      onClick: () => alert(favorites.map(f => f.hero).join(", ") || "No favorites yet."),
    },
    {
      icon: "📊",
      title: "Export CSV",
      description: "Download your character data for safekeeping or sharing",
      color: "from-disney-green to-disney-yellow",
      action: "Export Data",
      onClick: handleExport,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-disney-mint/20 to-disney-lavender/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-fredoka font-bold gradient-text mb-6">Magical Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore Disney magic with our enchanting tools and features ✨
          </p>
        </div>

        {/* Search Section */}
        <div className="magical-card p-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-fredoka font-bold text-disney-purple mb-2">🔍 Search for a Hero</h3>
            <p className="text-gray-600">Find your favorite Disney character instantly</p>
          </div>

          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search for a hero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded-full border-2 border-disney-pink/30 focus:border-disney-pink text-lg py-3 px-6"
            />
            <Button
              onClick={searchHero}
              className="bg-gradient-to-r from-disney-blue to-disney-purple text-white font-fredoka font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              🔍 Search Hero
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="magical-card p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <div className="absolute -top-2 -right-2 text-xl animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity">
                  ✨
                </div>
              </div>

              <h3 className="text-xl font-fredoka font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{feature.description}</p>

              <Button
                onClick={feature.onClick}
                className={`w-full bg-gradient-to-r ${feature.color} text-white font-fredoka font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                {feature.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Character Preview */}
        {currentCharacter && (
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="magical-card p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gradient-to-br from-disney-lavender to-disney-mint rounded-2xl p-8 text-center">
                    <div className="text-8xl mb-4">🧜‍♀️</div>
                    <h3 className="text-2xl font-fredoka font-bold text-disney-purple">
                      {currentCharacter.hero}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-fredoka font-bold gradient-text">Similar Characters</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover characters with similar traits, stories, or magical qualities.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(currentCharacter?.tags || ["Adventure", "Magic"]).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-disney-pink/20 to-disney-purple/20 text-disney-purple font-medium rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={toggleFavorite}
                    className="bg-gradient-to-r from-disney-pink to-disney-purple text-white font-fredoka font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 mt-6"
                  >
                    💖 {favorites.find(f => f.hero === currentCharacter.hero) ? "Remove Favorite" : "Add to Favorites"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
