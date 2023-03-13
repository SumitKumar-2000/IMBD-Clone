import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const base_url = import.meta.env.BACKEND_URL;  
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
      } catch (error) {
        console.log("error: ",error);
      }
    })()
  },[])

  return (
    <div>
      hey
    </div>
  )
}

export default App
