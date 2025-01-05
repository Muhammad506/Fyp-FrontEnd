import { useEffect } from "react";
import Cards from "./Cards";
import Features from "./Features";

const FeaturesPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Features />
      <Cards />
    </div>
  );
};

export default FeaturesPage;
