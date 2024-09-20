import * as React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDirectionsWalk } from "react-icons/md";

const Content = ({title,subtitle}) => {
    return(
        <div className="xl:h-56 xl:mx-6 xl:rounded-lg w-full h-[369px] bg-hero bg-cover bg-center relative flex flex-col justify-end">
            <div className="absolute inset-0 bg-[#00000052] bg-opacity-32 rounded-lg"></div>
            <div className="relative ml-5 text-white text-5xl font-roboto">
                {title}
            </div>
            <div className="relative ml-5 text-[#F5EFF7] text-xs font-roboto">
                {subtitle}
            </div>
            <div className="relative w-full h-8 mt-2 ml-5 flex gap-2 mb-6 ">
                <div className="flex items-center w-44 bg-[#F7F2FA] rounded-lg drop-shadow-md cursor-pointer hover:bg-[#FCF6FFD1]/[.82]">
                    <FaCalendarAlt className="size-4 ml-2" color="#65558F"/>
                    <div className="font-bold font-roboto ml-2 text-sm">Add to my itinerary</div>
                </div>
                <div className="flex items-center w-44 bg-[#F7F2FA] rounded-lg drop-shadow-md cursor-pointer hover:bg-[#FCF6FFD1]/[.82]">
                    <MdDirectionsWalk className="size-4 ml-2" color="#65558F"/>
                    <div className="font-bold font-roboto ml-2 text-sm">12 mins from hotel</div>
                </div>
            </div>
        </div>
    );
};
export default Content;