import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const Item = ({ image, title }) => {
    const [hoveredStar, setHoveredStar] = useState(-1);
  
    return (
      <div className=" px-4 py-3 hover:scale-105 transition-transform">
        <div className="w-full flex gap-4 border-x-0 border-t-0 border-b border-[#CAC4D0] border-solid">

            <div className="flex-shrink-0">
            <img
                className="w-16 h-16 object-cover rounded-md"
                src={image}
                alt="Imagem de exemplo"
                />
            </div>
            <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">{title}</div>
                <div
                className="flex space-x-1"
                onMouseLeave={() => setHoveredStar(-1)}
                >
                {[...Array(5)].map((_, index) => (
                    <RiStarSFill
                    key={index}
                    className={`text-xl ${
                        index <= hoveredStar ? "text-yellow-400" : "text-[#625B71]"
                        }`}
                    onMouseEnter={() => setHoveredStar(index)}
                    />
                    ))}
                </div>
            </div>
            <div className="text-sm text-gray-600">
                <div>Category • $$ • 1.2 miles away</div>
                <div>
                    Supporting line text lorem ipsum dolor sit amet, consectetur.
                </div>
            </div>
            </div>
            <div className="flex items-center">
                <CiHeart className="text-2xl text-gray-500 stroke-1 hover:text-red-500 transition-colors duration-300"/>
            </div>
        </div>
    </div>
  );
};

export default Item;
