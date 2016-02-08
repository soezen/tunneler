/**
 * Created by rogge on 7/02/2016.
 */

var numberOfTanks = 0;
var typeKeys = {
    NOTHING: 0,
    TANK: 1,
    BASE: 2,
    PATH: 3,
    WALL: 4,
    nextTank: function() {
        numberOfTanks++;
        return this.TANK + (0.1) * numberOfTanks;
    }
};
exports.keys = typeKeys;