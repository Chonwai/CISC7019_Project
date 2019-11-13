class KMeans {
    k: number = 3;
    map: Array<Array<number>> = [];
    clustersList: Array<Array<number>> = [];
    centersList: Array<Array<number>> = [];
    maxIteration: number = 100;
    constructor(map: Array<Array<number>>, k: number = 3, maxIteration: number = 100) {
        this.k = k;
        this.map = map;
        this.maxIteration = maxIteration;
    }
    init(): void {
        for (let i: number = 0; i < this.k; i++) {
            this.clustersList.push([]);
        }
        this.generateInitCenters();
    }
    generateInitCenters(): void {
        for (let i: number = 0; i < this.k; i++) {
            this.centersList.push([Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)]);
        }
        console.log(this.centersList);
    }
    clustering(): void {
        let iteration: number = 0;
        while (iteration < this.maxIteration) {
            let tempClustersList: Array<Array<number>> = [];
            for (let i: number = 0; i < this.map.length; i++) {
                let minDistance: number = 999;
                let tempClusterNumber: number = 0;
                for (let j: number = 0; j < this.centersList.length; j++) {
                    let distance: number = 0;
                    distance = Math.sqrt(
                        Math.pow(this.map[i][0] - this.centersList[j][0], 2) +
                            Math.pow(this.map[i][1] - this.centersList[j][1], 2)
                    );
                    if (distance < minDistance) {
                        minDistance = distance;
                        tempClusterNumber = j;
                    }
                }
                tempClustersList[tempClusterNumber].push(i);
            }
            this.updateCenters(tempClustersList);
        }
    }
    private updateCenters(clustersList: Array<Array<number>>): void {
        for (let i: number = 0; i < clustersList.length; i++) {}
    }
    get clusters(): Array<Array<number>> {
        return this.clustersList;
    }
}

export default KMeans;
