"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import contact from "/public/navbar/contact.png";
import Footer from "@/components/Footer";
const register: React.FC = () => {
  const [activeForm, setActiveForm] = useState<number | null>(null);

  const renderForm = () => {
    switch (activeForm) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return <Form4 />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen" style={{
        background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)',
      }} >

        <div className="pt-32 ">
          <h1 className="text-bold text-5xl text-pretty text-center pb-9">Registration Forms</h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 pb-12">
            <button
              className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]"
              onClick={() => setActiveForm(1)}
            >
              Cross Teams Registration
            </button>
            <button
              className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]"
              onClick={() => setActiveForm(2)}
            >
              Institutional Teams Registration
            </button>
            <button
              className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]"
              onClick={() => setActiveForm(3)}
            >
              Independent Adjudicator Registration
            </button>
            <button
              className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]"
              onClick={() => setActiveForm(4)}
            >
              IA/SA Application
            </button>

          </div>
        </div>
        {renderForm()}
      </div>
      <Footer />
    </>
  );
};

export default register;
