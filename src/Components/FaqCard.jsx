import React from 'react'

export default function FaqCard(props) {
  return (
    <div className='text-white flex flex-col  mb-4'>
        
        <div className='text-2xl font-semibold mb-2'>{props.q}</div>
        <div>{props.a}</div>

    </div>
  )
}
