class Graph {
    nodes: Array<number>
    edges: Array<Array<number>>
    edgesNumber: number
    topicList: Array<string>
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.edgesNumber = 0;
        this.topicList = [];
    }
    addNode(newNode: number, topic: string = ''): void {
        this.nodes.push(newNode);
        this.edges.push([]);
        this.topicList.push(topic);
    }
}