'use strict';
var __extends =
    (this && this.__extends) ||
    (function() {
        var extendStatics = function(d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function(d, b) {
                        d.__proto__ = b;
                    }) ||
                function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var pagerank_1 = __importDefault(require('./pagerank'));
var TopicSensitivePageRank = /** @class */ (function(_super) {
    __extends(TopicSensitivePageRank, _super);
    function TopicSensitivePageRank(graph, nodes, topic, maxIteration, d) {
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
        var _this = _super.call(this) || this;
        // private topicList: Array<string> = [];
        _this.allTopic = [];
        _this.allTopicRanking = [];
        _this.S = 0;
        _this._targetTopic = 'Other';
        _this.targetNodesList = [];
        _this.graph = graph;
        _this.nodes = nodes;
        _this.topicList = topic;
        _this.maxIteration = maxIteration;
        return _this;
    }
    TopicSensitivePageRank.prototype.ranking = function() {
        var iteration = 0;
        while (iteration < this.maxIteration) {
            var newRankingList = [];
            var _loop_1 = function(i) {
                var newItemWeight = 0;
                var edgeByNodes = [];
                for (var j = 0; j < this_1.graph.length; j++) {
                    if (this_1.graph[j].indexOf(i) >= 0) {
                        edgeByNodes.push(j);
                    }
                }
                for (var k = 0; k < edgeByNodes.length; k++) {
                    newItemWeight +=
                        this_1.rankingList[edgeByNodes[k]] / this_1.graph[edgeByNodes[k]].length;
                }
                if (
                    this_1.targetNodesList.find(function(node) {
                        return node == i;
                    }) != undefined
                ) {
                    newItemWeight = newItemWeight * this_1.d + (1 - this_1.d) * (1 / this_1.S);
                } else {
                    newItemWeight = newItemWeight * this_1.d + (1 - this_1.d) * (0 / this_1.S);
                }
                newRankingList.push(newItemWeight);
            };
            var this_1 = this;
            for (var i = 0; i < this.graph.length; i++) {
                _loop_1(i);
            }
            this.rankingList = newRankingList;
            if (iteration % 10 == 0) {
                console.log('Iteration: %s', iteration);
            }
            iteration++;
        }
    };
    TopicSensitivePageRank.prototype.calculateS = function() {
        var tempArr = [];
        for (var h = 0; h < this.topicList.length; h++) {
            if (this.topicList[h] == this._targetTopic) {
                tempArr.push(h);
                this.S++;
            }
        }
        this.targetNodesList = tempArr;
    };
    Object.defineProperty(TopicSensitivePageRank.prototype, 'searchTopic', {
        get: function() {
            return this._targetTopic;
        },
        set: function(value) {
            this._targetTopic = value;
        },
        enumerable: true,
        configurable: true
    });
    return TopicSensitivePageRank;
})(pagerank_1.default);
exports.default = TopicSensitivePageRank;
