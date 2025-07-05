import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Games = () => {
  const gameCategories = [
    {
      title: "Online & Virtual Worlds",
      emoji: "💻",
      games: [
        { name: "Fantage", memory: "My go-to world of fashion, fun, and making virtual friends." },
        { name: "Club Penguin", memory: "Loved decorating my igloo and throwing snowball fights!" },
        { name: "Winx Club Games", memory: "Felt magical playing as my favorite fairy characters." },
        { name: "Barbie Games", memory: "Makeovers, fashion shows, and fairy tales – all in one place." }
      ]
    },
    {
      title: "Simulation & Creative Games",
      emoji: "🎨",
      games: [
        { name: "Papa's Pizzeria", memory: "Tried to be the fastest and neatest pizza maker ever!" },
        { name: "Dress-Up Games", memory: "Hours spent styling outfits and imagining runway moments." },
        { name: "The Sims", memory: "Built dream houses and lived virtual lives." }
      ]
    },
    {
      title: "Mobile Games",
      emoji: "📱",
      games: [
        { name: "Clash of Clans", memory: "I built and protected my village like a true war chief!" },
        { name: "Subway Surfers", memory: "Endless runs and chasing high scores on the go." },
        { name: "Temple Run", memory: "Panicking every time I missed a turn — adrenaline rush!" },
        { name: "Hay Day", memory: "Managing my own virtual farm was oddly calming and addictive." }
      ]
    },
    {
      title: "Card Games",
      emoji: "🃏",
      games: [
        { name: "UNO", memory: "Draw 4 cards were friendship enders!" },
        { name: "Go Fish", memory: "My first strategy game experience." },
        { name: "War", memory: "The longest games ever played." }
      ]
    },
    {
      title: "Outdoor Games",
      emoji: "🏃",
      games: [
        { name: "Hide and Seek", memory: "Found the best hiding spots in the neighborhood." },
        { name: "Tag", memory: "Running around until the streetlights came on." },
        { name: "Hopscotch", memory: "Drew chalk squares on every sidewalk." }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-fredoka font-bold gradient-text mb-6">
              Games I Played 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pixels to playgrounds! Here are the games that filled my childhood with joy and imagination.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {gameCategories.map((category, index) => (
              <div key={index} className="magical-card p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{category.emoji}</div>
                  <h3 className="text-2xl font-fredoka font-bold text-disney-purple">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.games.map((game, gameIndex) => (
                    <div key={gameIndex} className="bg-white/60 p-4 border-l-4 border-disney-pink">
                      <h4 className="font-bold text-gray-800 mb-2">{game.name}</h4>
                      <p className="text-sm italic text-gray-600">"{game.memory}"</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gaming Stats */}
          <div className="magical-card p-8">
            <h2 className="text-3xl font-fredoka font-bold text-center gradient-text mb-8">
              My Gaming Stats 📊
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-disney-peach/20 border-2 border-disney-orange/30">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-disney-purple">∞</div>
                <div className="text-sm text-gray-600">Hours Played</div>
              </div>
              <div className="text-center p-4 bg-disney-sky/20 border-2 border-disney-blue/30">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-disney-blue">100%</div>
                <div className="text-sm text-gray-600">Fun Level</div>
              </div>
              <div className="text-center p-4 bg-disney-mint/20 border-2 border-disney-green/30">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-disney-green">∞</div>
                <div className="text-sm text-gray-600">Friends Made</div>
              </div>
              <div className="text-center p-4 bg-disney-lavender/20 border-2 border-disney-purple/30">
                <div className="text-3xl mb-2">💭</div>
                <div className="text-2xl font-bold text-disney-pink">∞</div>
                <div className="text-sm text-gray-600">Memories Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Games;
