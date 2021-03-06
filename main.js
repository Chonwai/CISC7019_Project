'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function(resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function(thisArg, body) {
        var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function() {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function(v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = __importDefault(require('./src/services/utils/utils'));
var graph_1 = __importDefault(require('./src/services/graph/graph'));
var pagerank_1 = __importDefault(require('./src/services/pagerank/pagerank'));
var map_1 = __importDefault(require('./src/services/map/map'));
var kmeans_1 = __importDefault(require('./src/services/kmeans/kmeans'));
var topicSensitivePageRank_1 = __importDefault(
    require('./src/services/pagerank/topicSensitivePageRank')
);
function initGraphCSV(data) {
    var graph = new graph_1.default();
    var utils = new utils_1.default();
    for (var i = 0; i < data.length; i++) {
        graph.addNode(i, utils.topicList[Math.floor(Math.random() * 16)]);
    }
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (data[i][j] === '1') {
                graph.addEdge(i, j);
            }
        }
    }
    return graph;
}
function initCluster() {
    var graph = new graph_1.default();
    graph.addNode(0, 'Null');
    graph.addNode(1, 'Null');
    graph.addNode(2, 'Null');
    graph.addNode(3, 'Null');
    graph.addNode(4, 'Null');
    graph.addNode(5, 'Null');
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(0, 4);
    graph.addEdge(1, 0);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    graph.addEdge(2, 1);
    graph.addEdge(2, 3);
    graph.addEdge(3, 2);
    graph.addEdge(3, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 0);
    graph.addEdge(4, 3);
    graph.addEdge(4, 5);
    graph.addEdge(5, 3);
    graph.addEdge(5, 4);
    return graph;
}
function project1() {
    return __awaiter(this, void 0, void 0, function() {
        var utils, data, graph, pagerank, topicSensitivePageRank;
        return __generator(this, function(_a) {
            switch (_a.label) {
                case 0:
                    utils = new utils_1.default();
                    data = [];
                    return [4 /*yield*/, utils.readCSVData('./src/data/Facebook_Data.csv')];
                case 1:
                    data = _a.sent();
                    graph = initGraphCSV(data);
                    console.log('Normal PageRank:');
                    pagerank = new pagerank_1.default(
                        graph.graph,
                        graph.nodeList,
                        graph.topicList,
                        100
                    );
                    pagerank.init();
                    pagerank.ranking();
                    console.log(pagerank.topN(5));
                    console.log('\nTopic Sensitive PageRank:');
                    topicSensitivePageRank = new topicSensitivePageRank_1.default(
                        graph.graph,
                        graph.nodeList,
                        graph.topicList,
                        100
                    );
                    topicSensitivePageRank.init();
                    topicSensitivePageRank.searchTopic = 'Science';
                    topicSensitivePageRank.calculateS();
                    topicSensitivePageRank.ranking();
                    console.log(topicSensitivePageRank.topN(5));
                    return [2 /*return*/];
            }
        });
    });
}
function project2() {
    return __awaiter(this, void 0, void 0, function() {
        var map, kmeans2, kmeans1;
        return __generator(this, function(_a) {
            map = new map_1.default();
            // for (let i: number = 0; i < 50; i++) {
            //     map.addNode(Math.floor(Math.random() * 320), Math.floor(Math.random() * 320));
            // }
            map.addNode(4, 10);
            map.addNode(7, 10);
            map.addNode(4, 8);
            map.addNode(6, 8);
            map.addNode(12, 6);
            map.addNode(10, 5);
            map.addNode(3, 4);
            map.addNode(11, 4);
            map.addNode(9, 3);
            map.addNode(12, 3);
            map.addNode(2, 2);
            map.addNode(5, 2);
            kmeans2 = new kmeans_1.default(map.getmap, 3, 100);
            kmeans2.init();
            kmeans2.generateRandomCentersList();
            kmeans2.clustering();
            console.log(kmeans2.clusters);
            console.log('\n');
            kmeans1 = new kmeans_1.default(map.getmap, 3, 100);
            kmeans1.init();
            kmeans1.generateBetterCentersList();
            kmeans1.clustering();
            console.log(kmeans1.clusters);
            return [2 /*return*/];
        });
    });
}
function project3() {
    return __awaiter(this, void 0, void 0, function() {
        var graph;
        return __generator(this, function(_a) {
            graph = initCluster();
            console.log(graph.graph);
            console.log(graph.nodeList);
            return [2 /*return*/];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            // project1();
            project2();
            return [2 /*return*/];
        });
    });
}
main();
