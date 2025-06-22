import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
       

        {/* Main Content */}
        <div className="magical-card p-12 max-w-4xl mx-auto relative">
         

          <h1 className="text-6xl md:text-9xl font-schoolbell mb-6 leading-tight tracking-wide">
            <span className="gradient-text">Childhood</span>
            <br />
            <span className="text-disney-purple">in a</span>
            <br />
            <span className="gradient-text">Nutshell</span>
          </h1>

         <p className="text-base md:text-lg text-gray-600 mb-4 font-pixel game-text max-w-xl mx-auto leading-relaxed">
  Relive your childhood memories with our enchanting collection
</p>

<a href="#features">
  <button className="uiverse-button">
    <span>Explore the Magic 🪄</span>
  </button>
</a>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
