import Utils from './src/services/utils/utils';
import Graph from './src/services/graph/graph';
import PageRank from './src/services/pagerank/pagerank';
import Map from './src/services/map/map';
import KMeans from './src/services/kmeans/kmeans';

function initGraphCSV(data: Array<Array<string>>) {
    const graph = new Graph();
    for (let i: number = 0; i < data.length; i++) {
        graph.addNode(i);
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

function initGraphMTX(data: Array<Array<string>>, amount: number) {
    const graph = new Graph();
    for (let i: number = 0; i < amount; i++) {
        graph.addNode(i);
    }
    for (let i: number = 0; i < data.length; i++) {
        graph.addEdge(parseInt(data[i][0]), parseInt(data[i][1]));
    }
    return graph.graph;
}

async function project1(): Promise<void> {
    let utils: any = new Utils();
    let graph: Array<Array<number>> = [];
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
    // data = await utils.readMTXData('./src/data/socfb-UChicago30.mtx');
    graph = initGraphCSV(data);
    // graph = initGraphMTX(data, 6591);
    console.log(graph.length);

    let pagerank: any = new PageRank(graph, 100);
    pagerank.init();
    pagerank.ranking();
    console.log(pagerank.rank);
    console.log(pagerank.topWeight);
}

async function project2(): Promise<void> {
    let map = new Map();
    for (let i: number = 0; i < 30; i++) {
        map.addNode(Math.floor(Math.random() * 30), Math.floor(Math.random() * 30));
    }
    let kmeans = new KMeans(map.getmap, 4, 1);
    kmeans.init();
    kmeans.clustering();
}

async function main(): Promise<void> {
    // project1();
    project2();
}

main();
