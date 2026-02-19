import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import WhatWeDo from "../components/WhatWeDo";
import WhoItsFor from "../components/WhoItsFor";
import HowItWorks from "../components/HowItWorks";
import Differentiation from "../components/Differentiation";
import FeatureGrid from "../components/FeatureGrid";
import Results from "../components/Results";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhoItsFor />
      <HowItWorks />
      <Differentiation />
      <FeatureGrid />
      <Results />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
