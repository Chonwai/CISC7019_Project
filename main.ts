import Utils from './src/services/utils/utils';
import Graph from './src/services/graph/graph';
import PageRank from './src/services/pagerank/pagerank';

function initGraph(data: Array<Array<string>>) {
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

async function main(): Promise<void> {
    let utils: any = new Utils();
    let graph: Array<Array<number>> = [];
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
    graph = initGraph(data);

    let pagerank: any = new PageRank(graph, 100);
    pagerank.init();
    pagerank.ranking();
    console.log(pagerank.rank);
    console.log(pagerank.topWeight);
}

main();
