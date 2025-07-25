
const Contact = () => (
  <>
    {/* Contact Section */}
       <section id="contact" className="py-16 px-8 bg-dark">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 relative">
                Get in <span className="text-cyan">Touch</span>
                <div className="h-1 w-20 bg-fuchsia absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div id="contact-info" className="bg-darkGray p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-6 text-fuchsia">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mr-4">
                                <i className="text-cyan text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg></i>
                            </div>
                            <div>
                              <p className="text-sm text-lightGray">Email</p>
                              <a
                                href="mailto:agathe.valence@efrei.net?subject=I am interested in your profile"
                                className="text-white underline hover:text-cyan transition-colors"
                              >
                                agathe.valence@efrei.net
                              </a>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mr-4">
                                <i className="text-cyan text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                            </div>
                            <div>
                                <p className="text-sm text-lightGray">Phone</p>
                                <p className="text-white">+33 6 49 66 15 17</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mr-4">
                                <i className="text-cyan text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                            </div>
                            <div>
                                <p className="text-sm text-lightGray">Location</p>
                                <p className="text-white">Saint-Louis, France</p>
                                <p className="text-white">Basel, Switzerland</p>

                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mr-4">
                                <i className="text-cyan text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-linkedin" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></i>
                            </div>
                            <div>
                              <p className="text-sm text-lightGray">LinkedIn</p>
                              <a
                                href="https://www.linkedin.com/in/agathe-valence/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-cyan transition-colors"
                              >
                                linkedin.com/in/agathe-valence
                              </a>
                            </div>
                            
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center mr-4">
                            {/* Download icon */}
                            <svg
                              className="text-cyan w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-sm text-lightGray">Agathe Valence Resume</h3>
                            <a
                              href="/embedded-engineer/assets/CV Agathe valence.pdf"
                              download
                              className="text-white underline hover:text-cyan transition-colors flex items-center"
                            >
                              Download my Resume (PDF)
                            </a>
                          </div>
                        </div>
                    </div>
                    
                </div>
                
                <div id="contact-form" className="bg-darkGray p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-cyan">Send Message</h3>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                      const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                      const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                      const mailto = `mailto:agathe.valence@efrei.net?subject=Hey Agathe!&body=From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
                      window.location.href = mailto;
                    }}
                  >
                    <div className="mb-4">
                      <label className="block text-lightGray text-sm mb-2" htmlFor="name">Name</label>
                      <input className="w-full bg-dark border border-gray-700 rounded py-2 px-3 text-white focus:outline-none focus:border-cyan" id="name" name="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-lightGray text-sm mb-2" htmlFor="email">Email</label>
                      <input className="w-full bg-dark border border-gray-700 rounded py-2 px-3 text-white focus:outline-none focus:border-cyan" id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-6">
                      <label className="block text-lightGray text-sm mb-2" htmlFor="message">Message</label>
                      <textarea className="w-full bg-dark border border-gray-700 rounded py-2 px-3 text-white focus:outline-none focus:border-cyan h-32" id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button
                      className="w-full bg-fuchsia hover:bg-cyan text-dark font-bold py-3 px-4 rounded transition-colors duration-300"
                      type="submit"
                      onClick={e => {
                        // Prevent form reset before mailto
                        e.preventDefault();
                        const form = (e.currentTarget.form as HTMLFormElement);
                        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                        const mailto = `mailto:agathe.valence@efrei.net?subject=Hey Agathe!&body=From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
                        window.location.href = mailto;
                        // Do not reset fields
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
            </div>
        </div>
    </section>
    
 
  </>
);

export default Contact;
