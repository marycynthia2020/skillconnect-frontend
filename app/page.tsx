import UserDashboard from "@/components/dash";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import WorkingProcess from "@/components/sections/HowItWorks";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Testimonial from "@/components/sections/Testimonial";

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
