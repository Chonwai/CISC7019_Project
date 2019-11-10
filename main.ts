import Utils from './src/services/utils/utils';

async function main() {
    let utils: any = new Utils();
    let data = [];
    data = await utils.readCSVData('./src/data/Facebook_Data.csv');
}

main();
