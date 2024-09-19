import React, { useState } from "react";
import imagem from "../assets/Image.png"
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export function ListItem () {
    const [dados, setDados] = useState({
        distance: '1.2 miles away',
    })
    
    return(
        <div className="flex flex-row w-full gap-4 p-3 border-white border-b-red-400  border-solid">
            <img className="h-20" src={imagem} alt="" />
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="m-0">List item</h1>
                        <div className=" flex items-center">
                            <IoStarSharp  />
                            <IoStarSharp  />
                            <IoStarSharp  />
                            <IoStarSharp  />
                            <IoStarSharp  />
                        </div>
                </div>
                <p className="m-0"> Category . $$ . {dados.distance}</p>
                <p className="m-0">Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <CiHeart size={24} />
        </div>
    )
}