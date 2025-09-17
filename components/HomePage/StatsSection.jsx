'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';

const StatsSection = () => {

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

    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="font-bebas text-5xl md:text-6xl mb-2">150+</div>
                        <p className="text-gray-600 uppercase tracking-wide text-sm">Projects Completed</p>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="font-bebas text-5xl md:text-6xl mb-2">50+</div>
                        <p className="text-gray-600 uppercase tracking-wide text-sm">Happy Clients</p>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="font-bebas text-5xl md:text-6xl mb-2">8</div>
                        <p className="text-gray-600 uppercase tracking-wide text-sm">Years Experience</p>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="font-bebas text-5xl md:text-6xl mb-2">25+</div>
                        <p className="text-gray-600 uppercase tracking-wide text-sm">Awards Won</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection
