
const Navigation = () => (
  <>
  
    {/* Navigation */}
        <nav id="header" className="flex justify-between items-center py-6 px-8 md:px-12 bg-darkGray bg-opacity-90 text-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-cyan">
            AGATHE <span className="text-fuchsia">portfolio</span>
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="uppercase text-cyan text-sm tracking-wider hover:text-fuchsia transition-colors duration-300 cursor-pointer">About</a>
          <a href="#skills" className="uppercase text-cyan tracking-wider hover:text-fuchsia transition-colors duration-300 cursor-pointer">Skills</a>
          <a href="#projects" className="uppercase text-cyan tracking-wider hover:text-fuchsia transition-colors duration-300 cursor-pointer">Projects</a>
          <a href="#experience" className="uppercase text-cyan tracking-wider hover:text-fuchsia transition-colors duration-300 cursor-pointer">Experience</a>
          <a href="#contact" className="uppercase text-cyan tracking-wider hover:text-fuchsia transition-colors duration-300 cursor-pointer">Contact</a>
        </div>
    </nav>
  </>
);

export default Navigation;
