
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Games = () => {
  const gameCategories = [
    {
      title: "Video Games",
      emoji: "🎮",
      games: [
        { name: "Super Mario Bros", memory: "Spent hours trying to beat Bowser!" },
        { name: "Pokemon Red/Blue", memory: "Gotta catch 'em all was my life motto" },
        { name: "The Sims", memory: "Built dream houses and lived virtual lives" },
        { name: "Pac-Man", memory: "Simple but addictive arcade fun" }
      ]
    },
    {
      title: "Board Games",
      emoji: "🎲",
      games: [
        { name: "Monopoly", memory: "Family game nights that lasted forever" },
        { name: "Scrabble", memory: "Mom always won with her fancy words" },
        { name: "Clue", memory: "I was a detective solving mysteries" },
        { name: "Sorry!", memory: "The ultimate friendship tester game" }
      ]
    },
    {
      title: "Outdoor Games",
      emoji: "🏃",
      games: [
        { name: "Hide and Seek", memory: "Found the best hiding spots in the neighborhood" },
        { name: "Tag", memory: "Running around until the streetlights came on" },
        { name: "Hopscotch", memory: "Drew chalk squares on every sidewalk" },
        { name: "Jump Rope", memory: "Learning all the rhymes and tricks" }
      ]
    },
    {
      title: "Card Games",
      emoji: "🃏",
      games: [
        { name: "Go Fish", memory: "My first strategy game experience" },
        { name: "Uno", memory: "Draw 4 cards were friendship enders" },
        { name: "Crazy Eights", memory: "Simple but so much fun" },
        { name: "War", memory: "The longest games ever played" }
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
              Games I Played 🎮
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pixels to playgrounds! Here are the games that filled my childhood with joy and competition.
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
