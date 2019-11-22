import Utils from './src/services/utils/utils';
import Graph from './src/services/graph/graph';
import PageRank from './src/services/pagerank/pagerank';
import Map from './src/services/map/map';
import KMeans from './src/services/kmeans/kmeans';
import TopicSensitivePageRank from './src/services/pagerank/topicSensitivePageRank';

function initGraphCSV(data: Array<Array<string>>): Graph {
    const graph: Graph = new Graph();
    const utils: Utils = new Utils();
    for (let i: number = 0; i < data.length; i++) {
        graph.addNode(i, utils.topicList[Math.floor(Math.random() * 16)]);
    }
    for (let i: number = 0; i < data.length; i++) {
        for (let j: number = 0; j < data[i].length; j++) {
            if (data[i][j] === '1') {
                graph.addEdge(i, j);
            }
        }
    }
    return graph;
}

function initCluster(): Graph {
    const graph: Graph = new Graph();
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

async function project1(): Promise<void> {
    let utils: Utils = new Utils();
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
    const graph: Graph = initGraphCSV(data);

    console.log('Normal PageRank:');
    let pagerank: PageRank = new PageRank(graph.graph, graph.nodeList, graph.topicList, 100);
    pagerank.init();
    pagerank.ranking();
    console.log(pagerank.topN(5));

    console.log('\nTopic Sensitive PageRank:');
    const topicSensitivePageRank: TopicSensitivePageRank = new TopicSensitivePageRank(
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
}

async function project2(): Promise<void> {
    let map = new Map();
    for (let i: number = 0; i < 50; i++) {
        map.addNode(Math.floor(Math.random() * 320), Math.floor(Math.random() * 320));
    }
    let kmeans = new KMeans(map.getmap, 3, 100);
    kmeans.init();
    kmeans.clustering();
    console.log(kmeans.centers);
    console.log(kmeans.clusters);
    console.log(kmeans.maps);
}

async function project3(): Promise<void> {
    const graph: Graph = initCluster();
    console.log(graph.graph);
    console.log(graph.nodeList);
}

async function main(): Promise<void> {
    // project1();
    project2();
    // project3();
}

main();
