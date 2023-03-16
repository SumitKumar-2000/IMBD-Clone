import React from 'react'

const FilterSection = ({setFilterGenre, filterGenre}) => {

  const genreOptions = [
    // {genre: "All"},
    {genre: "Music"},
    {genre: "Crime"},
    {genre: "Drama"},
    {genre: "Family"},
    {genre: "Sci-fi"},
    {genre: "Action"},
    {genre: "Fantasy"},
    {genre: "Romance"},
    {genre: "Thriller"},
    {genre: "Adventure"},
  ]  

  const handleChange = (e) =>{
    const {value, checked} = e.target;
    if(checked){
      setFilterGenre(prev => [...prev,value])
    } else {
      setFilterGenre(prev => prev.filter(val => val !== value))
    }
  }

  return (
    <div className='w-full h-full border border-black flex flex-col justify-evenly px-2'>    
        <div className='md:text-lg font-bold'>
          Filter by Genre :
        </div>
        <div className='w-full flex items-center md:gap-2 gap-1 flex-wrap'>
          {
            genreOptions.map((genre,idx) => {
              return (
                <div key={idx} className="flex items-center w-[74px] md:w-[94px] gap-1">
                  <input 
                    value={genre.genre}
                    type="checkbox" 
                    className='accent-yellow-400 md:h-4 md:w-4'
                    onChange={(e)=>handleChange(e)}
                  /> 
                  <span className='md:text-lg text-sm'>{genre.genre}</span>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default FilterSection
