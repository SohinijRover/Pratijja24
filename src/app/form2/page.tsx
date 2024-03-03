import Navbar from "@/components/Navbar";
import Form2 from "../register/form2";
import Footer from "@/components/Footer";

const form2page = () => {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen pt-24" style={{
        background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
      }}>
        <div className="text-center pt-10 text-4xl font-semibold uppercase ">Institutional Team Registeration</div>
            <Form2 />
            </div>
            <Footer />
        </>
    )
}

export default form2page;