class PageRank {
    graph: Array<Array<string>> = [];
    maxInteraction: number = 100;
    d: number = 0.85;
    initWeight: number = 1 / this.graph.length;
    rankingList: Array<number> = [];
    constructor(graph: Array<Array<string>> = [], maxInteraction: number = 0, d: number = 0.85) {
        this.graph = graph;
        this.maxInteraction = maxInteraction;
        this.d = d;
    }
    init(): void {
        for (let i: number = 0; i < this.graph.length; i++) {
            this.rankingList.push(this.initWeight);
        }
    }
}

export default PageRank;
