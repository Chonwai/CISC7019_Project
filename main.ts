import Utils from './src/services/utils/utils'

function main() {
    // for (let i:number = 0; i < 10000; i++) {
    //     console.log(Math.floor(Math.random() * 16));
    // }
    let utils:any = new Utils();
    utils.readGraph('./src/data/webGoogle.txt');
}

main();