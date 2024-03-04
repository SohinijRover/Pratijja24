import Image from 'next/image'
import React from 'react'

import founder from "../../assests/image 17.png"

export default function AboutFounder() {
    return (
      <div
        className='min-h-100 flex flex-col'
       style={{
          background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #1A3732 70%, #062622 100%)',
        }} 
      >
        <div className='text-4xl font-bold text-white flex justify-center py-8'>
          ABOUT FOUNDER
        </div>
        <div className='flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-12 flex-1 overflow-hidden'>
          <div className='w-full md:w-1/2'>
            <Image src={founder} alt='founder' width={1600} height={1400} className='h-80 w-80 me-72' />
          </div>
          <div className='text-base md:text-lg text-white pt-4 md:pt-0'>
          Professor Achyuta Samanta is a renowned figure in the fields of education, philanthropy, and social work. He is the visionary behind the esteemed Kalinga Institute of Industrial Technology (KIIT) and Kalinga Institute of Social Sciences (KISS), both globally recognized educational institutions. KIIT, an Institute of Eminence, stands out as a premier university in India and worldwide, with a diverse student body of over 30,000 individuals from across India and 53 other nations. Meanwhile, KISS provides a nurturing environment for 60,000 indigenous children, offering them education free of charge.<br /><br />

Beyond his contributions to education and tribal welfare, Prof. Samanta has made significant impacts in healthcare, rural development, and various cultural and societal domains. His journey from humble beginnings, growing up in poverty after losing his father at a young age, to achieving monumental success without any external support is truly remarkable.<br /><br />

Prof. Samanta has transformed his native village of Kalarabanka in Cuttack into a Smart Village and elevated the entire Manpur Panchayat into a model cluster of villages. He has been honored with numerous international, national, and state awards, including the highest civilian awards from Bahrain and Mongolia, as well as 52 honorary doctorate degrees from institutions worldwide. He holds the distinction of being the first Odia to serve as a member of both the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE). Additionally, he currently serves as a Member of Parliament (Lok Sabha) from Kandhamal, Odisha, and presides as the President of the Volleyball Federation of India.<br /><br />

As a social reformer, Prof. Samanta advocates for the "Art of Giving," a philosophy aimed at fostering global peace and happiness. Despite his numerous accomplishments, he maintains a humble lifestyle and remains dedicated to spreading joy and eradicating poverty, hunger, and illiteracy on a global scale.<br /><br />

          </div>
        </div>
      </div>
    );
  }