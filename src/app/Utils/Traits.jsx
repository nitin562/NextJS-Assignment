"use client";
import React, { useState } from 'react'

export default function Traits() {
    const Traits=["Adventurous","Clean","Good Listener","Honest","Humorous","Inspiring","Kind","Knowledgable","Non-Judgemental","Spontaneous","Talkative","Thoughtful","Trustworthy"]
    const [select, setselect] = useState({})
    const HandleSelect=(index)=>{
        return ()=>{
            if(select[index]===true){
                setselect(prev=>{
                    let newObj={...prev}
                    newObj[index]=false
                    return newObj
                })
            }
            else{
                setselect(prev=>{
                    let newObj={...prev}
                    newObj[index]=true
                    return newObj
                })
            }
        }
    }
  return (
    <div className='w-full flex flex-wrap gap-x-4 my-2 gap-y-2 '>
        {Traits.map((e,i)=>{
            return <div className={`${select[i]===true?"bg-green-400":"bg-stone-200" } transition-all duration-300 p-2 rounded-full cursor-pointer`} key={i} onClick={HandleSelect(i)}>
                <p className={`${select[i]===true?"font-bold":"font-[300]"} transition-all duration-300`}>{e}</p>
            </div>
        })}
    </div>
  )
}
