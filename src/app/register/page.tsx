"use client"
import React, { useState } from 'react';
import Form1 from './form1';
import Form2 from './form2';
import Navbar from '@/components/Navbar';
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
        return <Form1 />;
      case 4:
        return <Form1 />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen relative">
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
      </div>
    </>
  );
};

export default register;
