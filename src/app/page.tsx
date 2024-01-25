
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Timer from "@/components/Timer";


export default function Home() {
  return (
    
    <div className="overflow-x-hidden text-white">
      <Navbar/>
      <Hero />
      <Timer />
    </div>
  );
}
