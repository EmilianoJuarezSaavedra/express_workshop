const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al pokedex");
});

app.get("/pokemon/all", (req, res, next) => {
    
    res.status(200);
    res.send(pokemon);

    //res.send("Hola: " + req.params.name);
    //console.log("Hola: " + req.params.name);
});

app.get('/pokemon/:id([0-9]{1,4})', (req, res, next) => {
    
    const id = req.params.id -1;
    if(id >= 0 && id < pokemon.length) {
        res.status(200);
    res.send(pokemon[req.params.id -1]);
    }
    else {
        res.status(404);
        res.send("Pokémon no encontrado")
    }
});

app.get('/pokemon/:name', (req, res, next) => {
    
    const name = req.params.name;
    for(i = 0; i < pokemon.length; i++) {
        if(name == pokemon[i].name) {
            
            res.status(200);
            res.send("Tu pokemon es: " + pokemon[i]);

        }
    }
    res.status(404);
    res.send("Pokemon llamado " + name +" NO existe");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});