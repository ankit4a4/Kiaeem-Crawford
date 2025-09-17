"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { 
  Film, 
  Camera, 
  Edit, 
  Music, 
  Palette, 
  Users, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';
import AOSInit from '@/components/AOSInit';
import img1 from "@/public/com.jpeg"
import img2 from "@/public/doc.jpeg"
import img3 from "@/public/nar.webp"
import hero from "@/public/outvision.webp"

const ServicesPage = () => {
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

  const services = [
    {
      title: "Commercial Production",
      description: "Brand storytelling that converts viewers into customers through powerful visual narratives that resonate with your target audience.",
      features: ["Brand Films", "TV Commercials", "Online Campaigns", "Product Launches"],
      image: img1.src,
      icon: Film
    },
    {
      title: "Documentary Filmmaking",
      description: "Authentic storytelling that captures real experiences and drives social impact through compelling documentary narratives.",
      features: ["Corporate Documentaries", "Social Impact Films", "Historical Archives", "Personal Stories"],
      image: img2.src,
      icon: Camera
    },
    {
      title: "Narrative Films",
      description: "Cinematic storytelling that engages audiences and creates lasting emotional connections through carefully crafted narratives.",
      features: ["Short Films", "Feature Films", "Series Pilots", "Music Videos"],
      image: img3.src,
      icon: Edit
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your vision, goals, and requirements to understand your story.",
      icon: Users
    },
    {
      step: "02", 
      title: "Pre-Production",
      description: "Meticulous planning, scripting, storyboarding, and casting to set up for success.",
      icon: Palette
    },
    {
      step: "03",
      title: "Production",
      description: "Professional filming with state-of-the-art equipment and experienced crew.",
      icon: Camera
    },
    {
      step: "04",
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, and final delivery.",
      icon: Edit
    }
  ];

  return (
    <>
      <AOSInit />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img
            src={hero.src}
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider mb-8 text-shadow-lg"
            data-aos="fade-up"
          >
            OUR SERVICES
          </h1>
          <p 
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Comprehensive film production services that transform your vision 
            into powerful visual narratives that captivate and inspire.
          </p>
        </div>
      </section>

      {/* Main Services - Alternating Layout */}
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div 
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                data-aos="fade-right"
              >
                <div className="flex items-center mb-6">
                  <service.icon 
                    size={48} 
                    className={index % 2 === 0 ? 'text-black mr-4' : 'text-white mr-4'} 
                  />
                  <h2 className="font-bebas text-4xl md:text-6xl tracking-wider">
                    {service.title}
                  </h2>
                </div>
                
                <p className={`text-xl mb-8 leading-relaxed ${
                  index % 2 === 0 ? 'text-gray-700' : 'text-white/80'
                }`}>
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="font-bebas text-2xl mb-4 tracking-wider">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ArrowRight 
                          size={20} 
                          className={`mr-3 ${index % 2 === 0 ? 'text-black' : 'text-white'}`} 
                        />
                        <span className={index % 2 === 0 ? 'text-gray-700' : 'text-white/80'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className={`inline-block px-8 py-3 font-semibold uppercase tracking-wide transition-all duration-300 ${
                    index % 2 === 0 
                      ? 'bg-black text-white hover:bg-gray-900' 
                      : 'bg-white text-black hover:bg-white/90'
                  }`}
                >
                  Learn More
                </Link>
              </div>
              
              <div 
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                data-aos="fade-left"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              OUR PROCESS
            </h2>
            <p 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              From initial concept to final delivery, we follow a proven process 
              that ensures exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="text-center relative"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <div className="font-bebas text-4xl text-gray-300 mb-2">{item.step}</div>
                  <h3 className="font-bebas text-2xl tracking-wider mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              ADDITIONAL SERVICES
            </h2>
            <p 
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Specialized services to complement your main production and ensure 
              every aspect of your project is handled with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Sound Design",
                description: "Professional audio recording, mixing, and sound design to enhance your visual story."
              },
              {
                icon: Palette,
                title: "Color Grading",
                description: "Expert color correction and grading to achieve the perfect cinematic look."
              },
              {
                icon: Clock,
                title: "Rush Delivery",
                description: "Fast-track production services for time-sensitive projects without compromising quality."
              },
              {
                icon: Users,
                title: "Casting Services",
                description: "Professional talent sourcing and casting to find the perfect performers for your project."
              },
              {
                icon: Award,
                title: "Creative Consulting",
                description: "Strategic creative guidance to ensure your project achieves maximum impact."
              },
              {
                icon: Film,
                title: "Animation & VFX",
                description: "Motion graphics, visual effects, and animation to bring impossible visions to life."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 p-8 text-center hover:bg-white/10 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <service.icon size={48} className="mx-auto mb-6 text-white" />
                <h3 className="font-bebas text-2xl mb-4 tracking-wider">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-black py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 
            className="font-bebas text-5xl md:text-7xl mb-8 tracking-wider"
            data-aos="fade-up"
          >
            READY TO GET STARTED?
          </h2>
          <p 
            className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Choose from our comprehensive range of services or let us create 
            a custom package tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/portfolio"
              className="inline-block border-2 border-black text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-gray-900 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;