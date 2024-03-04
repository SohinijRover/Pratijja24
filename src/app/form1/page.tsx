import Navbar from "@/components/Navbar";
import Form1 from "../register/form1";
import Footer from "@/components/Footer";

const form1page = () => {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen pt-24" style={{
        background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
      }}>
        <div className="text-center pt-10 text-4xl font-semibold uppercase ">Cross Team Registeration</div>
            <Form1 />
            </div>
            <Footer />
        </>
    )
}

export default form1page;