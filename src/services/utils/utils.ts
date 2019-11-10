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
}

export default utils;
