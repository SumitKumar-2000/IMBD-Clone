const express = require('express')
const app = express();
const dbConnect = require("./DB_Connect")
const MovieRoutes = require("./routes/MoviesRoutes")
const cors = require('cors')
require('dotenv').config()

dbConnect();

app.use(express.json())
app.use(cors())

app.use("/api",MovieRoutes)

app.get('/', (req,res) => {
    res.send("Server started...")
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("server is listening on port: http://localhost:8080"))