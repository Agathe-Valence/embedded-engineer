
const Projects = () => (
  <>
    {/* Projects Section */}
        <section id="projects" className="py-16 px-8 bg-dark">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 relative">
                Academic <span className="text-cyan">Projects</span>
                <div className="h-1 w-20 bg-fuchsia absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div id="project-1" className="bg-darkGray rounded-lg overflow-hidden shadow-lg group">
                    <div className="relative h-64 overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/embedded-engineer/assets/lampy.png"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-semibold text-white">iOS App &amp; Smart Home System</h3>
                            <p className="text-cyan">Swift, ESP32, Firebase</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-lightGray">Developed an iOS application in Swift for home automation with a focus on lighting control. The system was integrated with an ESP32 microcontroller and utilized Firebase for real-time data storage and synchronization.</p>
                        <div className="mt-4 flex space-x-3">
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">IoT</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">Swift</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">Firebase</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">ESP32</span>
                        </div>
                    </div>
                </div>
                
                <div id="project-2" className="bg-darkGray rounded-lg overflow-hidden shadow-lg group">
                    <div className="relative h-64 overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/embedded-engineer/assets/car.jpg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-semibold text-white">Autonomous Vehicle Race</h3>
                            <p className="text-fuchsia">Paris-Saclay Competition</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-lightGray">Participated in the Paris-Saclay autonomous car competition, contributing significantly to vehicle design and the development of advanced navigation algorithms for optimal race performance.</p>
                        <div className="mt-4 flex space-x-3">
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">Autonomous</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">Navigation</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">Algorithms</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">Robotics</span>
                        </div>
                    </div>
                </div>
                
                <div id="project-3" className="bg-darkGray rounded-lg overflow-hidden shadow-lg group">
                    <div className="relative h-64 overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/embedded-engineer/assets/parkinson.jpg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-semibold text-white">Parkinson's Monitoring Tool</h3>
                            <p className="text-cyan">Arduino Nano, Sensors, AI</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-lightGray">Built a wearable device using Arduino Nano and various sensors to track patient movements. The collected data was stored and processed using AI algorithms to provide improved medical monitoring for Parkinson's patients.</p>
                        <div className="mt-4 flex space-x-3">
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">Healthcare</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">Arduino</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">Sensors</span>
                            <span className="px-3 py-1 bg-dark text-cyan text-xs rounded-full">AI</span>
                        </div>
                    </div>
                </div>
                
                <div id="project-4" className="bg-darkGray rounded-lg overflow-hidden shadow-lg group">
                    <div className="relative h-64 overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/embedded-engineer/assets/boite.png" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-semibold text-white">Embedded System with STM32</h3>
                            <p className="text-fuchsia">STM32, PCB Design, SolidWorks</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-lightGray">Designed a comprehensive embedded system with STM32, LEDs, potentiometer, RGB LCD screen, and buttons. The project included 3D modeling of the enclosure using SolidWorks and creating the PCB with EasyEDA.</p>
                        <div className="mt-4 flex space-x-3">
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">STM32</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">PCB</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">SolidWorks</span>
                            <span className="px-3 py-1 bg-dark text-fuchsia text-xs rounded-full">EasyEDA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
 
  </>
);

export default Projects;
