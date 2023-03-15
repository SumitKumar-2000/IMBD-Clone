import React from 'react'

const ListViewSection = ({apiResponse}) => {

  return (
    <div className='h-[90%] w-full'>
      <div className='h-full overflow-y-scroll overflow-x-hidden border border-black p-1'>
        {
          apiResponse.movies?.map((movie,idx) => {
            return (
              <div key={idx} className='w-full rounded-sm shadow-sm border border-slate-300 bg-white mb-1 flex items-center justify-between p-2'>
                <div className='flex items-center md:w-[400px] w-[150px]'>
                  <div className='h-[100px] w-[80px]'>
                    <img 
                      src={movie.img} 
                      alt="movie img"
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='ml-2 md:text-lg text-xs font-medium'>
                    {movie.name}, {movie.year}
                  </div>
                </div>
                <div className='w-[50px] md:w-[200px]'>
                  {
                    movie.genre.map((gen,idx) => {
                      return <span key={idx} className='font-medium md:text-lg text-xs text-black'>
                        {gen}
                        {idx !== movie.genre.length -1 && " / "}
                      </span>
                    })
                  }
                </div>
                <div className='flex items-center gap-2'>
                  <span className='md:text-2xl text-yellow-400'>&#9733;</span>
                  <span className='md:text-lg text-xs font-medium'>{movie.rating}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListViewSection
