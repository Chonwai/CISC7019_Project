class PageRank {
    graph: Array<Array<number>> = [];
    maxInteraction: number = 100;
    d: number = 0.85;
    rankingList: Array<number> = [];
    constructor(graph: Array<Array<number>> = [], maxInteraction: number = 0, d: number = 0.85) {
        this.graph = graph;
        this.maxInteraction = maxInteraction;
        this.d = d;
    }
    init(): void {
        for (let i: number = 0; i < this.graph.length; i++) {
            this.rankingList.push(1 / this.graph.length);
        }
    }
    get rank(): Array<number> {
        return this.rankingList;
    }
}

export default PageRank;
