

import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <main  className="max-w-7xl mx-auto pt-20 px-6" >
           <HeroSection />
      <FeatureSection />
      <Testimonials />
      <Pricing />
      <Workflow />
    </main>
  );
}
