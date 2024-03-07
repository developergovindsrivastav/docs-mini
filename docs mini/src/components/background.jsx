import React from 'react'
import Foreground from './foreground'

const Background = () => {
  return (
    <div className=' overflow-scroll z-[1] bg-zinc-800 relative w-full h-screen    '>
        <h1 className=' pointer-events-none  text-zinc-600 absolute text-[200px] font-bold translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] '>Docs.</h1>
        <h1 className=' pointer-events-none text-md text-center text-zinc-500  p-5'>Document</h1>
        <Foreground/>
        
    </div>
  )
}

export default Background

