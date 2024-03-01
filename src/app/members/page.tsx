import React from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Members = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-indigo-500 text-8xl font-semibold text-center">
          Members
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Members;
