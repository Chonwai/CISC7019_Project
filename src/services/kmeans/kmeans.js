'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var KMeans = /** @class */ (function() {
    function KMeans(map, k, maxIteration) {
        if (k === void 0) {
            k = 3;
        }
        if (maxIteration === void 0) {
            maxIteration = 100;
        }
        this.k = 3;
        this.map = [];
        this.clustersList = [];
        this.centersList = [];
        this.k = k;
        this.map = map;
        this.maxIteration = maxIteration;
    }
    KMeans.prototype.init = function() {
        for (var i = 0; i < this.k; i++) {
            this.clustersList.push([]);
        }
        this.generateCentersList();
    };
    KMeans.prototype.generateCentersList = function() {
        for (var i = 0; i < this.k; i++) {
            this.centersList.push([Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)]);
        }
        console.log(this.centersList);
    };
    KMeans.prototype.generateClusterList = function() {
        var res = [];
        for (var i = 0; i < this.k; i++) {
            res.push([]);
        }
        return res;
    };
    KMeans.prototype.clustering = function() {
        var iteration = 0;
        while (iteration < this.maxIteration) {
            var tempClustersList = this.generateClusterList();
            for (var i = 0; i < this.map.length; i++) {
                var minDistance = 999;
                var tempClusterNumber = 0;
                for (var j = 0; j < this.centersList.length; j++) {
                    var distance = 0;
                    distance = Math.sqrt(
                        Math.pow(this.map[i][0] - this.centersList[j][0], 2) +
                            Math.pow(this.map[i][1] - this.centersList[j][1], 2)
                    );
                    if (distance < minDistance) {
                        minDistance = distance;
                        tempClusterNumber = j;
                    }
                }
                tempClustersList[tempClusterNumber].push(i);
            }
            console.log(tempClustersList);
            iteration++;
            // this.updateCenters(tempClustersList);
        }
    };
    KMeans.prototype.updateCenters = function(clustersList) {
        for (var i = 0; i < clustersList.length; i++) {}
    };
    Object.defineProperty(KMeans.prototype, 'clusters', {
        get: function() {
            return this.clustersList;
        },
        enumerable: true,
        configurable: true
    });
    return KMeans;
})();
exports.default = KMeans;
