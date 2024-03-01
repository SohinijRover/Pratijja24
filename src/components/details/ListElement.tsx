import React from "react";

interface prop{
  title: string,
  desc: string,
  date: number,
  month: string
}
const TextElement:any = (props: prop) =>{
  return (
    <>
      <div className="text-white p-10">
        <div className="flex text-left  p-5 h-fit">
          <div className="mx-10 flex flex-col text-center justify-center">
            <label className="text-3xl">{props.date}</label>
            <label className="text-2xl w-fit text-nowrap">{props.month}</label>
          </div>
          <div className="mx-10 flex flex-col justify-between text-left h-full">
            <label className="text-3xl mb-5"> {props.title}</label>
            <label>{props.desc}</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default TextElement;