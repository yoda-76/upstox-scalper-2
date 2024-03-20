import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className='rounded-lg flex flex-col  items-center border-2 border-white bg-purple-400 w-[24%] h-[60%] mb-8 shadow-xl shadow-black'>
        <img />
        <div className='text-3xl font-semibold '>{props.heading}</div>
        <div className='text-xl text-center'>{props.exp}</div>
    </div>
  )
}
