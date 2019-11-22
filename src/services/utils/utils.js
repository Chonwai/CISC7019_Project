'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var fs_1 = __importDefault(require('fs'));
var utils = /** @class */ (function() {
    function utils() {
        this._topicList = [
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
    }
    utils.prototype.readMTXData = function(path) {
        if (path === void 0) {
            path = '';
        }
        var data = [];
        var relationMatrix = [];
        var res = fs_1.default.readFileSync(path);
        data = res.toString().split('\n');
        var tempCol = [];
        for (var i = 1; i < data.length; i++) {
            tempCol = data[i].split(' ');
            relationMatrix.push(tempCol);
        }
        return relationMatrix;
    };
    utils.prototype.readCSVData = function(path) {
        if (path === void 0) {
            path = '';
        }
        var data = [];
        var relationMatrix = [];
        var res = fs_1.default.readFileSync(path);
        data = res.toString().split('\n');
        var tempCol = [];
        for (var i = 1; i < data.length; i++) {
            tempCol = data[i].split(',');
            tempCol.splice(0, 1);
            relationMatrix.push(tempCol);
        }
        return relationMatrix;
    };
    utils.prototype.getMaxAndPos = function(array) {
        var position = 0;
        var maxVal = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > maxVal) {
                maxVal = array[i];
                position = i;
            }
        }
        return { maximun: maxVal, position: position };
    };
    utils.prototype.twoPointsDistance = function(p1, p2) {
        var distance = 0;
        distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
        return distance;
    };
    Object.defineProperty(utils.prototype, 'topicList', {
        get: function() {
            return this._topicList;
        },
        enumerable: true,
        configurable: true
    });
    return utils;
})();
exports.default = utils;
