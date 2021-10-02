class LogicGate {

    constructor (x, y) {
        this._pos = new Point(0, 0);

        this._shapeOBJ = null;

        this.moveTo(x, y)
    }

    // Getters

    get pos() {
        return this._pos;
    }

    get shape () {
        return this._shapeOBJ;
    }

    // SETTERS

    moveTo(x, y) {
        this._pos.moveTo(x, y);

        this._shapeOBJ = {
            lines: [],
            arcs: []
        };

        for (let i = 0; i < this.defaultShape.lines.length; i++) {
            this._shapeOBJ.lines.push([]);
            for (let j = 0; j < 2; j++) {
                this._shapeOBJ.lines[i].push(this.defaultShape.lines[i][j].plus(this.pos));
            }
        }

        for (let i = 0; i < this.defaultShape.arcs.length; i++) {
            this._shapeOBJ.lines.push([]);
            for (let j = 0; j < 2; j++) {
                this._shapeOBJ.lines[i].push(this.defaultShape.arcs[i][j].plus(this.pos));
            }
        }
    }
}

const SHAPES = {
    AND: {
        lines: [
            [
                new Point(-50, -50),
                new Point(0, -50)
            ],
            [
                new Point(-50,  50),
                new Point(0, 50)
            ],
            [
                new Point(-50, -50),
                new Point(-50, 50)
            ]
        ],
        arcs: [

        ]
    },
    NAND: {},
    NOR: {},
    NOT: {},
    OR: {},
    XNOR: {},
    XOR: {}
}

class LogicGateAND extends LogicGate {

    get defaultShape() {
        return SHAPES.AND;
    }
}


