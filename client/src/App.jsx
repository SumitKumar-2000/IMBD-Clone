import { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "./components/navbar";
import ListViewSection from "./components/listViewSection";
import PaginationSection from "./components/paginationSection";
import FilterSection from "./components/filterSection";
import SortSection from "./components/sortSection";

function App() {
  
  const [apiResponse, setApiResponse] = useState({})
  const [filterGenre, setFilterGenre] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get("https://imbd-clone-a6ni0vr97-sumitkumar-2000.vercel.app/api/movies", {
          params : {
            page : page,
            genre : filterGenre.join(","),
            search : search,
            limit : limit
          }
        })
        setApiResponse(data)
      } catch (error) {
        console.log("error: ",error);
      }
    })()
  },[page,search,limit,filterGenre])

  return (
    <div>
      <div className='flex flex-col md:h-[75vh] h-[100vh] md:max-w-[1200px] mx-auto md:translate-y-1/4 md:shadow-lg border-2 border-black'>
        <div className="h-[7%]">
          <Navbar search={search} setSearch={setSearch}/>
        </div>
        <div className="h-[93%]"> 
          <div className="w-full h-[16%] flex items-center">
            <FilterSection setFilterGenre={setFilterGenre} filterGenre={filterGenre}/>
          </div>
          <div className="w-full h-[84%]">
            <ListViewSection apiResponse={apiResponse}/>
            <PaginationSection apiResponse={apiResponse} setPage={setPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
