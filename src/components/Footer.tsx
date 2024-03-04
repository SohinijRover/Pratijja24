import React from "react";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div id="footer" className="w-full h-full " 
      style={{
        background:
          "linear-gradient(180deg, rgba(6,38,34,1) 0%, rgba(26,55,50,1) 30%, rgba(38,90,81,1) 70%, rgba(127,204,195,1) 100%)",
      }}>
        <footer className=" md:mx-auto mx-2 px-4 py-6 rounded-lg">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <h3 className="text-2xl md:text-4xl text-center font-extrabold text-white pb-8">
                  CONTACT US
                </h3>
              </div>
              <div className="mt-4 flex justify-start">
                <div className="w-full rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="270"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720758235!2d85.81634771159072!3d20.35662091044425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1689966822541!5m2!1sen!2sin"
                    allowFullScreen
                    style={{ borderRadius: "30px" }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-6 ">
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-left">
                <h4 className="text-lg font-bold text-white">PHONE</h4>
                <p className="text-white">
                  <a href="tel: +916370226053">+91-6370226053 (Gourav Vardhan)</a>
                  <a href="tel: +916206939600">+91-6206939600 (Priyansh Middha)</a>
                  <a href="tel: +919752656760">+91-9752656760 (Ankit)</a>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Address</h4>
                <p className="text-white">Student Activity Centre</p>
                <p className="text-white">Campus 13 KIIT (Deemed to be University)</p>
                <p className="text-white">Bhubaneswar, Odisha-751024</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Email</h4>
                <p className="text-white">
                  <a href="mailto:kronicleofficial@gmail.com">kronicleofficial@gmail.com</a>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white text-center">Social Media</h4>
                <div className="flex items-center">
                  <FaFacebook style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a href="https://www.facebook.com/Kroniclekiit/" className="text-white">
                    Facebook
                  </a>
                </div>
                <div className="flex items-center">
                  <FaInstagram style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a href="https://www.instagram.com/kronicle_official/" className="text-white">
                    Instagram
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn style={{ fontSize: "xs", marginRight: "0.5rem" }} />
                  <a href="https://www.linkedin.com/company/kronicle/?originalSubdomain=in" className="text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-left md:text-right">
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
                <p>
                  <a href="#" className="text-white block">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white block">
                    Register
                  </a>
                </p>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-center md:text-left text-white-700 mt-4">© 2024 Pratijja v19. All rights reserved.</p>
              </div>
              <div className="flex gap-2 ">
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
