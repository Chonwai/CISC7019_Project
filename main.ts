import Utils from './src/services/utils/utils';
import Graph from './src/services/graph/graph';

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
    console.log(graph.graph);
    return graph;
}

async function main(): Promise<any> {
    let utils: any = new Utils();
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
    initGraph(data);
}

main();
