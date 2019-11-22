import Utils from '../utils/utils';

class KMeans {
    private k: number = 3;
    private map: Array<Array<number>> = [];
    private clustersList: Array<Array<number>> = [];
    private centersList: Array<Array<number>> = [];
    private maxIteration: number;
    constructor(map: Array<Array<number>>, k: number = 3, maxIteration: number = 100) {
        this.k = k;
        this.map = map;
        this.maxIteration = maxIteration;
    }
    public init(): void {
        for (let i: number = 0; i < this.k; i++) {
            this.clustersList.push([]);
        }
    }
    public generateRandomCentersList(): void {
        for (let i: number = 0; i < this.k; i++) {
            this.centersList.push([Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)]);
        }
        console.log(`Randomly generate ${this.k} central points: \n`, this.centersList);
    }
    public generateBetterCentersList(): void {
        let utils: Utils = new Utils();
        for (let i: number = 0; i < this.k; i++) {
            let maxDistance: number = 0;
            let maxPos: number = 0;
            if (i == 0) {
                this.centersList.push(this.map[Math.floor(Math.random() * this.map.length)]);
            } else if (i == 1) {
                for (let j: number = 0; j < this.centersList.length; j++) {
                    for (let k: number = 0; k < this.map.length; k++) {
                        if (
                            utils.twoPointsDistance(this.centersList[j], this.map[k]) > maxDistance
                        ) {
                            maxDistance = utils.twoPointsDistance(this.centersList[j], this.map[k]);
                            maxPos = k;
                        }
                    }
                }
                this.centersList.push(this.map[maxPos]);
            } else if (i > 1) {
                let compareArr: Array<Array<number>> = [];
                for (let j: number = 0; j < this.centersList.length; j++) {
                    compareArr.push([]);
                    for (let k: number = 0; k < this.map.length; k++) {
                        compareArr[j].push(
                            utils.twoPointsDistance(this.centersList[j], this.map[k])
                        );
                    }
                }
                let maxSum: number = 0;
                for (let l: number = 0; l < this.map.length; l++) {
                    let tempSumDistance: number = 0;
                    for (let m: number = 0; m < this.centersList.length; m++) {
                        tempSumDistance += compareArr[m][l];
                    }
                    if (tempSumDistance > maxSum) {
                        maxSum = tempSumDistance;
                        maxPos = l;
                    }
                }
                this.centersList.push(this.maps[maxPos]);
            }
        }
        console.log(`Optimize generate ${this.k} central points: \n`, this.centersList);
    }
    public generateClusterList(): Array<Array<number>> {
        let res: Array<Array<number>> = [];
        for (let i: number = 0; i < this.k; i++) {
            res.push([]);
        }
        return res;
    }
    public clustering(): void {
        let iteration: number = 0;
        while (iteration < this.maxIteration) {
            let tempClustersList: Array<Array<number>> = this.generateClusterList();
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
            iteration++;
            this.updateCenters(tempClustersList);
            this.updateCluster(tempClustersList);
        }
    }
    private updateCenters(clustersList: Array<Array<number>>): void {
        for (let i: number = 0; i < clustersList.length; i++) {
            let meanX: number = 0;
            let meanY: number = 0;
            for (let j: number = 0; j < clustersList[i].length; j++) {
                meanX += this.map[clustersList[i][j]][0];
                meanY += this.map[clustersList[i][j]][1];
            }
            meanX = meanX / clustersList[i].length;
            meanY = meanY / clustersList[i].length;
            this.centersList[i][0] = meanX;
            this.centersList[i][1] = meanY;
        }
    }
    private updateCluster(clustersList: Array<Array<number>>): void {
        this.clustersList = clustersList;
    }
    public get clusters(): Array<Array<number>> {
        return this.clustersList;
    }
    public get centers(): Array<Array<number>> {
        return this.centersList;
    }
    public get maps(): Array<Array<number>> {
        return this.map;
    }
}

export default KMeans;
