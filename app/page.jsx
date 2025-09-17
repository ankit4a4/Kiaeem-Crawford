"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { Play, Award, Users, Camera } from 'lucide-react';
import AOSInit from '@/components/AOSInit';
import HeroHome from "@/components/HomePage/HeroHome"
import StatsSection from "@/components/HomePage/StatsSection"
import OurVision from "@/components/HomePage/OurVision"
import HomeService from "@/components/HomePage/HomeService"
import HomeCTA from "@/components/HomePage/HomeCTA"

const HomePage = () => {
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
    <>
      <AOSInit />

      {/* Hero Section */}
      <HeroHome />
      <StatsSection />
      <OurVision />
      <HomeService />
      <HomeCTA />

      {/* Stats Section */}


      {/* About Preview Section */}


      {/* Services Preview */}


      {/* CTA Section */}

    </>
  );
};

export default HomePage;