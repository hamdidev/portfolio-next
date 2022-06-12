import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Skills,
  Testimonials,
  Work,
} from "../components";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeScreen;
