import Hero from "@/components/sections/Hero";
import UserSegmentation from "@/components/sections/UserSegmentation";
import TrustBar from "@/components/sections/TrustBar";
import PlatformIntro from "@/components/sections/PlatformIntro";
import ProductShowcase from "@/components/sections/ProductShowcase";
import SlidePortfolio from "@/components/sections/SlidePortfolio";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowFilm from "@/components/sections/WorkflowFilm";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import ROI from "@/components/sections/ROI";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import WhyNow from "@/components/sections/WhyNow";
import FounderStory from "@/components/sections/FounderStory";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import Security from "@/components/sections/Security";
import Roadmap from "@/components/sections/Roadmap";
import Personas from "@/components/sections/Personas";
import UseCases from "@/components/sections/UseCases";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <UserSegmentation />
      <TrustBar />
      <PlatformIntro />
      <ProductShowcase />
      <SlidePortfolio />
      <ProblemSolution />
      <WorkflowFilm />
      <HowItWorks />
      <Comparison />
      <ROI />
      <TestimonialCarousel />
      <WhyNow />
      <FounderStory />
      <Features />
      <Integrations />
      <Security />
      <div id="roadmap">
        <Roadmap />
      </div>
      <Personas />
      <UseCases />
      <FAQ />
      <ContactCTA />
    </>
  );
}
