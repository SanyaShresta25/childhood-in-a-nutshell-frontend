
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Food = () => {
  const favoriteFoods = [
    {
      name: "Pizza Night",
      emoji: "🍕",
      description: "Friday night family pizza was the highlight of my week!",
      memory: "I always fought for the last slice with my siblings."
    },
    {
      name: "Ice Cream Sundays",
      emoji: "🍦",
      description: "Sunday ice cream trips were pure magic.",
      memory: "I always got the same flavor - chocolate chip cookie dough!"
    },
    {
      name: "Birthday Cake",
      emoji: "🎂",
      description: "Mom's homemade birthday cakes were the best.",
      memory: "She always let me lick the bowl when she was done mixing."
    },
    {
      name: "Mac & Cheese",
      emoji: "🧀",
      description: "The ultimate comfort food of my childhood.",
      memory: "I insisted on the shapes - dinosaurs or shells only!"
    },
    {
      name: "Candy Adventures",
      emoji: "🍭",
      description: "Trick-or-treating and candy store visits.",
      memory: "I organized my Halloween candy by color and type."
    },
    {
      name: "Pancake Mornings",
      emoji: "🥞",
      description: "Weekend pancake breakfasts with the family.",
      memory: "Dad always made them into funny shapes for us kids."
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
              Food I Loved 🍕
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
                <p className="text-gray-700">I hated vegetables but loved carrot cake (go figure!)</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🥛</span>
                <p className="text-gray-700">I could drink chocolate milk with literally any meal</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🍪</span>
                <p className="text-gray-700">I always ate the cookie dough before baking</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🌮</span>
                <p className="text-gray-700">Taco Tuesday was my favorite day of the week!</p>
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
