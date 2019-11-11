'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Map = /** @class */ (function() {
    function Map() {
        this.map = [];
        this.amount = 0;
    }
    Map.prototype.addNode = function(x, y) {
        this.map.push([x, y]);
        this.amount++;
    };
    Object.defineProperty(Map.prototype, 'maps', {
        get: function() {
            return this.map;
        },
        enumerable: true,
        configurable: true
    });
    return Map;
})();
exports.default = Map;
