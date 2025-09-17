"use client";
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Timer as Vimeo } from 'lucide-react';
import AOSInit from '@/components/AOSInit';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We\'ll get back to you soon!');
  };

  return (
    <>
      <AOSInit />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider mb-8 text-shadow-lg"
            data-aos="fade-up"
          >
            LET'S TALK
          </h1>
          <p
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Ready to bring your vision to life? Get in touch and let's create
            something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-white text-black py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="font-bebas text-4xl md:text-5xl mb-8 tracking-wider">
                START YOUR PROJECT
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Full Name "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Gmail"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select Project Type</option>
                      <option value="commercial">Commercial</option>
                      <option value="documentary">Documentary</option>
                      <option value="narrative">Narrative Film</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                    Budget Range
                  </label>

                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Project Details"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 font-semibold uppercase tracking-wide hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left">
              <h2 className="font-bebas text-4xl md:text-5xl mb-8 tracking-wider">
                GET IN TOUCH
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase tracking-wide">Email</h3>
                    <p className="text-gray-600">info@niicellc.com</p>
                    <p className="text-gray-600"> </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase tracking-wide">Phone</h3>
                    <p className="text-gray-600">   7083073201</p>
                    <p className="text-gray-600"> </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase tracking-wide">Address</h3>
                    <p className="text-gray-600"> </p>
                    <p className="text-gray-600"> 1836 Dewey St. Apt 4Hollywood Fl 33020</p>
                    <p className="text-gray-600"> </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1 uppercase tracking-wide">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bebas text-2xl mb-6 tracking-wider">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Vimeo size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-black h-96 relative">
        <div className="w-full h-full" data-aos="fade-up">
         
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.731897594178!2d-80.16252987813594!3d26.00301291500038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab9d98fd14f9%3A0x266eae7bbd40930f!2s1836%20Dewey%20St%2C%20Hollywood%2C%20FL%2033020%2C%20USA!5e0!3m2!1sen!2sin!4v1758100349647!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: 'grayscale(100%) invert(100%) contrast(120%)'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Niicellc Location"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white text-black py-10 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              FREQUENTLY ASKED
            </h2>
            <p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. A typical commercial can take 4-8 weeks from concept to delivery, while documentaries and narrative films may require 3-6 months."
              },
              {
                question: "Do you work with clients remotely?",
                answer: "Absolutely! We work with clients worldwide and have extensive experience managing remote productions and virtual collaboration throughout all project phases."
              },
              {
                question: "What's included in your production services?",
                answer: "Our full-service production includes concept development, scriptwriting, pre-production planning, filming, post-production editing, color grading, sound design, and final delivery in your preferred formats."
              },
              {
                question: "Can you work within our budget?",
                answer: "We believe great storytelling is possible at any budget level. We'll work with you to maximize production value and create the most impactful film within your budget constraints."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bebas text-2xl mb-4 tracking-wider">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-5xl md:text-7xl mb-8 tracking-wider"
            data-aos="fade-up"
          >
            READY TO BEGIN?
          </h2>
          <p
            className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Every great film starts with a single conversation. Let's discuss your vision
            and create something that will leave a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Call Now
            </a>
            <a
              href="mailto:info@niicellc.com"
              className="inline-block bg-white text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;