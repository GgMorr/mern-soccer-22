import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//CREATE MONGO CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//SETUP BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) =>
    res.send(`This application is running on ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);