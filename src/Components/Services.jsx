import React from 'react'
import ServicesCard from './ServicesCard'

export default function Services() {
    const servicesList=[
        {imgUrl:"", heading:"Algorithmic Trading",exp:"algomojo covers the full life cycle of algorithmic trading"},
        {imgUrl:"", heading:"Order Management",exp:"algomojo offers flexible order management for the Algo Orders."},
        {imgUrl:"", heading:"Strategies",exp:"algomojo provides a wide range of useful features to create quantitative trading strategies"},
        {imgUrl:"", heading:"Execution Algos",exp:"Using algomojo you can execute any order types in the market."},
        {imgUrl:"", heading:"Automation",exp:"Using algomojo you can reduce human intervention"},
        {imgUrl:"", heading:"Fast and Reliable",exp:"Runs multiple low latency strategies that trade in bunch of symbols at a time."},
        {imgUrl:"", heading:"Software",exp:"Supports multiple software platforms like Amibroker, Metratrader, Excel etc.,"},
        {imgUrl:"", heading:"Trading Terminal",exp:"Get all your trades, orders, positions and holdings with multiple watchlist"}
    ]
  return (
    <div className=' flex mb-20 flex-col h-[60vh] w-[90%] '>
        <div className='text-white my-4 mt-7 text-4xl font-bold '>Services</div>
        <div className='flex   flex-wrap justify-between '>
            {servicesList.map((s,i)=>{
                return <ServicesCard key={i} {...s} />
            })}
        </div>
    </div>
  )
}
