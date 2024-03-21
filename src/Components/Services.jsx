import React from 'react'
import ServicesCard from './ServicesCard'

export default function Services() {
    const servicesList=[
        {imgUrl:"https://algomojo.com/assets/images/algomojo-algotrade.png", heading:"Algorithmic Trading",exp:"algomojo covers the full life cycle of algorithmic trading"},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-order-management.png", heading:"Order Management",exp:"algomojo offers flexible order management for the Algo Orders."},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-strategy-management.png", heading:"Strategies",exp:"algomojo provides a wide range of useful features to create quantitative trading strategies"},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-strategy-management.png", heading:"Execution Algos",exp:"Using algomojo you can execute any order types in the market."},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-strategy-management.png", heading:"Automation",exp:"Using algomojo you can reduce human intervention"},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-fast.png", heading:"Fast and Reliable",exp:"Runs multiple low latency strategies that trade in bunch of symbols at a time."},
        {imgUrl:"https://algomojo.com/assets/images/algmojo-charts.png", heading:"Software",exp:"Supports multiple software platforms like Amibroker, Metratrader, Excel etc.,"},
        {imgUrl:"https://algomojo.com/assets/images/algomojo-trading.png", heading:"Trading Terminal",exp:"Get all your trades, orders, positions and holdings with multiple watchlist"}
    ]
  return (
    <div className=' flex mb-20 flex-col h-[90vh] w-[90%] '>
        <div className='text-white my-4 mt-7 text-4xl font-bold '>Services</div>
        <div className='flex h-[90%]   flex-wrap justify-between items-center '>
            {servicesList.map((s,i)=>{
                return <ServicesCard key={i} {...s} />
            })}
        </div>
    </div>
  )
}
