import TextElement from "@/components/details/ListElement";
import Crousel from "@/components/details/Crousel";
import mic from "/public/hero/mic.png";
const Hero = () => {
  return (
    <>
      <div
        className="h-100 flex flex-col md:flex-row pt-24 md:pt-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(127,204,195,1) 0%, rgba(38,90,81,1) 30%, rgba(26,55,50,1) 70%, rgba(6,38,34,1) 100%)",
        }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <TextElement
            date={"14"}
            month={"July, 2024"}
            desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
          <TextElement
            date={"14"}
            month={"July, 2024"}
            desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
          <TextElement
            date={"14"}
            month={"July, 2024"}
            desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
        </div>
        <div className="flex-1 md:h-screen md:w-6/12 flex justify-center items-center">
          <Crousel thumb={[mic.src, mic.src, mic.src]} />
        </div>
      </div>


    </>
  );
};

export default Hero;
