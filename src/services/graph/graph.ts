class Graph {
    nodes: Array<number>;
    edges: Array<Array<number>>;
    edgesNumber: number;
    topics: Array<string>;
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.edgesNumber = 0;
        this.topics = [];
    }
    addNode(newNode: number, topic: string = ''): void {
        this.nodes.push(newNode);
        this.edges.push([]);
        this.topics.push(topic);
    }
    addEdge(from: number, to: number): void {
        this.edges[from].push(to);
        this.edgesNumber++;
    }
    get graph(): Array<Array<number>> {
        return this.edges;
    }
    get nodeList(): Array<number> {
        return this.nodes;
    }
    get topicList(): Array<string> {
        return this.topics;
    }
    get nodesAmount(): number {
        return this.edgesNumber;
    }
}
