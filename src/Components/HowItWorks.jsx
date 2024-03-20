import React from 'react'

export default function HowItWorks() {
  return (
    <div className='bg-purple-600 w-[100%] flex justify-center p-5'>
        <span className='text-2xl font-bold'>Go see the Docs to see how to use it.</span>
        <button onClick={()=>{window.location.href = "/docs";}} className='ml-10  bg-white text-purple-600 text-2xl font-bold shadow-md shadow-black px-4  py-1 rounded-lg'>Docs</button>
    </div>
  )
}
