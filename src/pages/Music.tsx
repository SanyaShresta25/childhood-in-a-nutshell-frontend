
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Music = () => {
  const favoriteSongs = [
    {
      title: "Disney Classics",
      emoji: "🏰",
      songs: ["Circle of Life", "Under the Sea", "A Whole New World"],
      memory: "I knew every word and sang along during car rides!"
    },
    {
      title: "Pop Hits",
      emoji: "🎤",
      songs: ["Baby One More Time", "Everybody", "I Want It That Way"],
      memory: "My first CD collection - played them until they scratched!"
    },
    {
      title: "Cartoon Themes",
      emoji: "📺",
      songs: ["Pokemon Theme", "DuckTales", "Teenage Mutant Ninja Turtles"],
      memory: "I could identify any show just by its opening song."
    },
    {
      title: "Dance Party",
      emoji: "💃",
      songs: ["Macarena", "Cha Cha Slide", "Electric Boogie"],
      memory: "Family dance parties in the living room every weekend!"
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
              Music I Loved 🎵
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The soundtrack of my childhood! These tunes shaped my taste and created countless memories.
            </p>
          </div>

          {/* Music Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {favoriteSongs.map((category, index) => (
              <div key={index} className="magical-card p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{category.emoji}</div>
                  <h3 className="text-2xl font-fredoka font-bold text-disney-purple">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.songs.map((song, songIndex) => (
                    <div key={songIndex} className="bg-white/60 p-3 border-l-4 border-disney-pink">
                      <span className="font-medium text-gray-700">🎶 {song}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-disney-mint/20 p-4 border-2 border-disney-green/30">
                  <p className="text-sm italic text-gray-600">
                    💭 "{category.memory}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Music Player Memory */}
          <div className="magical-card p-8 text-center">
            <h2 className="text-3xl font-fredoka font-bold gradient-text mb-6">
              My Music Journey 📻
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📻</div>
                <h4 className="font-bold text-disney-purple">Radio Days</h4>
                <p className="text-sm text-gray-600">Waiting for my favorite song to play</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💿</div>
                <h4 className="font-bold text-disney-pink">CD Collection</h4>
                <p className="text-sm text-gray-600">My precious stack of albums</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎧</div>
                <h4 className="font-bold text-disney-blue">Headphone Hours</h4>
                <p className="text-sm text-gray-600">Lost in my own musical world</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎤</div>
                <h4 className="font-bold text-disney-green">Karaoke King/Queen</h4>
                <p className="text-sm text-gray-600">Singing into my hairbrush</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Music;
