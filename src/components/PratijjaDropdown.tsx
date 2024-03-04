"use client";
import Link from "next/link";

const navItems = [

  {
    name: "Cross Team Form",
    link: "https://forms.gle/z2QnmF2TYoa253EA6",
  },
  {
    name: "IA / SA Application",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdRtLMKyF8vQHeKfm6TwhmnfrQvHHQb7rDlVYoalkpTPnZehQ/viewform?usp=send_form",
  },
  {
    name: "Institutional Team Form",
    link: "https://forms.gle/ysdwLS1TYA8QLHYJ9",
  },
  {
    name: "Independent Adjudicator Form",
    link: "https://forms.gle/FkJ6KQ8cmWFk5VPa7",
  },
];

const PratijjaDropdown = () => {
  return (
    <div className="transition-all duration-400 absolute px-4 text-center bg-black rounded-lg left-1/2 translate-x-[-50%] py-2 mt-4 text-white hidden group-hover:block ease-in-out min-w-min">
      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#2b933e] absolute -translate-y-[100%] left-1/2 translate-x-[-50%] "></div>
      {navItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div
            className={`py-2 px-4 whitespace-nowrap 
              ${index === navItems.length - 1 ? "border-none" : "border-b border-white border-opacity-50"}
            `}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PratijjaDropdown;
