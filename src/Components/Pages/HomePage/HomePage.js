import ExtrSection from "./ExtrSection";
import Hero from "./Hero";
import ProductSection from "./Product-section";
import ReviewSection from "./Review-section";
import SummarySection from "./SummarySection";

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* product card */}

      <ProductSection />

      {/* review Section */}

      <ReviewSection />

      <SummarySection />
      <ExtrSection />
    </div>
  );
};

export default HomePage;
