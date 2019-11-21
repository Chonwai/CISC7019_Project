'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = __importDefault(require('../utils/utils'));
var PageRank = /** @class */ (function() {
    function PageRank(graph, nodes, topic, maxIteration, d) {
        if (graph === void 0) {
            graph = [];
        }
        if (nodes === void 0) {
            nodes = [];
        }
        if (topic === void 0) {
            topic = [];
        }
        if (maxIteration === void 0) {
            maxIteration = 100;
        }
        if (d === void 0) {
            d = 0.85;
        }
        this.graph = [];
        this.nodes = [];
        this.maxIteration = 100;
        this.d = 0.85;
        this.rankingList = [];
        this.topicList = [];
        this.graph = graph;
        this.nodes = nodes;
        this.topicList = topic;
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
    PageRank.prototype.topN = function(N) {
        if (N === void 0) {
            N = 5;
        }
        var tempArr = [];
        var resultArr = [];
        tempArr = this.rankingList;
        for (var i = 0; i < N; i++) {
            var maxVal = 0;
            var maxPos = 0;
            var dataObject = {
                node: 0,
                topic: '',
                score: 0
            };
            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j] > maxVal) {
                    maxVal = tempArr[j];
                    maxPos = j;
                }
            }
            tempArr[maxPos] = 0;
            dataObject.node = maxPos;
            dataObject.score = maxVal;
            dataObject.topic = this.topicList[maxPos];
            resultArr.push(dataObject);
        }
        return resultArr;
    };
    PageRank.prototype.nodeInfo = function(position) {
        return this.graph[position];
    };
    return PageRank;
})();
exports.default = PageRank;
