import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between h-[60vh] w-[100%] bg-purple-500 px-16 '>
        <div className='flex flex-col justify-between align-bottom py-28 w-1/2 text-white'>
            <div className=' font-bold text-5xl'>XYZ...</div>
            <div className='  text-4xl'>Web Based FREE* API Algo Trading Execution Platform</div>
            <div className='font-semibold'>Place your strategy algo orders on Upstox using simple API calls using your coustom frontend like react, vew, etc, or any scripting language like JavaScript, python, c, etc.</div>
            {/* <div>
            <button className='mr-2 px-12 text-2xl py-1 bg-black text-purple-600 font-bold text-white rounded'>Login</button>
            <button className='mr-2 px-12 text-2xl py-1 bg-black text-purple-600 font-bold text-white rounded'>Login</button>
            <button className='mr-2 px-12 text-2xl py-1 bg-black text-purple-600 font-bold text-white rounded'>Login</button>
                
            </div> */}

        </div>
        <div className='py-8 w-1/2'><img src='	https://algomojo.com/assets/images/algomojo-site-head.png'/></div>
    </div>
  )
}
