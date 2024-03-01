
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    
    <div className="overflow-x-hidden text-white">
      <Navbar/>
      <Hero />
      <Details />
      <Footer />
    </div>
  );
}
