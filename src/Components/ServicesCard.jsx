import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className='rounded-lg flex flex-col  items-center border-2 border-white bg-white w-[24%] h-[50%] mb-8 shadow-xl shadow-black'>
        <img className='h-1/2 mb-3' src={props.imgUrl} />
        <div className='text-3xl font-semibold '>{props.heading}</div>
        <div className='text-xl text-center'>{props.exp}</div>
    </div>
  )
}
