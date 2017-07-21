'use strict';

// Calling dependencies
var express = require('express');
var pokemon = require('machinepack-pokemon');

var router = express.Router();

// Criando routes get
router.get('/Pokefind:pokemonId', function (req, res, next) {

   pokemon.getPokemon({
    id: req.params.pokemonId,
    }).exec({
        error: function (err) {

        },
        success: function (result) {
            res.json(result);
        }
    });

});


// Exporting Module
module.exports = router;