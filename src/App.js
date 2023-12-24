import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
