"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, ExternalLink, Filter } from 'lucide-react';
import AOSInit from '@/components/AOSInit';
import img1 from "@/public/port1.webp"
import img2 from "@/public/port2.jpeg"
import img3 from "@/public/port3.jpeg"
import img4 from "@/public/port4.webp"
import img5 from "@/public/port5.jpeg"
import img6 from "@/public/port6.webp"
import img7 from "@/public/port7.webp"
import img8 from "@/public/port8.webp"
import img9 from "@/public/port9.jpeg"
import hero from "@/public/outvision.webp"

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Brand Campaign",
      category: "commercial",
      type: "video",
      image: img1.src,
      description: "Premium automotive commercial showcasing elegance and performance."
    },
    {
      id: 2,
      title: "Tech Startup Story",
      category: "documentary",
      type: "video",
      image: img2.src,
      description: "Documentary following a startup's journey from garage to IPO."
    },
    {
      id: 3,
      title: "Fashion Forward",
      category: "commercial",
      type: "image",
      image: img3.src,
      description: "High-fashion photography and video campaign."
    },
    {
      id: 4,
      title: "Ocean's Call",
      category: "narrative",
      type: "video",
      image: img4.src,
      description: "Award-winning short film about environmental conservation."
    },
    {
      id: 5,
      title: "Corporate Vision",
      category: "commercial",
      type: "image",
      image: img5.src,
      description: "Corporate identity and brand story visualization."
    },
    {
      id: 6,
      title: "Urban Stories",
      category: "documentary",
      type: "video",
      image: img6.src,
      description: "Street photography and urban documentary project."
    },
    {
      id: 7,
      title: "The Last Dance",
      category: "narrative",
      type: "video",
      image: img7.src,
      description: "Emotional narrative about passion and dedication."
    },
    {
      id: 8,
      title: "Innovation Labs",
      category: "commercial",
      type: "image",
      image: img8.src,
      description: "Technology showcase and product demonstration."
    },
    {
      id: 9,
      title: "Cultural Heritage",
      category: "documentary",
      type: "video",
      image: img9.src,
      description: "Documentary preserving traditional craftsmanship."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Work' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'narrative', label: 'Narrative' }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <AOSInit />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img
            src={hero.src}
            alt="Portfolio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider mb-8 text-shadow-lg"
            data-aos="fade-up"
          >
            OUR PORTFOLIO
          </h1>
          <p
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A showcase of our finest work spanning commercials, documentaries,
            and narrative films that have moved audiences worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white text-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-8 py-3 font-semibold uppercase tracking-wide transition-all duration-300 ${activeFilter === category.value
                  ? 'bg-black text-white'
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white text-black pb-10 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="masonry-item group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover grayscale-hover transform group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="flex justify-center space-x-4 mb-4">
                        {item.type === 'video' && (
                          <div className="w-12 h-12 hidden  bg-white/20 rounded-full md:flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Play size={24} />
                          </div>
                        )}
                        <div className="w-12 h-12 bg-white/20 rounded-full hidden md:flex items-center justify-center hover:bg-white/30 transition-colors">
                          <ExternalLink size={24} />
                        </div>
                      </div>
                      <h3 className="font-bebas text-lg md:text-2xl tracking-wider mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80 uppercase tracking-wide mb-2">
                        {item.category}
                      </p>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>

                  {/* Video Indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Play size={16} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bebas text-3xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              AWARDS & RECOGNITION
            </h2>
            <p
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our work has been recognized by industry professionals and audiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { year: "2024", award: "Best Commercial Film", festival: "Cannes Lions" },
              { year: "2023", award: "Gold Medal", festival: "NY Film Awards" },
              { year: "2023", award: "People's Choice", festival: "Sundance" },
              { year: "2022", award: "Best Documentary", festival: "Toronto Film Festival" }
            ].map((award, index) => (
              <div
                key={index}
                className="text-center border border-white/20 p-6 hover:border-white/40 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="font-bebas text-1xl md:text-3xl mb-2">{award.year}</div>
                <h3 className="font-semibold mb-1 text-sm">{award.award}</h3>
                <p className="text-white/60 text-sm">{award.festival}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-white text-black py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              CLIENT TESTIMONIALS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote: "Niicellc transformed our brand story into a visual masterpiece. Their attention to detail and creative vision exceeded all our expectations.",
                client: "Sarah Johnson",
                company: "TechVision Inc."
              },
              {
                quote: "Working with this team was an absolute pleasure. They brought our documentary vision to life with professionalism and artistic integrity.",
                client: "Michael Chen",
                company: "Impact Foundation"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-bebas text-xl tracking-wider">{testimonial.client}</h3>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black md:py-24 py-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bebas text-5xl md:text-7xl mb-8 tracking-wider"
            data-aos="fade-up"
          >
            INSPIRED BY OUR WORK?
          </h2>
          <p
            className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let's create something extraordinary together. Every great project starts
            with a conversation about your vision and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;