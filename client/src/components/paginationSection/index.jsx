import React from 'react'

const PaginationSection = ({apiResponse}) => {

  const {total,limit} = apiResponse;
  const pageCount = Math.ceil(total/limit);
  let arr = [];
  
  for(var i=0;i<pageCount;i++){
    arr.push(i+1);
  }

  return (
    <div className='h-[10%] flex justify-center items-center gap-2 border border-black rounded-bl-lg'>
      {
        arr.map(page => {
          return <button key={page} className="rounded-[50%] border-2 border-black px-3 py-1 bg-yellow-400 font-bold">
              {page}              
          </button>
        })
      }
    </div>
  )
}

export default PaginationSection
