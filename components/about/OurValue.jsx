import React from 'react'
import { Award, Users, Camera, Heart, Target, Zap } from 'lucide-react';

const OurValue = () => {
  return (
    <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
              data-aos="fade-up"
            >
              OUR VALUES
            </h2>
            <p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              These core principles guide every decision we make and every story we tell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We never compromise on quality and strive for perfection in every frame."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Great films are born from great partnerships and open communication."
              },
              {
                icon: Camera,
                title: "Innovation",
                description: "We embrace new technologies and techniques to push creative boundaries."
              },
              {
                icon: Heart,
                title: "Authenticity",
                description: "Every story we tell comes from a place of genuine passion and truth."
              },
              {
                icon: Target,
                title: "Impact",
                description: "We create films that not only entertain but also inspire and educate."
              },
              {
                icon: Zap,
                title: "Efficiency",
                description: "Delivering exceptional results while respecting timelines and budgets."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="font-bebas text-2xl mb-4 tracking-wider">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurValue
