import fs from 'fs';

class utils {
    constructor() {
        
    }
    async readGraph(path:string = '') {
        let tempData:any = [];
        await fs.readFile(path, (err, data) => {
            tempData = data.toString();
            // console.log(tempData[5]);
        });
    }
}

export default utils;