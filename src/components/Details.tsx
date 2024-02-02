import TextElement from "@/components/details/ListElement";
import Crousel from "@/components/details/Crousel";
import mic from "/public/hero/mic.png";
const Hero = () => {
  return (
    <>
      <div
        className="h-screen flex"
        style={{
          background:
            "linear-gradient(180deg, rgba(80,78,123,1) 0%, rgba(80,78,123,0.5) 30%, rgba(80,78,123,0.5) 70%, rgba(80,78,123,1) 100%)",
        }}
      >
        <div className="w-6/12">
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
        <div className="w-6/12 flex flex-col justify-center content-center">
          <Crousel thumb={[mic.src,mic.src,mic.src]} />
        </div>
      </div>
    </>
  );
};

export default Hero;
