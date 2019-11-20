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
    function TopicSensitivePageRank(graph, topic, maxIteration, d) {
        if (graph === void 0) {
            graph = [];
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
        var _this = _super.call(this, graph, maxIteration) || this;
        _this.topicList = [];
        _this.allTopic = [];
        _this.allTopicRanking = [];
        _this.graph = graph;
        _this.maxIteration = maxIteration;
        _this.topicList = topic;
        return _this;
    }
    TopicSensitivePageRank.prototype.init = function() {};
    TopicSensitivePageRank.prototype.ranking = function() {};
    return TopicSensitivePageRank;
})(pagerank_1.default);
exports.default = TopicSensitivePageRank;
