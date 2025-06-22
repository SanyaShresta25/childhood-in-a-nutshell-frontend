
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const School = () => {
  const schoolYears = [
    {
      grade: "Kindergarten",
      emoji: "🖍️",
      highlights: ["Learning to write my name", "Naptime champion", "Made my first best friend"],
      teacher: "Mrs. Johnson",
      favoriteSubject: "Art & Crafts",
      memory: "I painted a rainbow that looked like a blob but mom put it on the fridge anyway!"
    },
    {
      grade: "1st Grade",
      emoji: "📚",
      highlights: ["Lost my first tooth at school", "Learned to read chapter books", "Star student of the month"],
      teacher: "Mr. Davis",
      favoriteSubject: "Reading",
      memory: "I read 'Green Eggs and Ham' to the whole class and felt like a real author!"
    },
    {
      grade: "2nd Grade", 
      emoji: "✏️",
      highlights: ["Multiplication tables master", "School play performer", "Science fair participant"],
      teacher: "Mrs. Martinez",
      favoriteSubject: "Math",
      memory: "My volcano project actually worked and I felt like a real scientist!"
    },
    {
      grade: "3rd Grade",
      emoji: "🏃",
      highlights: ["Joined the soccer team", "Cursive writing expert", "Perfect attendance award"],
      teacher: "Ms. Thompson",
      favoriteSubject: "PE",
      memory: "I scored my first goal and the whole team cheered - best feeling ever!"
    }
  ];

  const schoolSupplies = [
    { item: "Colorful Pencils", emoji: "✏️", memory: "Always had to have the 64-pack of crayons" },
    { item: "Lunchbox", emoji: "🍎", memory: "Themed lunchboxes were everything!" },
    { item: "Backpack", emoji: "🎒", memory: "Heavy with books and dreams" },
    { item: "Glue Sticks", emoji: "🖍️", memory: "Why did we eat the glue? Still a mystery." }
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
              The classroom adventures that shaped my mind and friendships that lasted forever!
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
                <div className="text-2xl font-bold text-disney-green">1000+</div>
                <div className="text-sm text-gray-600">Books Read</div>
              </div>
              <div className="text-center p-4 bg-disney-peach/20 border-2 border-disney-orange/30">
                <div className="text-3xl mb-2">✏️</div>
                <div className="text-2xl font-bold text-disney-orange">∞</div>
                <div className="text-sm text-gray-600">Pencils Used</div>
              </div>
              <div className="text-center p-4 bg-disney-sky/20 border-2 border-disney-blue/30">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-disney-blue">50+</div>
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
