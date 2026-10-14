require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const dns = require('dns');

const app = express();

app.use(express.json());
const PORT = process.env.PORT

dns.setServers(['8.8.8.8', '8.8.4.4']) 

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongo db connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDb : ${error.message}`)
        process.exit(1)
    }
}

connectDB();


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my Api | running healthy"
    })
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})