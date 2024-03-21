import React from 'react'

export default function IndexCard(props) {
  const clickHandler=()=>{
    props.onClick(props.index)
  }
  const classString=props.index==props.indexState?"bg-slate-950 hover:bg-slate-950 hover:cursor-pointer  my-2 rounded-2xl w-60 ":"bg-slate-800  hover:bg-slate-950 hover:cursor-pointer  my-2 rounded-2xl w-60 ";
  // console.log(props)
  return (
    <div  onClick={clickHandler} value={props.index} className={classString}>
        <div className='text-white'>{props.index}</div>

        <div className='text-white'>{props.ltp}</div>        
    </div>
  )
}
