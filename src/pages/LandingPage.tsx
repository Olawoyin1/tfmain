import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/UI/Marquee';
import About from '../components/About/About';
import Problem from '../components/Problem/Problem';
import Program from '../components/Program/Program';
import Who from '../components/Who/Who';
import Process from '../components/Process/Process';
import Faculty from '../components/Faculty/Faculty';
import Testimonials from '../components/Testimonials/Testimonials';
import Partners from '../components/Partners/Partners';
import Pricing from '../components/Pricing/Pricing';
import FAQ from '../components/FAQ/FAQ';
import Apply from '../components/Apply/Apply';
import Footer from '../components/Footer/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Problem />
      <Program />
      <Who />
      <Process />
      <Faculty />
      <Testimonials />
      <Partners />
      <Pricing />
      <FAQ />
      <Apply />
      <Footer />
    </>
  );
};

export default LandingPage;
