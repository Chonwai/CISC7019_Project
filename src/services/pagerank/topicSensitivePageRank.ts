import PageRank from './pagerank';

class TopicSensitivePageRank extends PageRank {
    private S: number = 0;
    private _targetTopic: string = 'Other';
    private targetNodesList: Array<number> = [];

    constructor(
        graph: Array<Array<number>> = [],
        nodes: Array<number> = [],
        topic: Array<string> = [],
        maxIteration: number = 100,
        d: number = 0.85
    ) {
        super();
        this.graph = graph;
        this.nodes = nodes;
        this.topicList = topic;
        this.maxIteration = maxIteration;
    }
    public ranking(): void {
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
                if (this.targetNodesList.find((node: number) => node == i) != undefined) {
                    newItemWeight = newItemWeight * this.d + (1 - this.d) * (1 / this.S);
                } else {
                    newItemWeight = newItemWeight * this.d + (1 - this.d) * (0 / this.S);
                }

                newRankingList.push(newItemWeight);
            }
            this.rankingList = newRankingList;
            if (iteration % 10 == 0) {
                console.log('Iteration: %s', iteration);
            }
            iteration++;
        }
    }
    public calculateS(): void {
        let tempArr: Array<number> = [];
        for (let h: number = 0; h < this.topicList.length; h++) {
            if (this.topicList[h] == this._targetTopic) {
                tempArr.push(h);
                this.S++;
            }
        }
        this.targetNodesList = tempArr;
    }
    public get searchTopic(): string {
        return this._targetTopic;
    }
    public set searchTopic(value: string) {
        this._targetTopic = value;
    }
}

export default TopicSensitivePageRank;
