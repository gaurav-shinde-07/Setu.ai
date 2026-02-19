import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import WhatWeDo from "../components/WhatWeDo";
import WhoItsFor from "../components/WhoItsFor";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhoItsFor />
      <HowItWorks />
    </main>
  );
}
