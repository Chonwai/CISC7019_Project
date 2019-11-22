import fs from 'fs';

class utils {
    private _topicList: Array<string> = [
        'Arts',
        'Games',
        'News',
        'Regional',
        'Society',
        'Business',
        'Health',
        'Recreation',
        'Science',
        'Sports',
        'Computers',
        'Home',
        'Reference',
        'Shopping',
        'Kids',
        'Other'
    ];
    constructor() {}
    public readMTXData(path: string = '') {
        let data: Array<string> = [];
        let relationMatrix: Array<Array<string>> = [];
        let res = fs.readFileSync(path);
        data = res.toString().split('\n');
        let tempCol: Array<string> = [];
        for (let i: number = 1; i < data.length; i++) {
            tempCol = data[i].split(' ');
            relationMatrix.push(tempCol);
        }
        return relationMatrix;
    }
    public readCSVData(path: string = ''): Array<Array<string>> {
        let data: Array<string> = [];
        let relationMatrix: Array<Array<string>> = [];
        let res = fs.readFileSync(path);
        data = res.toString().split('\n');
        let tempCol: Array<string> = [];
        for (let i: number = 1; i < data.length; i++) {
            tempCol = data[i].split(',');
            tempCol.splice(0, 1);
            relationMatrix.push(tempCol);
        }
        return relationMatrix;
    }
    public getMaxAndPos(array: Array<number>): object {
        let position: number = 0;
        let maxVal: number = 0;
        for (let i: number = 0; i < array.length; i++) {
            if (array[i] > maxVal) {
                maxVal = array[i];
                position = i;
            }
        }
        return { maximun: maxVal, position: position };
    }
    public twoPointsDistance(p1: Array<number>, p2: Array<number>): number {
        let distance: number = 0;
        distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
        return distance;
    }
    public get topicList(): Array<string> {
        return this._topicList;
    }
}

export default utils;
