/**
 * Created by rogge on 6/02/2016.
 */

var SHOW = true;
var HIDE = false;
var BOARD_ID = "board";

var socket = io();
var viewportHeight = 100;
var viewportWidth = 100;

$(document).ready(function() {
    waitingScreen(SHOW);
});

socket.on('player.init', function(view) {
    var context = document.getElementById(BOARD_ID).getContext('2d');
    for (var i = 0; i < viewportHeight; i++) {
        for (var j = 0; j < viewportWidth; j++) {
            drawFunction.forType(Math.floor(view[i][j]))(context, j, i);
        }
    }
    waitingScreen(HIDE);
});

function waitingScreen(show) {
    $('.loading').css('z-index', show ? 10 : -1);
}