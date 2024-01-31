"use client"
import React, { useState } from 'react';
import Form1 from './form1';
import Navbar from '@/components/Navbar';
import contact from "/public/navbar/contact.png";

const register: React.FC = () => {
  const [activeForm, setActiveForm] = useState<number | null>(null);

  const renderForm = () => {
    switch (activeForm) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form1 />;
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
    <div className="w-screen h-screen  [background:linear-gradient(180deg,rgba(120.7,114.35,193.73,0.2)_6.72%,rgba(217,217,217,0.2)_52.72%,rgba(76.59,40.06,193.94,0.2)_100%)]">
      <div className="top-36 h-screen w-screen flex flex-col items-center justify-center">
        <div>
        <button className="rounded-full border-none ms-5 outline-none p-3 m-20"
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
        
        <div>
          {renderForm()}
        </div>
      </div>
    </div>
  </>
  );
};

export default register;
