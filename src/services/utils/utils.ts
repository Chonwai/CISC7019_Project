import fs from 'fs';

class utils {
    constructor() {}

    readMTXData(path: string = '') {
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

    readCSVData(path: string = ''): Array<Array<string>> {
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
    getMaxAndPos(array: Array<number>): object {
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
}

export default utils;
