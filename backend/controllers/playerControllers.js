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


export const getPlayers = (req, res) => {
    //FUNCTION THAT FINDS ALL PLAYERS
    Player.find({},(err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });

};


//GET PLAYER BY ID
export const getPlayerById = (req, res) => {
    //FUNCTION THAT FINDS ALL PLAYERS
    Player.findById(req.params.PlayerID,(err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });

};


//UPDATE PLAYER
export const updatePlayer = (req, res) => {
    //FUNCTION THAT FINDS ALL PLAYERS
    Player.findOneAndUpdate({ _id: req.params.PlayerId}, req.body, {new: true}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });

};


export const deletePlayer = (req, res) => {
    //FUNCTION THAT FINDS ALL PLAYERS
    Player.remove({ _id: req.params.PlayerId},(err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Player successfully removed!" });
    });

};