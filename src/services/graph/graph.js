'use strict';
var Graph = /** @class */ (function() {
    function Graph() {
        this.nodes = [];
        this.edges = [];
        this.edgesNumber = 0;
        this.topics = [];
    }
    Graph.prototype.addNode = function(newNode, topic) {
        if (topic === void 0) {
            topic = '';
        }
        this.nodes.push(newNode);
        this.edges.push([]);
        this.topics.push(topic);
    };
    Graph.prototype.addEdge = function(from, to) {
        this.edges[from].push(to);
        this.edgesNumber++;
    };
    Object.defineProperty(Graph.prototype, 'graph', {
        get: function() {
            return this.edges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, 'nodeList', {
        get: function() {
            return this.nodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, 'topicList', {
        get: function() {
            return this.topics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, 'nodesAmount', {
        get: function() {
            return this.edgesNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Graph;
})();
