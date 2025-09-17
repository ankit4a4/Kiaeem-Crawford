import React from 'react'
import img1 from "@/public/t1.jpeg"
import img2 from "@/public/t2.webp"
import img3 from "@/public/t3.webp"

const OurTeam = () => {

  const team = [
    {
      name: "Marcus Chen",
      role: "Creative Director",
      image: img1.src,
      bio: "Award-winning director with 12+ years in commercial and narrative filmmaking."
    },
    {
      name: "Sofia Rodriguez",
      role: "Lead Cinematographer",
      image: img2.src,
      bio: "Master of visual storytelling with expertise in cutting-edge camera technology."
    },
    {
      name: "James Wilson",
      role: "Post-Production Supervisor",
      image: img3.src,
      bio: "Technical wizard who transforms raw footage into cinematic masterpieces."
    }
  ];
  return (
    <section className="bg-black py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
            data-aos="fade-up"
          >
            OUR TEAM
          </h2>
          <p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Meet the talented individuals who bring creative visions to life through
            their expertise, dedication, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700"></div>
              </div>
              <h3 className="font-bebas text-3xl mb-2 tracking-wider">{member.name}</h3>
              <p className="text-white/60 uppercase text-sm tracking-wide mb-4">{member.role}</p>
              <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
