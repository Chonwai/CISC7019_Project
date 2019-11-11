'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var KMeans = /** @class */ (function() {
    function KMeans(map, k) {
        if (map === void 0) {
            map = [];
        }
        if (k === void 0) {
            k = 3;
        }
        this.k = 3;
        this.map = [];
        this.clustersList = [];
        this.k = k;
        this.map = map;
    }
    KMeans.prototype.init = function() {
        for (var i = 0; i < this.k; i++) {
            this.clustersList.push([]);
        }
    };
    KMeans.prototype.clustering = function() {};
    Object.defineProperty(KMeans.prototype, 'clusters', {
        get: function() {
            return this.clusters;
        },
        enumerable: true,
        configurable: true
    });
    return KMeans;
})();
exports.default = KMeans;
