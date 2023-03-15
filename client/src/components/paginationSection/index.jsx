import React from 'react'

const PaginationSection = ({apiResponse, setPage}) => {

  const {total,limit} = apiResponse;
  const pageCount = Math.ceil(total/limit);
  let arr = [];
  
  for(var i=0;i<pageCount;i++){
    arr.push(i+1);
  }

  return (
    <div className='h-[10%] w-full flex justify-center items-center gap-2 border-t-2 border-black bg-[#f5f5f5] z-10'>
      {
        arr.map(page => {
          return <button 
                  key={page} 
                  className="rounded-[50%] px-3 py-1 border-2 border-black hover:bg-yellow-400 focus:bg-yellow-400 font-bold md:text-base"
                  onClick={()=>setPage(page)}
                 >
                  {page}              
                 </button>
        })
      }
    </div>
  )
}

export default PaginationSection
