import Hero from "@/components/sections/Hero";
import UserSegmentation from "@/components/sections/UserSegmentation";
import PlatformEcosystem from "@/components/sections/PlatformEcosystem";
import CoreTechnologies from "@/components/sections/CoreTechnologies";
import TrustBar from "@/components/sections/TrustBar";
import CustomerTrust from "@/components/sections/CustomerTrust";
import PlatformIntro from "@/components/sections/PlatformIntro";
import ProductsServices from "@/components/sections/ProductsServices";
import ExplorePlatform from "@/components/sections/ExplorePlatform";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import SlidePortfolio from "@/components/sections/SlidePortfolio";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ScrollWorkflow from "@/components/sections/ScrollWorkflow";
import WorkflowFilm from "@/components/sections/WorkflowFilm";
import Comparison from "@/components/sections/Comparison";
import ROI from "@/components/sections/ROI";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import RealResults from "@/components/sections/RealResults";
import FounderStory from "@/components/sections/FounderStory";
import WhyChoosePathStandard from "@/components/sections/WhyChoosePathStandard";
import LabServices from "@/components/sections/LabServices";
import Roadmap from "@/components/sections/Roadmap";
import Personas from "@/components/sections/Personas";
import UseCases from "@/components/sections/UseCases";
import FAQ from "@/components/sections/FAQ";
import RegulatoryDisclosures from "@/components/sections/RegulatoryDisclosures";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <UserSegmentation />
      <PlatformEcosystem />
      <CoreTechnologies />
      <TrustBar />
      <CustomerTrust />
      <PlatformIntro />
      <ProductsServices />
      <ExplorePlatform />
      <EverythingYouNeed />
      <SlidePortfolio />
      <ProblemSolution />
      <ScrollWorkflow />
      <WorkflowFilm />
      <Comparison />
      <ROI />
      <TestimonialCarousel />
      <RealResults />
      <FounderStory />
      <WhyChoosePathStandard />
      <LabServices />
      <div id="roadmap">
        <Roadmap />
      </div>
      <Personas />
      <UseCases />
      <FAQ />
      <RegulatoryDisclosures />
      <ContactCTA />
    </>
  );
}
