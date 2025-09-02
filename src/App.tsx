import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PartnersSection from "./components/PartnersSection";
const App = () => {
  return (
    <main className="text-sm text-secondary antialiased">
      <Navbar />
      <Home />
      <PartnersSection />
    </main>
  );
};

export default App;
