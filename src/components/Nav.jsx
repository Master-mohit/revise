import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center justify-between w-full h-[30px] bg-black font-semibold  p-10'>
        <div className='text-[30px] font-black text-white'>
            <h1>Welcome</h1>
        </div>
        <div className='text-zinc-500 flex gap-7 text-[20px] '>
            <Link to="/props"><h1 className='hover:text-white'>Props</h1></Link> 
            <Link to="/context"><h2 className='hover:text-white'>Context</h2></Link>
            <Link to="/api"><h3 className='hover:text-white'>Api</h3></Link>
        </div>
     </div>
  )
}

export default Nav
