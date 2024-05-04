"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function Thumbs() {
    const [Select, setSelect] = useState(null)
    const HandleSelect=(position)=>{
    

        return ()=>{
            if(position===Select){
                setSelect(null)
            }
            else{
                setSelect(position)
            }
        }
    }
  return (
    <div className="w-full flex  gap-x-28 p-1 ">
      <div className="h-[3rem] items-center gap-x-4 flex  cursor-pointer" onClick={HandleSelect(1)} >
        <FontAwesomeIcon icon={faThumbsDown} className={`  ${Select===1?"text-green-500":"text-gray-400"} transition-all duration-200  text-4xl`}   />
        <p className={` m-auto font-bold ${Select===1?"text-green-500":"text-black"} transition-all duration-200`}>No</p>
      </div>
      <div className="h-[3rem]  gap-x-4 flex cursor-pointer" onClick={HandleSelect(2)}>
        <FontAwesomeIcon icon={faThumbsUp} className={`${Select===2?"text-green-500":"text-gray-400"} transition-all duration-200 text-4xl`} />
        <p className={`m-auto font-bold ${Select===2?"text-green-500":"text-black"} transition-all duration-200`}>Yes</p>
      </div>
    </div>
  );
}
