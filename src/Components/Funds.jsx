import React from 'react'

export default function Funds(props) {
  return (
    <div className='mt-2'>
        <div className='flex justify-around bg-slate-900 text-white'>
            <span>Used Margin</span>
            <span>Available Margin</span>
            <span>National Cash</span> 
        </div>
        <div className='flex justify-around bg-slate-800 text-white'>
            <span>{props.equity.used_margin}</span>
            <span>{props.equity.available_margin}</span>
            <span>{props.equity.notional_cash}</span>
            
        </div>
    </div>
  )
}
