import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const School = () => {
  const schoolYears = [
    {
      grade: "Kindergarten",
      emoji: "🖍️",
      highlights: [
        "Started school with Sumithra Ma'am",
        "Struggled with coloring but tried my best",
        "Loved singing rhymes out loud"
      ],
      teacher: "Sumithra Ma'am",
      favoriteSubject: "Story Time",
      memory: "I wasn't great at art, but I still remember how kind Sumithra Ma'am was—she made school feel like home."
    },
    {
      grade: "1st Grade",
      emoji: "📘",
      highlights: [
        "Started public speaking with poem recitals",
        "Excelled in reading and spelling",
        "First prize in English elocution"
      ],
      teacher: "Sadia Ma'am",
      favoriteSubject: "English",
      memory: "I proudly stood on stage and recited my poem—it felt like magic hearing the applause."
    },
    {
      grade: "2nd Grade",
      emoji: "🎤",
      highlights: [
        "Participated in Hindi light music competitions",
        "Won inter-class debates",
        "Always topped in class tests"
      ],
      teacher: "Sadia Ma'am",
      favoriteSubject: "Hindi & Music",
      memory: "I sang a Hindi light song in front of a full hall—I was nervous but proud!"
    },
    {
      grade: "3rd Grade",
      emoji: "📖",
      highlights: [
        "Recognized for academic excellence",
        "Participated in debates and extempore events",
        "Got better at poem telling"
      ],
      teacher: "Biji Ma'am",
      favoriteSubject: "General Knowledge",
      memory: "I was called on stage during assembly for academic honors—it made me feel really special."
    }
  ];

  const schoolSupplies = [
    { item: "Colorful Pencils", emoji: "✏️", memory: "Even if I wasn’t into coloring, I loved collecting them!" },
    { item: "Lunchbox", emoji: "🍎", memory: "Opening my lunchbox to share food with friends was a highlight." },
    { item: "Backpack", emoji: "🎒", memory: "Stuffed with books, notebooks, and all my competition certificates." },
    { item: "Glue Sticks", emoji: "🖍️", memory: "Didn’t use them much, but still somehow lost them often!" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-fredoka font-bold gradient-text mb-6">
              School Days 🏫
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The classroom adventures that shaped my mind and gave me the stage to shine!
            </p>
          </div>

          {/* School Years */}
          <div className="space-y-8 mb-16">
            {schoolYears.map((year, index) => (
              <div key={index} className="magical-card p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{year.emoji}</div>
                  <div>
                    <h3 className="text-3xl font-fredoka font-bold text-disney-purple">
                      {year.grade}
                    </h3>
                    <p className="text-disney-pink font-medium">Teacher: {year.teacher}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-disney-blue mb-3">📋 Year Highlights:</h4>
                    <ul className="space-y-2">
                      {year.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-disney-green">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <span className="font-bold text-disney-orange">⭐ Favorite Subject: </span>
                      <span className="text-gray-700">{year.favoriteSubject}</span>
                    </div>
                  </div>

                  <div className="bg-disney-lavender/20 p-4 border-2 border-disney-purple/30">
                    <h4 className="font-bold text-disney-purple mb-2">💭 Best Memory:</h4>
                    <p className="italic text-gray-700">"{year.memory}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* School Supplies */}
          <div className="magical-card p-8 mb-16">
            <h2 className="text-3xl font-fredoka font-bold text-center gradient-text mb-8">
              Essential School Supplies 📝
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schoolSupplies.map((supply, index) => (
                <div key={index} className="text-center p-4 bg-white/60 border-2 border-disney-pink/20">
                  <div className="text-4xl mb-3">{supply.emoji}</div>
                  <h4 className="font-bold text-disney-purple mb-2">{supply.item}</h4>
                  <p className="text-sm italic text-gray-600">"{supply.memory}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* School Stats */}
          <div className="magical-card p-8">
            <h2 className="text-3xl font-fredoka font-bold text-center gradient-text mb-8">
              My School Stats 📊
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-disney-mint/20 border-2 border-disney-green/30">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-2xl font-bold text-disney-green">Top 1%</div>
                <div className="text-sm text-gray-600">Academic Performance</div>
              </div>
              <div className="text-center p-4 bg-disney-peach/20 border-2 border-disney-orange/30">
                <div className="text-3xl mb-2">🎤</div>
                <div className="text-2xl font-bold text-disney-orange">10+</div>
                <div className="text-sm text-gray-600">Competitions Won</div>
              </div>
              <div className="text-center p-4 bg-disney-sky/20 border-2 border-disney-blue/30">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-disney-blue">Plenty</div>
                <div className="text-sm text-gray-600">Friends Made</div>
              </div>
              <div className="text-center p-4 bg-disney-lavender/20 border-2 border-disney-purple/30">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-disney-purple">∞</div>
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

export default School;
