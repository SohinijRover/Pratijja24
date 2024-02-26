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
      <div className="text-justify">
        <div className="h-20 flex justify-center">
          <Image src={kiitLogo} alt="kiit-logo" height={80} />
        </div>
        <div className="text-3xl font-bold flex justify-center py-5">ABOUT KIIT</div>
        <div className="text-base md:text-lg pt-4 md:pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore, at, ducimus eligendi ad fugiat consequatur inventore, magni repellat totam perspiciatis deserunt voluptatem sunt enim vero dolorum nesciunt dolor laudantium illo autem neque vitae? Doloribus minima reiciendis corporis corrupti quos provident sint voluptate similique rem eveniet ipsam cupiditate voluptas voluptatum possimus id autem pariatur sequi quo deleniti, illum quibusdam? Deserunt error maiores ex harum? Natus, odit sed in corrupti earum accusantium ad odio nisi nemo, fugiat voluptatum sapiente. Voluptatum quia, animi laboriosam natus labore explicabo quidem porro deleniti, laudantium hic beatae officia earum necessitatibus sunt voluptatem impedit, perspiciatis ipsa architecto.
        </div>
      </div>

      {/* About KISS */}
      <div className="text-justify">
        <div className="h-20 flex justify-center">
          <Image src={kissLogo} alt="kiss-logo" height={80} />
        </div>
        <div className="text-3xl font-bold flex justify-center py-5">ABOUT KISS</div>
        <div className="text-base md:text-lg pt-4 md:pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt, veritatis vero ratione delectus repellat nesciunt sunt aperiam, corporis ullam quos! Magnam quo qui illo doloremque ratione ipsa, architecto totam cum facere, sit labore beatae dolorum consequatur impedit recusandae dignissimos nostrum! Consectetur sapiente dolorem veritatis. Enim, aspernatur voluptate laborum sequi molestiae eaque iusto recusandae, sed omnis exercitationem saepe, animi excepturi unde dolore cum eveniet alias id accusamus qui. Iure tempore totam dolor optio id assumenda maxime fuga. Doloremque voluptatem error iste impedit sit placeat eligendi vero sint deserunt numquam quas, tenetur nobis voluptate neque illum reprehenderit quos, rerum vel! Cum.
        </div>
      </div>
    </div>
  );
}
