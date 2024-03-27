import React, { useEffect } from 'react'

export default function Orderbook(props) {
  return (
    <div className='mt-2  scroll-auto'>
        <div>{props.rr}</div>
        <div className='grid grid-cols-5  justify-between bg-slate-900 text-white'>
            <span>Symbol</span>
            <span className=''>Time stamp</span>
            <span>Quantity</span> 
            <span>Transaction type</span> 
            <span>Status</span>
        </div>
        {Object.keys(props).map(i=>{
           return <div className='ml-1 grid grid-cols-5  justify-between bg-slate-800 text-white'>
            <span>{props[`${i}`].tradingsymbol}</span>
            <span>{props[`${i}`].order_timestamp}</span>
            <span>{props[`${i}`].quantity}</span>
            <span>{props[`${i}`].transaction_type}</span>
            <span>{props[`${i}`].status}</span>

        </div>
        })}
    </div>
  )
}
