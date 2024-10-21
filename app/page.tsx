import CarouselSection from "./components/CarouselSection";
import CoveragesSection from "./components/CoveragesSection";
import CustomerFeedbackSection from "./components/CustomerFeedbackSection";
import FeaturesSection from "./components/FeaturesSection";
import MobileAppSection from "./components/MobileAppSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <CarouselSection />
      <CoveragesSection />
      <ServicesSection />
      <CustomerFeedbackSection />
      <FeaturesSection />
      <MobileAppSection />
    </>
  );
}
