import Utils from './src/services/utils/utils';
import Graph from './src/services/graph/graph';
import PageRank from './src/services/pagerank/pagerank';
import Map from './src/services/map/map';
import KMeans from './src/services/kmeans/kmeans';
import TopicSensitivePageRank from './src/services/pagerank/topicSensitivePageRank';

function initGraphCSV(data: Array<Array<string>>) {
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
    return graph.graph;
}

async function project1(): Promise<void> {
    let utils: Utils = new Utils();
    let graph: Array<Array<number>> = [];
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
    graph = initGraphCSV(data);
    console.log(graph.length);

    console.log('Normal PageRank:');
    let pagerank: PageRank = new PageRank(graph, 100);
    pagerank.init();
    pagerank.ranking();
    console.log(pagerank.rank);
    console.log(pagerank.topWeight);

    console.log('\nTopic Sensitive PageRank:');
    const topicSensitivePageRank: TopicSensitivePageRank = new TopicSensitivePageRank();
    topicSensitivePageRank.init();
    topicSensitivePageRank.ranking();
}

async function project2(): Promise<void> {
    let map = new Map();
    for (let i: number = 0; i < 1000; i++) {
        map.addNode(Math.floor(Math.random() * 320), Math.floor(Math.random() * 320));
    }
    let kmeans = new KMeans(map.getmap, 4, 100);
    kmeans.init();
    kmeans.clustering();
    console.log(kmeans.centers);
    console.log(kmeans.clusters);
    console.log(kmeans.maps);
}

async function main(): Promise<void> {
    project1();
    // project2();
    let utils: any = new Utils();
    // console.log(utils.topicList[Math.floor(Math.random() * 16)]);
}

main();
