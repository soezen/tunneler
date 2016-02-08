/**
 * Created by rogge on 6/02/2016.
 */

var types = require('./fieldType');
var keys = types.keys;

function Map() {
    var fields = generateMap();

    function generateMap() {
        console.log('generating map');
        var width = 1000;
        var height = 750;
        var viewportWidth = 100;
        var viewportHeight = 100;
        var rows = [];

        for (var i = 0; i < height; i++) {
            var row = [];
            for (var j = 0; j < width; j++) {
                row.push(keys.NOTHING);
            }
            rows.push(row);
        }

        function put(location, type) {
            rows[location.y][location.x] = type;
        }

        function get(location) {
            return rows[location.y][location.x];
        }

        function randomSpot() {
            return {
                x: viewportWidth / 2 + random(width - viewportWidth),
                y: viewportHeight / 2 + random(height - viewportHeight)
            }
        }

        function random(max) {
            return Math.floor(Math.random() * max);
        }

        function viewport(minX, minY, maxX, maxY) {
            console.log('get viewport from (' + minX + ',' + minY + ') to (' + maxX + ',' + maxY + ')');
            // TODO use string instead of 2d array?
            var view = [];
            for (var i = minY; i < maxY; i++) {
                var row = [];
                for (var j = minX; j < maxX; j++) {
                    row.push(get({x: j, y: i}));
                }
                view.push(row);
            }
            return view;
        }

        function viewportAround(point) {
            return viewport(
                point.x - viewportWidth / 2,
                point.y - viewportHeight / 2,
                point.x + viewportWidth / 2,
                point.y + viewportHeight / 2);
        }

        return {
            randomSpot: randomSpot,
            viewportAround: viewportAround,
            put: put
        }
    }

    function placePlayer(player) {
        console.log('place player on map');
        var location = fields.randomSpot();
        console.log(location);
        placeTank(location);
        placeBase(location);
        return fields.viewportAround(location);
    }

    function placeTank(location) {
        var tankType = keys.nextTank();
        for (var i = location.y - 2; i < location.y + 2; i++) {
            for (var j = location.x - 2; j < location.x + 2; j++) {
                fields.put({ x: j, y: i }, tankType);
            }
        }
    }

    function placeBase(location) {
        placeWall(location);

        for (var i = location.y - 20; i <= location.y + 20; i++) {
            for (var j = location.x - 20; j <= location.x + 20; j++) {
                fields.put({x: j, y: i}, keys.BASE);
            }
        }
    }

    function placeWall(location) {
        var i;
        // top and bottom line
        var holeMin = location.x - 4;
        var holeMax = location.x + 4;
        var y1 = location.y - 12;
        var y2 = location.y + 12;
        for (i = location.x - 12; i <= location.x + 12; i++) {
            if (i <= holeMin || i >= holeMax) {
                fields.put({x: i, y: y1}, keys.WALL);
                fields.put({x: i, y: y1 + 1}, keys.WALL);
                fields.put({x: i, y: y2}, keys.WALL);
                fields.put({x: i, y: y2 - 1}, keys.WALL);
            }
        }

        // left and right line
        var x1 = location.x - 12;
        var x2 = location.x + 12;
        for (i = location.y - 12; i <= location.y + 12; i++) {
            fields.put({x: x1, y: i}, keys.WALL);
            fields.put({x: x1 + 1, y: i}, keys.WALL);
            fields.put({x: x2, y: i}, keys.WALL);
            fields.put({x: x2 - 1, y: i}, keys.WALL);
        }
    }

    return {
        placePlayer: placePlayer
    }
}

exports.Map = Map;