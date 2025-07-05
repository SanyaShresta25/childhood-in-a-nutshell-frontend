import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Music = () => {
  const favoriteSongs = [
    {
      title: "Disney & Barbie Magic",
      emoji: "🏰",
      songs: ["Circle of Life", "Let It Go", "Two Voices One Song", "Can You Keep A Secret", "Connected"],
      memory: "I used to belt out Barbie songs in front of the mirror like I was in a concert!"
    },
    {
      title: "Pop Princess Era",
      emoji: "👑",
      songs: ["Tik Tok - Kesha", "Firework - Katy Perry", "You Belong With Me - Taylor Swift", "Love You Like A Love Song - Selena Gomez"],
      memory: "These songs were on loop on my MP3 player — I knew every lyric by heart!"
    },
    {
      title: "Boy Bands & Girl Power",
      emoji: "🎤",
      songs: ["What Makes You Beautiful - One Direction", "Story of My Life - One Direction", "Worth It - Fifth Harmony", "BO$$ - Fifth Harmony"],
      memory: "Had full-blown dance routines with my friends for these songs!"
    },
    {
      title: "Teen Pop Icons",
      emoji: "🌟",
      songs: ["Skyscraper - Demi Lovato", "Stitches - Shawn Mendes", "Confident - Demi Lovato", "Treat You Better - Shawn Mendes"],
      memory: "These songs helped me through every mood — from hype to heartbreak."
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
              The soundtrack of my childhood and teen years! These songs still bring back unforgettable memories.
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
                <h4 className="font-bold text-disney-purple">first samsung phone</h4>
                <p className="text-sm text-gray-600">downloading through illegal sites just to listen to my favourite artists</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💿</div>
                <h4 className="font-bold text-disney-pink">my first samsung tablet</h4>
                <p className="text-sm text-gray-600">curated an amazing playlist which i would listen and feel like the main character</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎧</div>
                <h4 className="font-bold text-disney-blue">Headphone Hours</h4>
                <p className="text-sm text-gray-600">Curated playlists for every mood.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎤</div>
                <h4 className="font-bold text-disney-green">Hairbrush Concerts</h4>
                <p className="text-sm text-gray-600">Every bedroom was my stage!</p>
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
