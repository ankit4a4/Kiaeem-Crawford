"use client";
import { useEffect } from 'react';
import AOSInit from '@/components/AOSInit';
import HeroAbout from '@/components/about/HeroAbout';
import OurMission from '@/components/about/OurMission';
import OurTeam from '@/components/about/OurTeam';
import OurValue from '@/components/about/OurValue';
import HomeCTA from '@/components/HomePage/HomeCTA';

const AboutPage = () => {

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
      <HeroAbout />
      <OurMission />
      <OurTeam />
      <OurValue />
      <HomeCTA />



    </>
  );
};

export default AboutPage;