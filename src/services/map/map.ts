class Map {
    map: Array<Array<number>> = [];
    width: number = 30;
    height: number = 30;
    amount: number = 0;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    addNode(x: number, y: number): void {
        if (x > this.width || y > this.height) {
            console.log('Error');
        } else {
            this.map.push([x, y]);
            this.amount++;
        }
    }
    get maps(): Array<Array<number>> {
        return this.map;
    }
}

export default Map;
