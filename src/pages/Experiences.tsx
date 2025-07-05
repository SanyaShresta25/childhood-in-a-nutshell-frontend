
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experiences = () => {
  const experiences = [
    {
      title: "First Day of School",
      emoji: "🎒",
      age: "4 years old",
      description: "The big milestone that started my educational journey!",
      memory: "Didnt cry much but did worry about what mom would do without me (ps:she was fine).",
      feeling: "Nervous but excited"
    },
    {
      title: "Learning to Ride a Bike",
      emoji: "🚲",
      age: "7 years old", 
      description: "Joe Maama (my uncle) running behind me, training wheels finally off!",
      memory: "I thought he was still holding on, but I was already riding solo for 50 feet!",
      feeling: "Proud and free"
    },
    {
      title: "Losing My First Tooth",
      emoji: "🦷",
      age: "6 years old",
      description: "There was no tooth fairy or anything...just me crying the entire time and Dad getting me igloo icecream",
      memory: "I wiggled it for weeks, then mom pushed it without asking me",
      feeling: "Didnt like it much"
    },
    {
      title: "Trip with Family Friends",
      emoji: "🚗",
      age: "9 years old",
      description: "My aunty ( my Doddamma ) loves travelling  soo she took me and my mom everywhere ",
      memory: "Travelled all of Dubai , Sharjah , Ajman and Ras Al Khaimah",
      feeling: "Fun time"
    },
    {
      title: "School Competitions",
      emoji: "🎭",
      age: "10 years old",
      description: "We had English light music competition , was nervous but won the competition",
      memory: "Seeing my friends being soo proud of me and being shocked that I could ( I didnt win the later years but yess)",
      feeling: "Stage fright turned triumph"
    },
     {
      title: "Having amazing school friends",
      emoji: "🦋",
      age: "all my life",
      description: "since kg had super good friends ( shoutout to shawn , aameena , kavita )",
      memory: "there are still in contact and I owe them one",
      feeling: "what did i do to deserve them"
    },
     {
      title: "Having the best neighbours turned family",
      emoji: "☄️",
      age: "since the time we shifted to the yellow building (rak) I had the most amazing time (ppl who made it better :usha , nikitha , parvadha , nandaja , abhista , ritu,ritvika, manzie , malca)",
      description: "loved playing lot of ghar ghar , doctor-doctor , skating , going to the park , and even having heartful convos with them",
      memory: "all the moments ever lived with them will always have a special place in my heart",
      feeling: "just pure form of love i believe"
    },
    {
  title: "Leaving RAK for India for Education",
  emoji: "🎒",
  age: "13",
  description: "We left for India a day before my birthday. It was the last day I would get to see my friends (though I did come back for a few months during vacations). All my friends gave me gifts—we cried a lot, but yeah.",
  memory: "I was super scared about my new life in Udupi and had so many thoughts running through my head.",
  feeling: "I just wanted to stay there forever."
},

    {
  title: "Journey in Udupi: New School, New Memories",
  emoji: "🚀",
  age: "13",
  description: "I joined St. Mary's because my cousin was studying there. I was a newcomer, but the people were very welcoming.",
  memory: "Mom dropped me off at class, and I saw a girl sitting all by herself (P.S. she's my best friend now!). Shoutout to Jagruthi for always being there. Learning 1st and 2nd standard Kannada and being called 'lucky' became the new norm.",
  feeling: "I truly cherished those moments."
},
 {
  title: "Crossroads: What Do I Want to Become? (I Thought I Had Only Two Choices – Doctor or Engineer)",
  emoji: "✨",
  age: "16",
  description: "Got enrolled in PPC for PCMB (chose Biology to keep my options open). I wasn’t decisive back then either. Then COVID hit — and the rest is history.",
  memory: "Meeting people like Nisha, Sameeksha, and Saniha... I thought for the first time I wouldn’t be surrounded by friends, but they made 11th and 12th bearable.",
  feeling: "I really miss the dank jokes."
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
              My Experiences
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
