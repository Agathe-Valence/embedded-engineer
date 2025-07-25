
const Experiences = () => (
  <>
    {/* Experience Section */}
       <section id="experience" className="py-16 px-8 bg-darkGray">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 relative">
                Professional <span className="text-fuchsia">Experience</span>
                <div className="h-1 w-20 bg-cyan absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
            
            <div className="relative">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-cyan"></div>
                
                <div id="exp-cleeven" className="relative mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                            <div className="bg-dark p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-cyan">Cleeven (Consulting Firm) - JetAviation Client</h3>
                                <p className="text-fuchsia mb-2">Current Position • 12.2024 - now</p>
                                <p className="text-lightGray">
Working on a project focused on interfacing and communication with aircraft equipment and In-Flight eXperience (IFX) systems in private jet. Developing solutions that ensure seamless integration between various aircraft systems and passenger entertainment options.
My responsibilities included implementing multiple communication protocols—such as RS232, RS485, API requests, and TCP/IP—between equipment like screens, ECBUs, light controllers, Apple TV, and AVOD, as well as Crestron devices.
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark border-4 border-cyan z-10"></div>
                        <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                    </div>
                </div>
                
                <div id="exp-alten" className="relative mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                        <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark border-4 border-fuchsia z-10"></div>
                        <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                            <div className="bg-dark p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-fuchsia">Alten</h3>
                                <p className="text-cyan mb-2">Internship • 03.2024 - 09.2024</p>
                                <p className="text-lightGray">Developed an autonomous robot fleet using Raspberry Pi, Python, and ROS2. Implemented various navigation strategies and algorithms for different robot types including spider, tank, 4-wheel steerable, and 4-wheel omnidirectional configurations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="exp-stimshop" className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                            <div className="bg-dark p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-cyan">Stimshop</h3>
                                <p className="text-fuchsia mb-2">Internship • 11.2022 - 03.2023</p>
                                <p className="text-lightGray">
                                  Worked on signal processing and optimization with STM32. Developed an ultra-low-power switch with 300x less consumption, suitable for both home and large-scale industrial applications including nuclear power plants.
                                  I was actively involved in the software development of the Wakee project, focusing on the design, production, assembly, programming, testing, and experimental characterization of an ultrasound-driven energy-saving system using STM32 microcontrollers, Python, and C.
                                </p>
                                <p>
                                  I had worked on a drift compensation system using LIDARs, dedicated to a semi-autonomous drone for nuclear environment.
                                  Implemented on STM32 of an error detection protocol using the Hamming algorithm for airborne ultrasonic communications.

                                </p>
                            </div>
                        </div>
                        <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark border-4 border-cyan z-10"></div>
                        <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
 
  </>
);

export default Experiences;
