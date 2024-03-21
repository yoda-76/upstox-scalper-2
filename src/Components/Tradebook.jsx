import React from 'react'

export default function Tradebook(props) {
  return (
    <div className='mt-2'>
        <div className='flex justify-around bg-slate-900 text-white'>
            <span>Symbol</span>
            <span>Time stamp</span>
            <span>Quantity</span> 
            <span>Transaction type</span> 
            <span>Status</span>
        </div>
        <div>
            orders : {JSON.stringify(props)}
        </div>
    </div>
  )
}
