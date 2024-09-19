import React from "react";
import background from "../assets/backgound.png"
import { Button } from "./button";
import { IoMdCalendar } from "react-icons/io";
import { FaWalking } from "react-icons/fa";

export function Header () {
    return(
        <div className="w-full h-56 bg-cover rounded-3xl flex flex-col justify-end p-6" style={{backgroundImage: `url(${background})`}}>
            <div className=" ">
                <h1 className="m-0 text-white">Title</h1>
                <p className="m-0 text-white">Subtitle</p>
                <div className="flex flex-row gap-2">
                    <Button Icon={IoMdCalendar} text="Add to my itinerary" />
                    <Button Icon={FaWalking} text="12 mins from hotel" />

                </div>
            </div>
        </div>
    )

}