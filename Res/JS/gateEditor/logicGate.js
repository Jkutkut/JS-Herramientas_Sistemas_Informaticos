// General object
class LogicGateObject {

    static half_width = 1.8 * SHAPES_SIZE;
    static half_height = SHAPES_SIZE;

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

    isPointInside(p) {
        
        return (
            p.x >= this.pos.x - LogicGate.half_width &&
            p.x <= this.pos.x + LogicGate.half_width &&
            p.y >= this.pos.y - LogicGate.half_height &&
            p.y <= this.pos.y + LogicGate.half_height
        );
    }

    get defaultShape() {
        return null;
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
            this._shapeOBJ.arcs.push([...this.defaultShape.arcs[i]]);

            for (let k = 0; k < 2; k++) {
                this._shapeOBJ.arcs[i][k] = this._shapeOBJ.arcs[i][k] + this.pos.pos[k];
            }
        }
    }

    moveToPoint(p) {
        this.moveTo(...p.pos);
    }
}

// Logic gates
class LogicGate extends LogicGateObject {

}

class LogicGateAND extends LogicGate {

    get defaultShape() {
        return SHAPES.AND;
    }
}

class LogicGateNAND extends LogicGate {

    get defaultShape() {
        return SHAPES.NAND;
    }
}

class LogicGateNOR extends LogicGate {

    get defaultShape() {
        return SHAPES.NOR;
    }
}

class LogicGateNOT extends LogicGate {

    get defaultShape() {
        return SHAPES.NOT;
    }
}

class LogicGateOR extends LogicGate {

    get defaultShape() {
        return SHAPES.OR;
    }
}

class LogicGateXNOR extends LogicGate {

    get defaultShape() {
        return SHAPES.XNOR;
    }
}

class LogicGateXOR extends LogicGate {

    get defaultShape() {
        return SHAPES.XOR;
    }
}

// input and output

class LogicGateIO extends LogicGateObject {
    constructor(x, y, index) {
        super(x, y);
        this._index = index;

        let body = this.bodyShape;
        let name = this.name;

        this._defaultShape = {
            lines: [...body.lines, ...name.lines],
            arcs: [...body.arcs, ...name.arcs]
        };

        this.moveTo(x, y);
    }

    get defaultShape() {
        if (this._defaultShape) {
            return this._defaultShape;
        }

        return {lines: [], arcs: []};
    }

    get bodyShape() {
        return null;
    }

    get name() {
        return null;
    }

    get index() {
        if (this._index) {
            return this._index;
        }
        return 0;
    }
}

class LogicGateInput extends LogicGateIO {
    get bodyShape() {
        return SHAPES.INPUT;
    }

    get name() {
        return SHAPES.IO_NAMES[this.index];
    }
}

class LogicGateOutput extends LogicGateIO {
    get bodyShape() {
        return SHAPES.OUTPUT;
    }

    get name() {
        return SHAPES.IO_NAMES[this.index];
    }
}