import React, { useEffect, useState } from 'react'
import ColumnHeading from './ColumnHeading'
import Orderbook from './Orderbook'
import Funds from './Funds'
import Tradebook from './Tradebook'
import Positions from './Positions'

export default function Info() {
    const [info,setInfo]=useState("positions")
    const [positions, setPositions]=useState()
    const [orderbook, setOrderbook]= useState()
    const [tradebook, setTradebook]= useState()
    const [funds, setFundes]=useState()

    useEffect(()=>{
        try {
            ["get-positions","get-tradebook","get-orderbook","get-funds"].map(async i=>{
                try {
                    const response = await fetch(`https://projectsbyyoda.xyz/console/${i}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Accept":"/",
                            "token":window.sessionStorage.getItem("token")
                        }
                    });
                    
                    const data = await response.json();
                    if(i==="get-positions"){
                        setPositions(data.data)
                    }else if(i==="get-tradebook"){
                        setTradebook(data.data)
                    }else if(i==="get-orderbook"){
                        setOrderbook(data.data)
                    }else if(i==="get-funds"){
                        setFundes(data.data)
                    }
        
                } catch (error) {
                    console.error('Error:', error.message);
                }
            })


        } catch (error) {
            console.error('Error:', error.message);
        }
    },[])
    


    async function changeHandler(e){
        const i =e.target.id.split("-")
        setInfo(i[1])
    }
  return (
    <div>
        <div className=' flex justify-around '>
            <ColumnHeading id="get-positions" onClick={changeHandler} text="Positions"/>
            <ColumnHeading id="get-orderbook" onClick={changeHandler} text="Order Book"/>
            <ColumnHeading id="get-tradebook" onClick={changeHandler} text="Trade Book"/>
            <ColumnHeading id="get-funds" onClick={changeHandler} text="Funds"/>

        </div>
        <div>
            {info==="positions"&&<Positions {...positions}/>}

            {info==="tradebook"&&<Tradebook {...tradebook}/>}

            {info==="orderbook"&&<Orderbook {...orderbook}/>}
            {info==="funds"&&<Funds {...funds}/>}

        </div>
    </div>
  )
}
