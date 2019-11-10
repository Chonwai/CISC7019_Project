"use strict";
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = [];
        this.edges = [];
        this.edgesNumber = 0;
        this.topicList = [];
    }
    Graph.prototype.addNode = function (newNode, topic) {
        if (topic === void 0) { topic = ''; }
        this.nodes.push(newNode);
        this.edges.push([]);
        this.topicList.push(topic);
    };
    return Graph;
}());
