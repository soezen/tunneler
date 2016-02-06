/**
 * Created by rogge on 6/02/2016.
 */

var SHOW = true;
var HIDE = false;
var BOARD_ID = "board";

var socket = io();

$(document).ready(function() {
    waitingScreen(SHOW);
});

socket.on('viewport.update', function(view) {
    var context = document.getElementById(BOARD_ID).getContext('2d');
    view.items.forEach(function(item) {
        item.draw(context);
    });
    waitingScreen(HIDE);
});

function waitingScreen(show) {
    $('.loading').css('z-index', show ? 10 : -1);
}