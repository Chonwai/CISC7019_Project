'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Map = /** @class */ (function() {
    function Map(width, height) {
        this.map = [];
        this.width = 30;
        this.height = 30;
        this.amount = 0;
        this.width = width;
        this.height = height;
    }
    Map.prototype.addNode = function(x, y) {
        if (x > this.width || y > this.height) {
            console.log('Error');
        } else {
            this.map.push([x, y]);
            this.amount++;
        }
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
