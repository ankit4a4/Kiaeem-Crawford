import { Heart, Target, Zap } from 'lucide-react'
import React from 'react'
import img from "@/public/doc.jpeg"

const OurMission = () => {
    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right">
                        <h2 className="font-bebas text-5xl md:text-7xl mb-8 tracking-wider">
                            OUR MISSION
                        </h2>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            At Kiaeem  Crawford, we believe every story deserves to be told with passion,
                            precision, and artistic integrity. Our mission is to create visual narratives
                            that not only captivate audiences but also drive meaningful change and inspire action.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Through innovative storytelling techniques and cutting-edge technology,
                            we transform concepts into powerful cinematic experiences that resonate
                            long after the credits roll.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                                <Heart className="mx-auto mb-4" size={40} />
                                <h3 className="font-bebas text-2xl mb-2 tracking-wider">PASSION</h3>
                                <p className="text-sm text-gray-600">Every project is a labor of love</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                                <Target className="mx-auto mb-4" size={40} />
                                <h3 className="font-bebas text-2xl mb-2 tracking-wider">PRECISION</h3>
                                <p className="text-sm text-gray-600">Meticulous attention to detail</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                                <Zap className="mx-auto mb-4" size={40} />
                                <h3 className="font-bebas text-2xl mb-2 tracking-wider">INNOVATION</h3>
                                <p className="text-sm text-gray-600">Pushing creative boundaries</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <img
                            src={img.src}
                            alt="Our Mission"
                            className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-700"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission
