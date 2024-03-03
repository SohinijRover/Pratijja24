import React from "react";

interface prop {
  title: string;
  desc: string;
  date: number;
  month: string;
}
const TextElement: any = (props: prop) => {
  return (
    <>
      <div className="flex gap-8 mx-8 my-8 flex-col sm:flex-row">
        <div className="text-center text-xl md:text-2xl flex-shrink-0 flex flex-col justify-center">
          <p>{props.date}</p>
          <p>{props.month}</p>
        </div>
        <div className="text-center md:text-justify max-w-md mx-auto">
          <h1 className="font-semibold text-xl md:text-2xl mb-2">{props.title}</h1>
          <p className="md:text-lg">{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default TextElement;
