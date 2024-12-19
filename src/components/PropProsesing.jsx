import React, { useState } from 'react'
import PassingProps from './PassingProps'

const PropProsesing = () => {
    const [count, setcount] = useState(0)
  return (
    <div className='flex items-center flex-col justify-center gap-7 border-black'>
       <PassingProps pass ={count}/>
      <div className='text-[30px] rounded border border-zinc-700 p-6 '>
        <button onClick={()=> setcount(count + 1)}>Count❕</button>
      </div>
    </div>
  )
}

export default PropProsesing
