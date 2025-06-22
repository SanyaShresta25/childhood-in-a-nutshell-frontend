import { Mail, Globe, Github, Code2, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-disney-lavender to-disney-mint py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Branding */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-4xl">🏰</div>
            <span className="text-2xl font-fredoka font-bold gradient-text">
              Childhood in a Nutshell
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Where childhood dreams come alive and Disney magic never ends ✨
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-12 flex-wrap text-disney-purple">
          <a
            href="mailto:shrestasanya@gmail.com"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://sanyashresta.netlify.app/"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <Globe size={24} />
          </a>
          <a
            href="https://github.com/SanyaShresta25"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://leetcode.com/u/SanyaShresta/"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <Code2 size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanya-shresta-jathanna/"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/sanya_shresta"
            className="hover:text-disney-pink transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-white/30 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Made with 💖 and a sprinkle of Disney magic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
