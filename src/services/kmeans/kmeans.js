'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = __importDefault(require('../utils/utils'));
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
    };
    KMeans.prototype.generateRandomCentersList = function() {
        for (var i = 0; i < this.k; i++) {
            this.centersList.push([Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)]);
        }
        console.log('Randomly generate ' + this.k + ' central points: \n', this.centersList);
    };
    KMeans.prototype.generateBetterCentersList = function() {
        var utils = new utils_1.default();
        for (var i = 0; i < this.k; i++) {
            var maxDistance = 0;
            var maxPos = 0;
            if (i == 0) {
                this.centersList.push(this.map[Math.floor(Math.random() * this.map.length)]);
            } else if (i == 1) {
                for (var j = 0; j < this.centersList.length; j++) {
                    for (var k = 0; k < this.map.length; k++) {
                        if (
                            utils.twoPointsDistance(this.centersList[j], this.map[k]) > maxDistance
                        ) {
                            maxDistance = utils.twoPointsDistance(this.centersList[j], this.map[k]);
                            maxPos = k;
                        }
                    }
                }
                this.centersList.push(this.map[maxPos]);
            } else if (i > 1) {
                var compareArr = [];
                for (var j = 0; j < this.centersList.length; j++) {
                    compareArr.push([]);
                    for (var k = 0; k < this.map.length; k++) {
                        compareArr[j].push(
                            utils.twoPointsDistance(this.centersList[j], this.map[k])
                        );
                    }
                }
                var maxSum = 0;
                for (var l = 0; l < this.map.length; l++) {
                    var tempSumDistance = 0;
                    for (var m = 0; m < this.centersList.length; m++) {
                        tempSumDistance += compareArr[m][l];
                    }
                    if (tempSumDistance > maxSum) {
                        maxSum = tempSumDistance;
                        maxPos = l;
                    }
                }
                this.centersList.push(this.maps[maxPos]);
            }
        }
        console.log('Optimize generate ' + this.k + ' central points: \n', this.centersList);
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
            iteration++;
            this.updateCenters(tempClustersList);
            this.updateCluster(tempClustersList);
        }
    };
    KMeans.prototype.updateCenters = function(clustersList) {
        for (var i = 0; i < clustersList.length; i++) {
            var meanX = 0;
            var meanY = 0;
            for (var j = 0; j < clustersList[i].length; j++) {
                meanX += this.map[clustersList[i][j]][0];
                meanY += this.map[clustersList[i][j]][1];
            }
            meanX = meanX / clustersList[i].length;
            meanY = meanY / clustersList[i].length;
            this.centersList[i][0] = meanX;
            this.centersList[i][1] = meanY;
        }
    };
    KMeans.prototype.updateCluster = function(clustersList) {
        this.clustersList = clustersList;
    };
    Object.defineProperty(KMeans.prototype, 'clusters', {
        get: function() {
            return this.clustersList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KMeans.prototype, 'centers', {
        get: function() {
            return this.centersList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KMeans.prototype, 'maps', {
        get: function() {
            return this.map;
        },
        enumerable: true,
        configurable: true
    });
    return KMeans;
})();
exports.default = KMeans;
