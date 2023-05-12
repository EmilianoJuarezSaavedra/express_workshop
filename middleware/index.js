module.exports = (req, res, next) => {
    return res.status(200).json( {code: 1, message: "Bienvenido al pokedex"} );
    // Tambien se puede hacer res.status(200).send("Bienvenido al Pokedex");
}