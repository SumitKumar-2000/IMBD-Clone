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
        const {data} = await axios.get("http://localhost:8080/api/movies", {
          params : {
            page : page,
            genre : filterGenre.join(","),
            search : search,
            limit : limit
          }
        })
          
        console.log("response: ", data);
        setApiResponse(data)
      } catch (error) {
        console.log("error: ",error);
      }
    })()
  },[page,search,limit,filterGenre])

  return (
    <div>
      <div className='flex flex-col h-[650px] max-w-[1200px] m-auto translate-y-1/4 rounded-xl shadow-lg border-2 border-black'>
        <Navbar/>
        <div className="h-full flex"> 
          <div className="h-full w-[75%]">
            <ListViewSection/>
            <PaginationSection apiResponse={apiResponse} />
          </div>
          <div className="h-full w-[25%]">
            <SortSection/>
            <FilterSection setFilterGenre={setFilterGenre} filterGenre={filterGenre}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
