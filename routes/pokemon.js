const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body); 
});

pokemon.get("/", async (req, res, next) => {
    const pkmn = await db.query("SELECT *  FROM pokemon");
     console.log(pkmn);
    return res.status(200).json(pkmn);
});

pokemon.get('/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id -1;

    if(id >= 0 && id < db.length) {
        return res.status(200).send(db[req.params.id -1]);
    }
    return res.status(404).send("pokemon No encontrado");
});

pokemon.get('/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    
    const pkmn = db.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;   //operador ternario es igual a un if
    });
    (pkmn.length > 0) ? res.status(200).send(pkmn) : res.status(404).send("Pokemon NO encontrado");  
});  

module.exports = pokemon;
    