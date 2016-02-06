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
        map.placePlayer(player);
        return map.viewportFor(player);
    }

    return {
        addPlayer: addPlayer
    }
}

function Player() {
    var tank = new Tank();
    var base = new Base();
}

function Tank() {

}

function Base() {

    function draw(context) {

    }

    return {
        draw: draw
    }
}

exports.Game = Game;