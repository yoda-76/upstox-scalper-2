import React from 'react'

export default function HowItWorks() {
  return (
    <div className='bg-purple-600 w-[100%] flex justify-center p-5'>
        <span className='text-2xl font-bold'>Go see the Docs to see how to use it.</span>
        <button onClick={() => { window.open("https://documenter.getpostman.com/view/27161625/2sA35A6jeK", "_blank"); }} className='ml-10 bg-white text-purple-600 text-xl font-bold hover:shadow-lg shadow-black px-4 py-1 rounded-lg'>Docs</button>

    </div>
  )
}
