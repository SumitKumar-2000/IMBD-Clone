import React from 'react'

const FilterSection = ({setFilterGenre, filterGenre}) => {

  const genreOptions = [
    {genre: "Action"},
    {genre: "Ramance"},
    {genre: "Fantacy"},
    {genre: "Drama"},
    {genre: "Crime"},
    {genre: "Adventure"},
    {genre: "Thriller"},
    {genre: "Sci-fi"},
    {genre: "Music"},
    {genre: "Family"},
  ]  

  const handleChange = (e) =>{
    const {value, checked} = e.target;
    if(checked){
      setFilterGenre(prev => [...prev,value])
    } else {
      setFilterGenre(prev => prev.filter(val => val !== value))
    }

    console.log("filter genre: ", filterGenre)
  }

  return (
    <div className='w-full h-[85%] border border-black rounded-br-lg p-4 flex flex-col items-center'>    
        <div className='text-xl font-bold mb-4'>
          Filter by Genre
        </div>
        <div>
          {
            genreOptions.map((genre,idx) => {
              return (
                <div key={idx} className="flex items-center gap-2 mb-1">
                  <input 
                    value={genre.genre}
                    type="checkbox" 
                    className='accent-yellow-400 h-4 w-4'
                    onChange={(e)=>handleChange(e)}
                  /> 
                  <span className='text-lg'>{genre.genre}</span>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default FilterSection
