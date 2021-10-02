class LogicGate {
    constructor (x, y) {
        this._pos = new Point(x, y);

        this._shape = [
            new Point(-50, -50),
            new Point(50, -50),
            new Point(50, 50),
            new Point(-50, 50)
        ];
    }

    get pos() {
        return this._pos;
    }

    get shape () {
        return this._shape.map(x => x.times(this.pos));
    }
}