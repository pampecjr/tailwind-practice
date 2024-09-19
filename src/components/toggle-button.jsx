import React, {useState} from "react";
import { FaCheck } from "react-icons/fa6";

export function ToggleButton(){
    const [isClicked, setIsClicked] = useState(false)
    function changeState(){
        setIsClicked(!isClicked)
    }
    return(
        <div className=" flex flex-row w-full justify-center py-6 ">
            <button className={`flex flex-row items-center gap-2 rounded-l-full px-10 border-gray-400 border-solid border-r-0 ${isClicked ? 'bg-purple-200' : null }`}
                onClick={changeState}
            >
                {isClicked? <FaCheck size={18}/> : <div className="w-4" />}
                <p> Label</p>
            </button>
            <button className={`flex flex-row items-center gap-2 rounded-r-full px-10 border-gray-400 border-solid ${isClicked ? null : 'bg-purple-200' }`}
                onClick={changeState}
            >
                <p>Label</p>
                {!isClicked? <FaCheck size={18}/> : <div className="w-4" />}
            </button>
        </div>
    )
}