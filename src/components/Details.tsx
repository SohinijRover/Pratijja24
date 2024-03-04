import TextElement from "@/components/details/ListElement";
import Crousel from "@/components/details/Crousel";
import img1 from "/public/hero/img1.jpeg";
import img2 from "/public/hero/img2.jpeg";
import img3 from "/public/hero/img3.jpeg";
import EventDetail from "./EventDetail";

const Hero = () => {
  return (
    <>
      <div
        className="h-100 flex flex-col md:flex-row pt-32 md:pt-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(127,204,195,1) 0%, rgba(38,90,81,1) 30%, rgba(26,55,50,1) 70%, rgba(6,38,34,1) 100%)",
        }}
      >
        <div className="flex-1 flex flex-col justify-center ps-5 pe-5">
          <div className="flex flex-col-reverse md:flex-row justify-center sm:gap-[30px] xl:gap-[50px] ">
            <div className="flex flex-col gap-8 md:gap-10 justify-center max-w-[700px] mt-6 md:mt-0">
              <EventDetail
                day="15"
                year="March, 2024"
                title="Day 1: Inception"
                paragraph="Prepare to be enthralled by a mesmerizing inaugural ceremony followed by a much awaited first round of debate! Let the minds clash and brilliance prevail!"
              />
              <EventDetail
                day="16"
                year="March, 2024"
                title="Day 2: Discourse"
                paragraph="Brace yourself for THREE riveting rounds of debates where your wit and conviction will be put to test, followed by the nerve-wrecking anticipation of debate breaks! Who will prevail? Only time will tell.
                In the meantime, you should feel free to indulge in the culinary camaraderie of our Grand Feast!"
              />
              <EventDetail
                day="17"
                year="March, 2024"
                title="Day 3: Epilogue"
                paragraph="Embarking on the thrilling climax of PRATIJJA v19, the battles of wits will reach their zenith on this day with the semifinals and finals round! Accompany us in crowning our champions in the award ceremony, as we draw the curtains in, marking the end of this majestic and unforgettable journey."
              />
            </div>
          </div>
        </div>
        <div className="flex-1 md:h-screen md:w-6/12 flex justify-center items-center">
          <Crousel thumb={[img1.src, img2.src, img3.src]} />
        </div>
      </div>


    </>
  );
};

export default Hero;