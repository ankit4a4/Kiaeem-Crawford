"use client"
import { useEffect } from 'react'
import { Award, Camera, Users } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import img from "@/public/outvision.webp"

const OurVision = () => {

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
      <section className="bg-black py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider">
                OUR VISION
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We believe in the power of visual storytelling to create emotional connections
                and drive meaningful change. Every frame we capture is meticulously crafted
                to serve the narrative and elevate your brand's message.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="mr-4" size={24} />
                  <span>Award-winning creative direction</span>
                </div>
                <div className="flex items-center">
                  <Camera className="mr-4" size={24} />
                  <span>State-of-the-art equipment</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-4" size={24} />
                  <span>Expert production team</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-block bg-white text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src={img.src}
                alt="Film Production"
                className="w-full h-[600px] object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurVision
