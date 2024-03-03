import React from 'react';
import '../css/about.css';

export default function AboutPratijja() {
  return (
    <div className='aboutPratijja' style={{
      background: 'linear-gradient(to bottom, #062622 0%, #265A51 30%, #1A3732 70%, #265A51 100%)',
    }}>
      <div className='flex justify-center items-center text-4xl md:text-6xl pt-8 md:pt-12 font-bold text-white'>
        About Pratijja - 19.0
      </div>
      <div className='p-4 md:p-12 pt-4 md:pt-8 text-base md:text-lg text-white text-justify'>
        It is that time of the year again when KRONICLE, the debating and literary society of KIIT, welcomes you to join us in celebrating intellect, rhetoric, and eloquence. As PRATIJJA v19, our flagship event, is set to be a prestigious showcase of critical thinking, persuasive dialogue, and spirited discourse, we urge you to mark your calendars and prepare your debates for the 15th, 16th, and 17th of March 2024 for the largest Asian Parliamentary Debate tournament in Eastern India!<br/><br/>

        PRATIJJA promises to not just be a competition but rather a platform for people from diverse backgrounds to engage in spirited conversations on a myriad of topics. While tackling a diverse range of motions, PRATIJJA is set to be a comprehensive test of your debating prowess. The event embodies KRONICLE’s commitment to fostering intellectual curiosity and promoting meaningful dialogue.<br/><br/>

        Asian Parliamentary format of debate is dynamic and engaging and often mirrors real-world parliamentary proceedings. It requires participants to analyze complex issues, articulate compelling arguments, and strengthen teamwork. With PRATIJJA v19 serving as a perfect catalyst for cultivating a global perspective, KRONICLE extends a warm welcome to both experienced and amateur debaters and ensures exciting rounds, esteemed adjudicators, and a vibrant debating experience.
      </div>
    </div>
  );
}
