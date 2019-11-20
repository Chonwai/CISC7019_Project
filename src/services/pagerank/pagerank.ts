import Utils from '../utils/utils';
import utils from '../utils/utils';

class PageRank {
    graph: Array<Array<number>> = [];
    maxIteration: number = 100;
    d: number = 0.85;
    rankingList: Array<number> = [];
    constructor(graph: Array<Array<number>> = [], maxIteration: number = 100, d: number = 0.85) {
        this.graph = graph;
        this.maxIteration = maxIteration;
        this.d = d;
    }
    init(): void {
        for (let i: number = 0; i < this.graph.length; i++) {
            this.rankingList.push(1 / this.graph.length);
        }
    }
    ranking(): void {
        let iteration: number = 0;
        while (iteration < this.maxIteration) {
            let newRankingList: Array<number> = [];
            for (let i: number = 0; i < this.graph.length; i++) {
                let newItemWeight: number = 0;
                let edgeByNodes: Array<number> = [];
                for (let j: number = 0; j < this.graph.length; j++) {
                    if (this.graph[j].indexOf(i) >= 0) {
                        edgeByNodes.push(j);
                    }
                }
                for (let k: number = 0; k < edgeByNodes.length; k++) {
                    newItemWeight +=
                        this.rankingList[edgeByNodes[k]] / this.graph[edgeByNodes[k]].length;
                }
                newItemWeight = newItemWeight * this.d + (1 - this.d) / this.graph.length;
                newRankingList.push(newItemWeight);
            }
            this.rankingList = newRankingList;
            if (iteration % 10 == 0) {
                console.log('Iteration: %s', iteration);
            }
            iteration++;
        }
    }
    get rank(): Array<number> {
        return this.rankingList;
    }
    get topWeight(): any {
        let utils = new Utils();
        let res: object = utils.getMaxAndPos(this.rankingList);
        return res;
    }
}

export default PageRank;
