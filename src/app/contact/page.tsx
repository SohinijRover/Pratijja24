import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignupForm from "./contactus";

const Contact: React.FC = () => {
  return ( 
    <div 
    className="min-h-100 w-full mt-32" >
      <Navbar />
      <div className="text-indigo-500 text-5xl font-semibold text-center uppercase ">
            Contact Us
          </div>
      <div className="h-100 p-20">
          <SignupForm />
      </div>
      <Footer />
    </div>
   );
}
 
export default Contact;