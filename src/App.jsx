import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import StudentsTable from "./components/students-table";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <HeroSection />
        <StudentsTable />
        <Footer />
      </div>
    </>
  );
}

export default App;
