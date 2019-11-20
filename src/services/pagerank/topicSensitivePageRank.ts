import PageRank from './pagerank';

class TopicSensitivePageRank extends PageRank {
    private topicList: Array<string> = [];
    private allTopic = [];
    private allTopicRanking = [];
    constructor(
        graph: Array<Array<number>> = [],
        topic: Array<string> = [],
        maxIteration: number = 100,
        d: number = 0.85
    ) {
        super(graph, maxIteration);
        this.graph = graph;
        this.maxIteration = maxIteration;
        this.topicList = topic;
    }
    init(): void {}
    ranking(): void {}
}

export default TopicSensitivePageRank;
