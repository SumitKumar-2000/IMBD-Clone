const mongoose = require("mongoose")

const dbConnect = () => {
    const connectionParams = {useNewUrlParser:true};
    mongoose.connect(process.env.DB_URL, connectionParams);

    mongoose.connection.on("connect", () => {
        console.log("Connected to db successfully");
    })

    mongoose.connection.on("error", (err) => {
        console.log("Error while connecting to database: ", err);
    })

    mongoose.connection.on("disconnect", () => {
        console.log("Mongodb connection disconnected");
    })
}

module.exports = dbConnect;