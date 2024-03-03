import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignupForm from "./contactus";

const Contact: React.FC = () => {
  return (
  <>
  <Navbar />
  <div className="w-full min-h-screen pt-32" style={{
        background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
      }}>
      
      <div className="text-white text-5xl font-semibold text-center uppercase ">
            Contact Us
          </div>
      <div className="h-100 p-20">
          <SignupForm />
      </div>
      <Footer />
    </div>
    </>
   );
}
 
export default Contact;