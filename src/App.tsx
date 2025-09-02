import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PartnersSection from "./components/PartnersSection";
import FeaturesSection from "./components/FeaturesSection";
import SecuritySection from "./components/SecuritySection";
import PerformanceSection from "./components/PerformanceSection";
const App = () => {
  return (
    <main className="text-sm text-secondary antialiased">
      <Navbar />
      <Home />
      <PartnersSection />
      <FeaturesSection />
      <SecuritySection />
      <PerformanceSection />
    </main>
  );
};

export default App;
