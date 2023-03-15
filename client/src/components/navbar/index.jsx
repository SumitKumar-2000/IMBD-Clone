import React from 'react'

const Navbar = ({search, setSearch}) => {
  return (
    <div className='w-full h-full bg-black flex justify-between items-center p-2 md:p-4'>
      <div className='md:leading-10 leading-8 bg-yellow-400 md:w-[100px] w-[60px] text-xl md:text-3xl font-bold text-center'>
        IMDB
      </div>
      <div className='bg-white md:w-[400px] w-[200px]'>
        <input 
            placeholder='Search movie' 
            type="search" 
            value={search}  
            className='focus:outline-none bg-white px-2 w-full rounded-md md:leading-10 leading-8 text-sm'
            onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Navbar
