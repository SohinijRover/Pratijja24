import Image from 'next/image'
import React from 'react'

import founder from "../../assests/image 17.png"

export default function AboutFounder() {
    return (
      <div
        className='min-h-100 flex flex-col'
        style={{
            background: 'rgba(121, 114, 194, 0.1)',
          }}
      >
        <div className='text-4xl font-bold text-white flex justify-center py-8'>
          ABOUT FOUNDER
        </div>
        <div className='flex flex-col md:flex-row p-4 md:p-12 gap-8 md:gap-12 flex-1 overflow-hidden'>
          <div className='w-full md:w-1/2'>
            <Image src={founder} alt='founder' width={600} height={400} />
          </div>
          <div className='text-base md:text-lg text-white pt-4 md:pt-0'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
            1.10.33 of "de Finibus Bonorum Malorum" (The Extremes of Good and
            Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line
            of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the
            1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words.
          </div>
        </div>
      </div>
    );
  }