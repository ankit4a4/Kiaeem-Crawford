import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Play } from "lucide-react";
import Link from "next/link";

const HeroHome = () => {
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
        <section className="relative bg-white md:h-screen py-10 pt-20 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 video-overlay video-overlay "></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center max-w-5xl mx-auto px-4">
                    <h1
                        className="font-bebas text-5xl md:text-6xl tracking-wider mb-6 text-shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Kiaeem
                    </h1>
                    <h1
                        className="font-bebas text-5xl md:text-6xl tracking-wider mb-8 text-shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Crawford
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        Premium film production that transforms visions into powerful visual narratives.
                        We craft stories that move, inspire, and resonate with audiences worldwide.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <Link
                            href="/portfolio"
                            className="bg-white text-black px-8 py-4 text-lg font-semibold uppercase tracking-wide hover:bg-white/90 transition-all duration-300 flex items-center group"
                        >
                            <Play className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                            View Our Work
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroHome;
