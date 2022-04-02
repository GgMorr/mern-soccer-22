import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/soccerRoutes";

//CREATE WEB SERVER
const app = express();
//VAR TO HOLD PORT
const PORT = 3000;

//MONGO CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//SETUP BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);


app.get('/', (req, res) =>
    res.send(`This application is running on port ${PORT}`)
);


app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);