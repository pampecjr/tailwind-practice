import React from "react";

export function Button({Icon, text}){
    return(
    <button className="flex flex-row items-center gap-2 rounded-lg border-none p-2 ">
        <Icon color="purple" size="18px"/>
        <p className="m-0">{text}</p>
    </button>
    )
}
