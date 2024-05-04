"use client";
import React, { useState } from 'react'

export default function Star() {
    const [Star, setStar] = useState(-1)
    const WrapperForStateChange=(index)=>{
      return ()=>{
        if(index<=Star){
          //already clicked
          setStar(prev=>prev-1)
          return
        }
        setStar(prev=>prev+1)
      }
    }
  return (
    <div className="w-full flex gap-x-2 my-2 px-1">
        <div
          className={`w-12 h-12 outline-1 ${Star>=0?'bg-yellow-400':"bg-gray-300"} cursor-pointer transition-all duration-300`}
          onClick={WrapperForStateChange(0)}
          style={{
            clipPath:
              " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          }}
        />
        <div
          className={`w-12 h-12 outline-1 ${Star>=1?'bg-yellow-400':"bg-gray-300"} cursor-pointer transition-all duration-300`}
          style={{
            clipPath:
              " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          onClick={WrapperForStateChange(1)}

        />
        <div
          className={`w-12 h-12 outline-1 ${Star>=2?'bg-yellow-400':"bg-gray-300"} cursor-pointer transition-all duration-300`}
          style={{
            clipPath:
              " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          onClick={WrapperForStateChange(2)}

        />
        <div
          className={`w-12 h-12 outline-1 ${Star>=3?'bg-yellow-400':"bg-gray-300"} cursor-pointer transition-all duration-300`}
          style={{
            clipPath:
              " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          onClick={WrapperForStateChange(3)}

        />
        <div
          className={`w-12 h-12 outline-1 ${Star>=4?'bg-yellow-400':"bg-gray-300"} cursor-pointer transition-all duration-300`}
          style={{
            clipPath:
              " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          onClick={WrapperForStateChange(4)}

        />
      </div>
  )
}
