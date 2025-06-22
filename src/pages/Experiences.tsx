
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experiences = () => {
  const experiences = [
    {
      title: "First Day of School",
      emoji: "🎒",
      age: "5 years old",
      description: "The big milestone that started my educational journey!",
      memory: "I cried for 10 minutes, then made my first best friend during snack time.",
      feeling: "Nervous but excited"
    },
    {
      title: "Learning to Ride a Bike",
      emoji: "🚲",
      age: "7 years old", 
      description: "Dad running behind me, training wheels finally off!",
      memory: "I thought he was still holding on, but I was already riding solo for 50 feet!",
      feeling: "Proud and free"
    },
    {
      title: "First Sleepover",
      emoji: "🛏️",
      age: "8 years old",
      description: "The ultimate childhood rite of passage.",
      memory: "We stayed up until 3 AM telling ghost stories and eating way too much junk food.",
      feeling: "Adventurous"
    },
    {
      title: "Losing My First Tooth",
      emoji: "🦷",
      age: "6 years old",
      description: "The tooth fairy's first visit to my pillow!",
      memory: "I wiggled it for weeks, then it fell out while eating an apple at lunch.",
      feeling: "Magical"
    },
    {
      title: "Family Road Trip",
      emoji: "🚗",
      age: "9 years old",
      description: "Cross-country adventure with the whole family.",
      memory: "Are we there yet? became the soundtrack of our 12-hour car ride.",
      feeling: "Bonding time"
    },
    {
      title: "School Play Performance",
      emoji: "🎭",
      age: "10 years old",
      description: "My debut as a tree in the school's environmental play.",
      memory: "I forgot my one line but improvised with 'I love oxygen!' The crowd laughed!",
      feeling: "Stage fright turned triumph"
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
              My Experiences ✨
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The moments that shaped me! Here are the experiences that made my childhood unforgettable.
            </p>
          </div>

          {/* Experiences Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1 magical-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{exp.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-fredoka font-bold text-disney-purple">
                        {exp.title}
                      </h3>
                      <span className="text-sm bg-disney-pink text-white px-3 py-1 font-medium">
                        {exp.age}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="bg-disney-lavender/30 p-4 border-l-4 border-disney-purple mb-4">
                    <p className="italic text-gray-700">"{exp.memory}"</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💫</span>
                    <span className="text-sm font-medium text-disney-blue">
                      Feeling: {exp.feeling}
                    </span>
                  </div>
                </div>

                {/* Age Marker */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 bg-disney-pink rounded-full"></div>
                  <div className="w-0.5 h-16 bg-disney-pink/30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Life Lessons */}
          <div className="mt-16 magical-card p-8">
            <h2 className="text-3xl font-fredoka font-bold text-center gradient-text mb-8">
              What These Experiences Taught Me 📚
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold text-disney-green mb-2">Growth</h4>
                <p className="text-sm text-gray-600">Every challenge was a chance to grow stronger and braver.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">❤️</div>
                <h4 className="font-bold text-disney-pink mb-2">Love</h4>
                <p className="text-sm text-gray-600">Family and friends make every experience more meaningful.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-disney-blue mb-2">Courage</h4>
                <p className="text-sm text-gray-600">Being brave doesn't mean not being scared - it means doing it anyway.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
