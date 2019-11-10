import fs from 'fs';

class utils {
    constructor() {}
    readGraph(path: string = '') {
        let tempData: any = [];
        let data: any = [];
        fs.readFile(path, async (err, res) => {
            tempData = res.toString();
            data = await tempData.split('\n');
            console.log(data[0]);
        });
    }
    readCSVData(path: string = ''): Array<Array<string>> {
        let data: Array<string> = [];
        let relationMatrix: Array<Array<string>> = [];
        let res = fs.readFileSync(path);
        data = res.toString().split('\n');
        let tempCol: Array<string> = [];
        for (let i of data) {
            tempCol = i.split(',');
            relationMatrix.push(tempCol);
        }
        return relationMatrix;
    }
}

export default utils;
