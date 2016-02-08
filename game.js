/**
 * Created by rogge on 6/02/2016.
 */
    "use strict";
var Map = require('./field').Map;

function Game() {
    console.log('starting new game');
    var players = [];
    var map = new Map();

    function addPlayer() {
        console.log('new player joined game');
        var player = new Player();
        players.push(player);
        return map.placePlayer(player);
    }

    return {
        addPlayer: addPlayer
    }
}

function Player(name) {
    return {
        name: name
    };
}

exports.Game = Game;