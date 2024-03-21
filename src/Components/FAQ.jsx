import React from 'react'
import FaqCard from './FaqCard'

export default function FAQ() {
    const FaqList=[
        {q:"What is XYZ...?",a:"XYZ... is an API-based Trading Platform to provide DIY (Do-It-Yourself) traders to build their trading strategies and automate in their own trading environment."},
        {q:"What are the services provided by XYZ...?",a:"XYZ... provided end to end requirements of an Algo trader right from Automated Trading Education, API connectivity to multiple brokers, Execution module and sample codes to multiple trading platforms, Datafeed to the various platforms, trading bridge, Datafeed API, Virtual servers, free strategy libraries, Code development, and community support."},
        {q:"Is the XYZ... Platform is Free to Access?",a:"Yes, XYZ... is free to access if the trading account is opened via XYZ.... If the trader already holds an existing account with the XYZ... supported broker and wish to continue with the same account then XYZ... platform pricing is applicable."},
        {q:"Will there be any free trial available?",a:"Yes, 7 days of free trial for existing broker clients. Those who open a trading account via XYZ... get lifetime access to XYZ... platform."},
        {q:"What is the trading platform support by the XYZ... Platform?",a:"XYZ... Supports Amibroker, Tradingview, Excel, Metatrader, Python, C# based Applications."},
        {q:"Who are the supported brokers?",a:"Currently, XYZ... Supports Angel Broking, Alice Blue, Fyers, Firstock, Samco, Tradejini, Upstox, Zebu, Zerodha"},
        {q:"Can you recommend which broker to open a trading account?",a:"We are broker-neutral and we like to provide a wide array of choices and the users of XYZ... can choose their own favorite brokers."},
        {q:"Does XYZ... provides any guarantee on returns?",a:"Absolutely Not. The trader has to take complete responsibility for their trading strategies. XYZ... will neither take any responsibility for the returns of traders."},
        {q:"How Secure is XYZ...?",a:"XYZ... provides enterprise-level security for the users and provides a resilient, secure, extensible, and scalable environment for the users"}

    ]
  return (
    <div className=' flex  flex-col  w-[90%] '>
        <div className='text-white my-4 mt-7 text-4xl font-bold '>Frequently Asked Questions</div>
        <div className='flex flex-col  flex-wrap justify-between '>
            {FaqList.map((s,i)=>{
                return <div><FaqCard key={i} {...s} />{i!=8&&<div className='h-[1px] w-[100%] my-6 bg-white'></div>}</div>
            })}
        </div>
    </div>
      )
}
