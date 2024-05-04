import React from 'react'
export default function RatingComp({title,description,subComp,border=true}) {
  return (
    <div className={`w-full flex flex-col gap-y-2 cursor-default rounded-xl py-2 }`}>
      <p className='text-2xl font-bold font-["DIN_Pro"] text-black first-letter:text-pink-600 bg-emerald-300 w-fit p-2 rounded-lg '>{title}</p>
      <p className="text-md font-['Century_Gothic'] text-gray-300 font-semibold ">
        {description}
      </p>
      {subComp}
    </div>
  )
}
