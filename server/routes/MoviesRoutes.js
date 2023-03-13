const router = require("express").Router();
const Movies = require("../model/MovieSchema");

router.get('/movies', async (req,res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        // let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All"
        
        genreOptions = [
            "Action",
            "Ramance",
            "Fantacy",
            "Drama",
            "Crime",
            "Adventure",
            "Thriller",
            "Sci-fi",
            "Music",
            "Family",
        ]

        genre === "All" ? (genre = [...genreOptions]) : (genre = req.query.genre.split(","));

        let movies = await Movies.find({name: {$regex: search, $options: "i"}})   
            .where("genre")
            .in([...genre])    
            .skip(page * limit)
            .limit(limit)

        const total = await Movies.countDocuments({ 
            genre: {$in: [...genre]}, 
            name: {$regex:search, $options: "i"} 
        })

        const response = {
            error: false,
            total,
            page:page+1,
            limit,
            genre: genreOptions,
            movies
        }

        res.status(200).send(response)
    } catch (err) {
        console.log("movie route err: ",err);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
})

module.exports = router;