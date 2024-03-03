import Navbar from "@/components/Navbar";
import Form4 from "../register/form4";
import Footer from "@/components/Footer";

const form4page = () => {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen pt-24" style={{
        background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
      }}>
        <div className="text-center pt-10 text-4xl font-semibold uppercase ">IA / SA Application</div>
            <Form4 />
            </div>
            <Footer />
        </>
    )
}

export default form4page;