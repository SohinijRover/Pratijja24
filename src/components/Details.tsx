import TextElement from "@/components/details/ListElement";
import Crousel from "@/components/details/Crousel";
import img1 from "/public/hero/img1.jpeg";
import img2 from "/public/hero/img2.jpeg";
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
            date={"15th"}
            month={"March, 2024"}
            desc={`Prepare to be enthralled by a mesmerizing inaugural ceremony followed by a much awaited first round of debate! Let the minds clash and brilliance prevail!`}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
          <TextElement
            date={"16th"}
            month={"March, 2024"}
            desc={`Brace yourself for THREE riveting rounds of debates where your wit and conviction will be put to test, followed by the nerve-wrecking anticipation of debate breaks! Who will prevail? Only time will tell.
            In the meantime, you should feel free to indulge in the culinary camaraderie of our Grand Feast!
            `}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
          <TextElement
            date={"17"}
            month={"March, 2024"}
            desc={`Embarking on the thrilling climax of PRATIJJA v19, the battles of wits will reach their zenith on this day with the semifinals and finals round! Accompany us in crowning our champions in the award ceremony, as we draw the curtains in, marking the end of this majestic and unforgettable journey.`}
            title={"KEYNOTE ADDRESS"}
          ></TextElement>
        </div>
        <div className="flex-1 md:h-screen md:w-6/12 flex justify-center items-center">
          <Crousel thumb={[img1.src, img2.src, img1.src]} />
        </div>
      </div>


    </>
  );
};

export default Hero;
