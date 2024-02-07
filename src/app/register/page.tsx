"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import contact from "/public/navbar/contact.png";
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
      {/* <div className="w-screen h-screen relative">
        <div className="top-36 h-screen w-screen flex flex-col items-center justify-center relative z-10">
          <div className="relative z-1">
          <div>
            <button
              className="rounded-full border-none ms-5 outline-none p-3 m-20"
              style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              onClick={() => setActiveForm(1)}>Cross Teams Registration</button>
            <button
              className="rounded-full border-none ms-5 outline-none p-3 m-20"
              style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              onClick={() => setActiveForm(2)}>Institutional Teams Registration</button>
            <button
              className="rounded-full border-none ms-5 outline-none p-3 m-20"
              style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              onClick={() => setActiveForm(3)}>Independent Adjudicator Registration</button>
            <button
              className="rounded-full border-none ms-5 outline-none p-3 m-20"
              style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
              onClick={() => setActiveForm(4)}>IA/SA Application</button>
          </div>
            {renderForm()}
          </div>
        </div>
      </div> */}
      <div className="w-full min-h-screen">
        <div className="pt-32 flex flex-col md:flex-row justify-center gap-4 pb-12">
          <button
            className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#0c0a1e] to-[#6056d2]"
            onClick={() => setActiveForm(1)}
          >
            Cross Teams Registeration
          </button>
          <button
            className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#0c0a1e] to-[#6056d2]"
            onClick={() => setActiveForm(2)}
          >
            Institutional Teams Registration
          </button>
          <button
            className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#0c0a1e] to-[#6056d2]"
            onClick={() => setActiveForm(3)}
          >
            Independent Adjudicator Registration
          </button>
          <button
            className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#0c0a1e] to-[#6056d2]"
            onClick={() => setActiveForm(4)}
          >
            IA/SA Application
          </button>
        </div>
        {renderForm()}
      </div>
    </>
  );
};

export default register;
