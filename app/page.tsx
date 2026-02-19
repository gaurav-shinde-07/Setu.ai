import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
    </main>
  );
}
