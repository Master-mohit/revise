import React, { useContext } from 'react'
import { mycontext } from '../contextStroe/Contexttt'

const ContextProcessing = () => {
    const {into, setinto} = useContext(mycontext)
    const intoHandler = () => {
        setinto(into * 2);
    }
  return (
    <div className='flex items-center flex-col justify-center gap-7 border-black'>
       <div className='mt-10  text-[3vw] text-black font-black border px-[6vw] py-12 border-zinc-800 rounded'>
        {into}
      </div>
      <div className='text-[30px] rounded border border-zinc-700 p-6 '>
        <button onClick={intoHandler}>Into✌️</button>
      </div>
    </div>
  )
}

export default ContextProcessing
