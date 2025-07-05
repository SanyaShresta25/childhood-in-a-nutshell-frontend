import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Food = () => {
  const favoriteFoods = [
    {
      name: "Cheesecake",
      emoji: "🍰",
      description: "Rich, creamy, and a slice of heaven.",
      memory: "I always chose classic New York style with strawberry topping."
    },
    {
      name: "Cookies and Cream Ice Cream",
      emoji: "🍦",
      description: "My go-to frozen treat during summer.",
      memory: "I'd dig around for the biggest cookie chunks before anyone else could!"
    },
    {
      name: "Pizza",
      emoji: "🍕",
      description: "The timeless favorite for every mood.",
      memory: "Weekend movie nights always meant pizza with extra cheese."
    },
    {
      name: "Al Rawabi Chocolate Milk",
      emoji: "🥤",
      description: "The ultimate after-school drink.",
      memory: "I used to shake the bottle way too much and make a bubbly mess!"
    },
    {
      name: "Al Marai Fruit Juices",
      emoji: "🧃",
      description: "Fresh, fruity, and always refreshing.",
      memory: "Mango was my top pick — I’d always sneak in an extra pack for myself."
    },
    {
      name: "Breadsticks",
      emoji: "🥖",
      description: "Crispy, warm, and perfectly paired with anything.",
      memory: "I used to pretend they were magic wands before eating them!"
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
              Food I Loved 
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every bite tells a story! Here are the foods that made my childhood deliciously memorable.
            </p>
          </div>

          {/* Food Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteFoods.map((food, index) => (
              <div key={index} className="magical-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">{food.emoji}</div>
                <h3 className="text-2xl font-fredoka font-bold text-disney-purple mb-3">
                  {food.name}
                </h3>
                <p className="text-gray-700 mb-4">{food.description}</p>
                <div className="bg-disney-lavender/30 p-3 border-2 border-disney-pink/20">
                  <p className="text-sm italic text-gray-600">
                    💭 "{food.memory}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fun Food Facts */}
          <div className="mt-16 magical-card p-8">
            <h2 className="text-3xl font-fredoka font-bold text-center gradient-text mb-8">
              Fun Food Facts About Me! 🤔
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🥕</span>
                <p className="text-gray-700">I hated vegetables but loved carrots and cucumbers (go figure!)</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🥛</span>
                <p className="text-gray-700">I could drink chocolate milk with literally any meal</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🍪</span>
                <p className="text-gray-700">I loved mini cookies and cakes and baked goods from Spinneys (RAK)</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🌮</span>
                <p className="text-gray-700">Papa John's Pizza Offer day was my favourite day of the week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;
