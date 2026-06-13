import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import UserSegmentation from "@/components/sections/UserSegmentation";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowTeaser from "@/components/sections/WorkflowTeaser";
import CoreTechnologies from "@/components/sections/CoreTechnologies";
import Comparison from "@/components/sections/Comparison";
import FounderStory from "@/components/sections/FounderStory";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <UserSegmentation />
      <ProblemSolution />
      <WorkflowTeaser />
      <CoreTechnologies />
      <Comparison />
      <FounderStory />
      <ContactCTA />
    </>
  );
}
