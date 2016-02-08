/**
 * Created by rogge on 7/02/2016.
 */
var drawFunction = (function() {
    var typeKeys = {
        NOTHING: 0,
        TANK: 1,
        BASE: 2,
        PATH: 3,
        WALL: 4
    };

    var drawFunctions = {};
    drawFunctions[typeKeys.NOTHING] = drawNothing;
    drawFunctions[typeKeys.TANK] = drawTank;
    drawFunctions[typeKeys.BASE] = drawBase;
    drawFunctions[typeKeys.PATH] = drawPath;
    drawFunctions[typeKeys.WALL] = drawWall;

    function drawNothing(context) {

    }

    function drawTank(context, x, y) {
        console.log('drawing tank');
        context.fillStyle = 'darkorange';
        context.fillRect(x, y, 1, 1);
    }

    function drawBase(context, x, y) {
        console.log('drawing base');
        context.fillStyle = 'lightsteelblue';
        context.fillRect(x, y, 1, 1);
    }

    function drawWall(context, x, y) {
        console.log('drawing wall')
        context.fillStyle = 'white';
        context.fillRect(x, y, 1, 1);
    }

    function drawPath(context) {

    }

    function drawFunctionForType(type) {
        return drawFunctions[Math.floor(type)];
    }

    return {
        forType: drawFunctionForType
    }
})();
