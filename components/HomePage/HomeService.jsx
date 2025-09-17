import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";


const HomeService = () => {

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    className="font-bebas text-5xl md:text-7xl mb-4 tracking-wider"
                    data-aos="fade-up"
                >
                    OUR SERVICES
                </h2>
                <p
                    className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    From concept to final cut, we provide comprehensive film production services
                    that bring your vision to life with unparalleled quality and creativity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            title: "Commercial Films",
                            description: "Brand storytelling that converts viewers into customers through powerful visual narratives.",
                            image: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=400"
                        },
                        {
                            title: "Documentary Production",
                            description: "Authentic storytelling that captures real experiences and drives social impact.",
                            image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400"
                        },
                        {
                            title: "Narrative Films",
                            description: "Cinematic storytelling that engages audiences and creates lasting emotional connections.",
                            image: "https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&w=400"
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="relative overflow-hidden mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                            </div>
                            <h3 className="font-bebas text-2xl mb-4 tracking-wider">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href="/services"
                    className="inline-block bg-black text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-gray-900 transition-colors duration-300"
                    data-aos="fade-up"
                >
                    View All Services
                </Link>
            </div>
        </section>
    )
}

export default HomeService
