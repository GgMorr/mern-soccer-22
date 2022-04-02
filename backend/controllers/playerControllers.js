import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel';

//CREATE PLAYER FROM PLAYER SCHEMA
const Player = mongoose.model('Player', PlayerSchema);

//CREATE CONTROLLERS THAT INTERACT WITH THE DB WHEN REQS ARE MADE TO THE API
export const addNewPlayer = (req, res) => {
    //VAR TO HOLD NEW PLAYER MODEL
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });

};