import React from 'react'

const ListViewSection = ({apiResponse}) => {

  return (
    <div className='h-[90%] w-full'>
      <div className='h-full overflow-y-scroll overflow-x-hidden border border-black p-1'>
        {
          apiResponse.movies?.map((movie,idx) => {
            return (
              <div key={idx} className='w-full rounded-sm shadow-sm border border-slate-300 bg-white mb-1 flex items-center justify-between p-2'>
                <div>
                  <div className='h-[100px] w-[80px]'>
                    <img 
                      src={movie.img} 
                      alt="movie img"
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div>
                  
                </div>
                <div>
                  
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
