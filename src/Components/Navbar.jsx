import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-black  w-[100%] h-20 p-2 '>
        <div className='text-purple-600 font-bold text-5xl' >XYZ...</div>
        <div className='text-purple-600 font-bold  w-3/4  flex justify-center  align-middle'>
            <ul className='flex justify-end text-xl w-[100%]  p-3'>
                <li className='mx-2 px-3 py-1'><a href='https://documenter.getpostman.com/view/27161625/2sA35A6jeK' target='_blank'>Docs</a></li>
                <li className='mx-2 px-3 py-1'><a href='/dashboard'>Dashboard</a></li>
                <li>
                    <button onClick={()=>{window.location.href = "/login";}} className='mx-2 px-2 py-1 bg-purple-600 text-xl text-white rounded'>Login</button>
                    <button onClick={()=>{window.location.href = "/register";}} className='mx-2 px-2 py-1 bg-purple-600 text-xl text-white rounded'>Signup</button>

                </li>

            </ul>
        </div>
    </div>
  )
}
