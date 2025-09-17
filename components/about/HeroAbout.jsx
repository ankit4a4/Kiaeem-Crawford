import React from 'react'
import img from "@/public/outvision.webp"

const HeroAbout = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <img
          src={img.src}
          alt="About Us"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="font-bebas text-4xl md:text-5xl  tracking-wider mb-8 text-shadow-lg"
          data-aos="fade-up"
        >
          ABOUT Kiaeem  Crawford
        </h1>
        <p
          className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We are storytellers, visionaries, and craftsmen dedicated to creating
          cinematic experiences that transcend the ordinary and touch the soul.
        </p>
      </div>
    </section>
  )
}

export default HeroAbout
