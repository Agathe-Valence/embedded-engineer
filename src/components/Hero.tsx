const Hero = () => (
  <>
  {/* Hero Section */}
    <section id="hero" className="relative h-[600px] flex items-center justify-center bg-darkGray text-white px-6">
        <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a53e1fb606-50143ba09c1bdc6b1dfd.png" alt="futuristic circuit board with embedded systems and microcontrollers in dark blue and cyan color scheme, technical background" />
        </div>
        <div className="relative z-10 text-center max-w-3xl">
            <h1 className="text-5xl font-light mb-4 leading-tight">
                Embedded Systems <span className="text-cyan">Engineer</span>
            </h1>
            <p className="text-xl text-lightGray mb-6">EFREI Paris Graduate | Generalist digital & technology engineering degree</p>
            <div className="flex justify-center mt-8 space-x-4">
                <a href="#contact" className="border-2 border-cyan text-cyan px-8 py-3 uppercase text-sm tracking-wider hover:bg-cyan hover:text-dark transition duration-300 cursor-pointer">
                    Get in Touch
                </a>
                <a href="#projects" className="border-2 border-fuchsia text-fuchsia px-8 py-3 uppercase text-sm tracking-wider hover:bg-fuchsia hover:text-dark transition duration-300 cursor-pointer">
                    View Projects
                </a>
            </div>
        </div>
    </section>
    </>
);

export default Hero;
