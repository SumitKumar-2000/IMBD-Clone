import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black flex justify-between items-center px-4 py-4 rounded-t-lg'>
      <div className='leading-10 bg-yellow-400 w-[100px] text-3xl font-bold rounded-md text-center'>
        IMDB
      </div>
      <div className='rounded-md bg-white w-[400px]'>
        <input 
            placeholder='Search movie' 
            type="search" 
            className='focus:outline-none bg-white px-2 w-full rounded-md leading-10'
        />
      </div>
    </div>
  )
}

export default Navbar
