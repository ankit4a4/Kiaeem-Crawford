"use client"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Play } from "lucide-react";
import Link from "next/link";

const HomeCTA = () => {

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
        <section className="bg-black py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2
                    className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider"
                    data-aos="fade-up"
                >
                    READY TO CREATE
                </h2>
                <h2
                    className="font-bebas text-5xl md:text-7xl mb-8 tracking-wider"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    SOMETHING AMAZING?
                </h2>
                <p
                    className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Let's collaborate to bring your vision to life. Whether it's a commercial,
                    documentary, or narrative film, we're here to exceed your expectations.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-white text-black px-12 py-4 text-lg font-bold uppercase tracking-wide hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    Start Your Project
                </Link>
            </div>
        </section>
    )
}

export default HomeCTA
