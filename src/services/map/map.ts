class Map {
    map: Array<Array<number>> = [];
    amount: number = 0;
    constructor() {}
    addNode(x: number, y: number): void {
        this.map.push([x, y]);
        this.amount++;
    }
    get maps(): Array<Array<number>> {
        return this.map;
    }
}

export default Map;
