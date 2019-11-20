'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = __importDefault(require('../utils/utils'));
var PageRank = /** @class */ (function() {
    function PageRank(graph, maxIteration, d) {
        if (graph === void 0) {
            graph = [];
        }
        if (maxIteration === void 0) {
            maxIteration = 100;
        }
        if (d === void 0) {
            d = 0.85;
        }
        this.graph = [];
        this.maxIteration = 100;
        this.d = 0.85;
        this.rankingList = [];
        this.graph = graph;
        this.maxIteration = maxIteration;
        this.d = d;
    }
    PageRank.prototype.init = function() {
        for (var i = 0; i < this.graph.length; i++) {
            this.rankingList.push(1 / this.graph.length);
        }
    };
    PageRank.prototype.ranking = function() {
        var iteration = 0;
        while (iteration < this.maxIteration) {
            var newRankingList = [];
            for (var i = 0; i < this.graph.length; i++) {
                var newItemWeight = 0;
                var edgeByNodes = [];
                for (var j = 0; j < this.graph.length; j++) {
                    if (this.graph[j].indexOf(i) >= 0) {
                        edgeByNodes.push(j);
                    }
                }
                for (var k = 0; k < edgeByNodes.length; k++) {
                    newItemWeight +=
                        this.rankingList[edgeByNodes[k]] / this.graph[edgeByNodes[k]].length;
                }
                newItemWeight = newItemWeight * this.d + (1 - this.d) / this.graph.length;
                newRankingList.push(newItemWeight);
            }
            this.rankingList = newRankingList;
            if (iteration % 10 == 0) {
                console.log('Iteration: %s', iteration);
            }
            iteration++;
        }
    };
    Object.defineProperty(PageRank.prototype, 'rank', {
        get: function() {
            return this.rankingList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageRank.prototype, 'topWeight', {
        get: function() {
            var utils = new utils_1.default();
            var res = utils.getMaxAndPos(this.rankingList);
            return res;
        },
        enumerable: true,
        configurable: true
    });
    return PageRank;
})();
exports.default = PageRank;
