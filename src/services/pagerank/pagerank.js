'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var PageRank = /** @class */ (function() {
    function PageRank(graph, maxInteraction, d) {
        if (graph === void 0) {
            graph = [];
        }
        if (maxInteraction === void 0) {
            maxInteraction = 0;
        }
        if (d === void 0) {
            d = 0.85;
        }
        this.graph = [];
        this.maxInteraction = 100;
        this.d = 0.85;
        this.rankingList = [];
        this.graph = graph;
        this.maxInteraction = maxInteraction;
        this.d = d;
    }
    PageRank.prototype.init = function() {
        for (var i = 0; i < this.graph.length; i++) {
            this.rankingList.push(1 / this.graph.length);
        }
    };
    Object.defineProperty(PageRank.prototype, 'rank', {
        get: function() {
            return this.rankingList;
        },
        enumerable: true,
        configurable: true
    });
    return PageRank;
})();
exports.default = PageRank;
