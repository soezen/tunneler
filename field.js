/**
 * Created by rogge on 6/02/2016.
 */

function Map() {
    var fields = generateMap();
    var type = {

    };

    function generateMap() {
        console.log('generating map');
        var width = 1000;
        var height = 750;
        var viewportWidth = 100;
        var viewportHeight = 100;

        function randomSpot() {
            return {
                x: viewportWidth / 2 + random(width - viewportWidth),
                y: viewportHeight / 2 + random(height - viewportHeight)
            }
        }

        function random(max) {
            return Math.floor(Math.random() * max);
        }

        return {
            randomSpot: randomSpot
        }
    }

    function placePlayer(player) {
        console.log('place player on map');
        return fields.randomSpot();
    }

    function viewportFor(player) {
        return {

        }
    }

    return {
        placePlayer: placePlayer,
        viewportFor: viewportFor
    }
}

exports.Map = Map;