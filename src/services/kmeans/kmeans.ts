class KMeans {
    k: number = 3;
    map: Array<Array<number>> = [];
    clustersList: Array<Array<number>> = [];
    constructor(map: Array<Array<number>> = [], k: number = 3) {
        this.k = k;
        this.map = map;
    }
    init(): void {
        for (let i: number = 0; i < this.k; i++) {
            this.clustersList.push([]);
        }
    }
    clustering(): void {}
    get clusters(): Array<Array<number>> {
        return this.clusters;
    }
}

export default KMeans;
