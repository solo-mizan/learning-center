import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import StudentsSection from "./components/students-section";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
      <StudentsSection />
      <Footer />
    </div>
  );
}

export default App;
