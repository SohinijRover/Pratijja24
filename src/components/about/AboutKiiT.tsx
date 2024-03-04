"use client"
import React from 'react';
import Image from 'next/image';
import kiitLogo from '../../assests/KIIT Logo-1kl 1.png';
import kissLogo from '../../assests/image 9.png';

export default function AboutKiiT() {
  return (
<div
      className="p-4 md:p-12 flex flex-col md:flex-row gap-4 md:gap-20"
      style={{
        background: 'linear-gradient(to bottom, #265A51 0%, #265A51 30%, #1A3732 70%, #062622 100%)',
      }}
    >
      {/* About KIIT */}
      <div className="text-justify flex-1">
        <div className="h-20 flex justify-center">
          <Image src={kiitLogo} alt="kiit-logo" height={80} />
        </div>
        <div className="text-3xl font-bold flex justify-center py-5">ABOUT KIIT</div>
        <div className="text-base md:text-lg pt-4 md:pt-8">
        Kalinga Institute of Industrial Technology - Deemed to be University is one of the premier universities in the eastern part of the country offering more than 200 academic programmes in diverse fields of education. It was established as a polytechnic institute in 1992-93. However, with 1997 as its base year, the engineering college was set up. It was conferred with Deemed to be University status by the Ministry of Human Resources Development, Government of India in 2004. 

In 2016, it was re-accredited with an ‘A’ Grade by the National Accreditation and Assessment Council (NAAC), India. It has also been conferred with category ‘A’ status by the Ministry of Human Resources Development, Government of India in the same year. Eight undergraduate engineering courses have been accredited by the NBA (Washington Accord) in the year 2018-19. The university has 20 thriving campuses with more than 30,000 students from all over India and 55 countries around the globe. It has achieved several milestones in a short span which includes the Institute of Eminence tag.

KIIT has joined the select league of 10 public and 10 private universities which would be developed as world-class institutions under the scheme of the Govt. of India to put the country on the global education map. It is the only self-financing university in Eastern India to be ranked by the Times Higher Education World University Rankings 2019 and QS BRIC World University Rankings. It won the ‘THE Awards Asia’ 2020 declared by the Times Higher Education (THE) on 17th November 2020. It is the first university to get the Internationalization Strategies Advisory Service (ISAS) Badge. It also leads the rankings in the first place - Ranked 1 for the ‘India Fights Corona award & the certificate of excellence for the same. KIIT University was unanimously selected by the AICTE Government of India for its outstanding contributions to post-COVID-19 schemes & measures against the spread of COVID-19 across India. The recognition, which marks the achievement of milestones along the journey of internalization, was given to KIIT at the award ceremony held during the Internalization Association of University (IAU) 2019. KIIT has also been ranked No.1 by Atal Ranking of Institutions on Innovation achievements.

KIIT is committed to high-quality research and provides a supportive environment for the students along with a wide scope of programs starting from Kindergarten to Post-Graduation.

        </div>
      </div>

      {/* About KISS */}
      <div className="text-justify flex-1">
        <div className="h-20 flex justify-center">
          <Image src={kissLogo} alt="kiss-logo" height={80} />
        </div>
        <div className="text-3xl font-bold flex justify-center py-5">ABOUT KISS</div>
        <div className="text-base md:text-lg pt-4 md:pt-8">
        Kalinga Institute of Social Sciences (KISS) is a residential school that offers free education, accommodation, medical care, and vocational, athletic, and artistic training to 60,000 indigenous children. Kalinga Institute of Social Sciences (KISS) is home to a thriving community of 60,000 individuals. This includes 30,000 students based in Bhubaneswar, as well as 15,000 alumni and a further 15,000 students who are located in 10 satellite centers throughout Odisha. These students belong to 62 different tribal groups. KISS was founded in 1992 with only 125 students. This organization has used education to fight poverty for 27 years and is committed to improving the lives of tribal children.

KISS, the world-renowned educational institution, has achieved an unprecedented feat by being recognized as the first and only university exclusively for tribal communities, as declared by the Ministry of Human Resources Development, Government of India. Through this remarkable achievement, the institution demonstrates its commitment to providing unparalleled education and empowering tribal communities. KISS excels in education, evident from this recognition. Since 2015, it has held Special Consultative Status with the Economic and Social Council (ECOSOC), the highest recognition for a non-government organization from the United Nations. Notable accolades include the Champion Level-Platinum Certification for NGO Transparency by GuideStar India in 2016 and being listed among the top 223 NGOs globally and the 10 best NGOs in India by NGO Advisor in 2016.

KISS aligns with the UN SDGs, educating 200,000 indigenous children in the coming decade. It's expanding to 10 states supported by state governments, intending to cover all 30 districts of Odisha. Indigenous control prioritizes tribal culture and traditions, ensuring its success.

KISS has produced 5,000+ successful athletes and partnered with UNESCO, UNICEF, UNFPA, and the US Federal Government. It's been visited and appreciated by Heads of State, Ambassadors from 70 countries, and 12 Nobel Laureates. The institute's achievements have garnered widespread coverage in leading national and international media outlets, such as National Geographic, Time, Wall Street Journal, South China Morning Post, Readers' Digest, Asia Post, and the Public Broadcasting Service (PBS).

        </div>
      </div>
    </div>
  );
}
