import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-slate-900 w-[100%] text-white justify-center items-center flex flex-col'>
        <span className='font-semibold'>Contact Us</span>
        <span>Mail: yadvendras20@gmail.com</span>
        <div className='font-semibold'>Socials</div>
        <div className='m-3'>
            <a className=' px-2 py-1 rounded-md mr-4 bg-purple-600' href='https://linkedin.com/in/yadvendraS'>Linkedin</a>
            <a className=' px-2 py-1 rounded-md  bg-purple-600' href='https://github.com/yoda-76'>Github</a>
        </div>
    </div>  )
}
