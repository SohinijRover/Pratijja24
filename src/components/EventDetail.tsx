'use client'
 
type EventDetailProps = {
    day: number | string,
    year: string,
    title: string,
    paragraph: string,
}
 
const EventDetail = ({ day, year, title, paragraph }: EventDetailProps) => {
  return (
    <div className="flex gap-2 sm:gap-4 xl:gap-8 items-center p-4">
        <div className="rounded-full  lg:w-[132px] w-[95px] h-[95px] sm:w-[100px] sm:h-[100px] md:w-[115px] md:h-[115px] flex-shrink-0 lg:h-[132px] bg-white p-[2px]">
            <div className="h-full rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#093338] to-[#1A4D54]">
                <span className="text-2xl sm:text-3xl md:text-4xl x1A4D54l:text-4xl font-bold bg-white text-transparent bg-clip-text">{day}</span>
                <span className="text-xs lg:text-base">{year}</span>
            </div>
        </div>
        <div>
            <h1 className="text-xl sm:text-xl lg:text-2xl font-semibold">{title}</h1>
            <p className="text-[10px] md:text-sm md:mt-5 mt-1">{paragraph}</p>
            
        </div>
        
    </div>
  )
};
 
export default EventDetail;
