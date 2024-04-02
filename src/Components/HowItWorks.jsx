import React from 'react'
import ClientVideo from './ClientVideo';

export default function HowItWorks() {
  return (
    <div className='bg-purple-600 w-[100%] flex flex-col justify-center p-5'>
        <div className='w-[100%] flex justify-center'><span className='text-2xl font-bold'>Go see the Docs to see how to use it.</span>
        <button onClick={() => { window.open("https://documenter.getpostman.com/view/27161625/2sA35A6jeK", "_blank"); }} className='ml-10 bg-white text-purple-600 text-xl font-bold hover:shadow-lg shadow-black px-4 py-1 rounded-lg'>Docs</button></div>
        <div className='w-[100%] flex justify-center pt-5'><span className='text-2xl font-bold'>See this video to know how our client works : </span>
        <button onClick={() => { window.open("https://www.loom.com/share/43365d79c33f4870a8fa60cf720e8149?sid=e9c9e482-4feb-4ba2-8da1-828fa35308c5", "_blank"); }} className='ml-10 bg-white text-purple-600 text-xl font-bold hover:shadow-lg shadow-black px-4 py-1 rounded-lg'>Video</button></div>
        {/* <ClientVideo/> */}
    </div>
  )
}
