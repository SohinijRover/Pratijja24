"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import Footer from "@/components/Footer";
import Link from "next/link";

const Register: React.FC = () => {
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
      <div
        className="w-full min-h-screen"
        style={{
          background:
            "linear-gradient(to bottom, #062622 0%, #265A51 30%, #265A51 70%, #062622 100%)",
        }}
      >
        <div className="pt-32 ">
          <h1 className="text-bold text-5xl text-pretty text-center pb-9">
            Registration Forms
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 pb-12">
            <Link href="https://forms.gle/z2QnmF2TYoa253EA6">
              <div className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]">
                Cross Teams Registration
              </div>
            </Link>
            <Link href="https://forms.gle/ysdwLS1TYA8QLHYJ9">
              <div className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]">
                Institutional Teams Registration
              </div>
            </Link>
            <Link href="https://forms.gle/FkJ6KQ8cmWFk5VPa7">
              <div className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]">
                Independent Adjudicator Registration
              </div>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRtLMKyF8vQHeKfm6TwhmnfrQvHHQb7rDlVYoalkpTPnZehQ/viewform?usp=send_form">
              <div className="rounded-full border-none mx-4 outline-none p-3 bg-gradient-to-t from-[#041019] to-[#507B77]">
                IA/SA Application
              </div>
            </Link>
          </div>
        </div>
        {renderForm()}
      </div>
      <Footer />
    </>
  );
};

export default Register;
