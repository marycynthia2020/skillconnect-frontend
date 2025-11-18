import About from "@/components/public/sections/About";
import CTA from "@/components/public/sections/CTA";
import Hero from "@/components/public/sections/Hero";
import WorkingProcess from "@/components/public/sections/HowItWorks";
import Problem from "@/components/public/sections/Problem";
import Solution from "@/components/public/sections/Solution";
import Testimonial from "@/components/public/sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WorkingProcess />
      <Problem />
      <Solution />
      <Testimonial />
      <CTA />
    </div>
  );
}
