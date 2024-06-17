import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import WhySection from "../components/why/WhySection";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      <About />
      <WhySection />
      <Footer />
    </>
  );
}
export default Home;
