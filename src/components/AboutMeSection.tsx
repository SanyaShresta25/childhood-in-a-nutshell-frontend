
const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-20 px-4 bg-gradient-to-r from-disney-peach to-disney-sky">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-gloria font-bold gradient-text mb-4">
            About Me !
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to my digital childhood memory box! Here's a little about me and my adorable companion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src="/pic.png"
                alt="Me and my pets"
                className="pixel-avatar w-100 h-100 object-cover mx-auto"
              />
              
              <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce-gentle animation-delay-500">🐾</div>
            </div>
          
          </div>

          {/* Story Section */}
          <div className="magical-card p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">👋</div>
                <div>
                  <h3 className="text-2xl font-gloria font-bold text-disney-purple mb-2">
                    Hey there, I'm Sanya!
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to my childhood memories! I'm someone who believes that growing up doesn't mean 
                    forgetting the magic of being a kid. This little corner of the internet is where I keep 
                    all my favorite memories, experiences, and the things that shaped who I am today.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🐾</div>
                <div>
                  <h3 className="text-2xl font-gloria font-bold text-disney-pink mb-2">
                    Meet My Best Friend!
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before Cheeku, I had two lovely kittens named Nobi and Pesu, inspired by my favorite childhood cartoon Doraemon.
My very first pet was a sweet companion named Pooncha.
Each of them has filled my days with warmth, fun, and memories I’ll always cherish , from kitten cuddles to puppy zoomies!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="text-2xl font-gloria font-bold text-disney-green mb-2">
                    What You'll Find Here
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Explore my childhood through different lenses - the foods that brought me joy, 
                    the music that moved my soul, the games that sparked my imagination, and the 
                    experiences that made me who I am today.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span>🍕</span>
                      <span>Favorite Foods</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🎵</span>
                      <span>Music I Loved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🎮</span>
                      <span>Games I Played</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🎒</span>
                      <span>School Memories</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
