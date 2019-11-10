'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var utils_1 = __importDefault(require('./src/services/utils/utils'));
function main() {
    // for (let i:number = 0; i < 10000; i++) {
    //     console.log(Math.floor(Math.random() * 16));
    // }
    var utils = new utils_1.default();
    utils.readGraph('./src/data/webGoogle.txt');
}
main();
