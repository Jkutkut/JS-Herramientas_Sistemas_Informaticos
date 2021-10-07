// General object
/**
 * Prototype class to generate all the objects of the logicGateEditor.
 */
class LogicGateObject {

    static half_width = 1.8 * SHAPES_SIZE;
    static half_height = SHAPES_SIZE;

    constructor (x, y) {
        this._pos = new Point(0, 0);

        this._shapeOBJ = null;

        this.moveTo(x, y);

        this._IO_SIZE = {IN: 0, OUT: 0};
        this.IO = {
            in: [],
            out: []
        }
    }

    // Getters
    get stringName() {
        return null;
    }

    get stringLogic() {
        return "";
    }

    /** 
     * @returns Position of the center of the object as a Point instance.
     */
    get pos() {
        return this._pos;
    }

    /**
     * Object with the lines and arcs needed to generate the object (both in arrays).
     */
    get shape () {
        return this._shapeOBJ;
    }

    /**
     * @param {Point} p - Point object
     * @returns Whenever the coordinates p are inside/over the current object.
     */
    isPointInside(p) {    
        return (
            p.x >= this.pos.x - LogicGate.half_width &&
            p.x <= this.pos.x + LogicGate.half_width &&
            p.y >= this.pos.y - LogicGate.half_height &&
            p.y <= this.pos.y + LogicGate.half_height
        );
    }

    /**
     * Method to get the default shape of the object, centered at 0, 0
     */
    get defaultShape() {
        return null;
    }

    getIN_location(index) {
        if (index >= this.IO_SIZE.IN) {
            throw new Error(`The object has ${this.IO_SIZE.IN} ports, but asked for the ${index}º.`);
        }
        return IO.INPUT[this.IO_SIZE.IN - 1][index].plus(this.pos);
    }

    getOUT_location(index) {
        if (index >= this.IO_SIZE.OUT) {
            throw new Error(`The object has ${this.IO_SIZE.OUT} ports, but asked for the ${index}º.`);
        }
        return IO.OUTPUT[this.IO_SIZE.OUT - 1][index].plus(this.pos);
    }

    getPortLocation(link) {
        for (let i = 0; i < this.IO.in.length; i++) {
            if (this.IO.in[i] == link) {
                return this.getIN_location(i);
            }
        }

        for (let i = 0; i < this.IO.out.length; i++) {
            if (this.IO.out[i] == link) {
                return this.getOUT_location(0);
                // return this.getOUT_location(i);
            }
        }

        throw new Error("The given link is not connected to this object.");
    }

    /**
     * The amount of In and Out ports of the current device.
     */
    get IO_SIZE() {
        return this._IO_SIZE;
    }

    // SETTERS
    /**
     * Moves the current object to the given coordinates.
     * @param {number} x - New horizontal position.
     * @param {number} y - New vertical position.
     */
    moveTo(x, y) {
        this._pos.moveTo(x, y);

        // Update object shape with the new coordinates
        this._shapeOBJ = {
            lines: [],
            arcs: []
        };
        // Update lines
        for (let i = 0; i < this.defaultShape.lines.length; i++) {
            this._shapeOBJ.lines.push([]);
            for (let j = 0; j < 2; j++) {
                this._shapeOBJ.lines[i].push(this.defaultShape.lines[i][j].plus(this.pos));
            }
        }
        // Update arcs
        for (let i = 0; i < this.defaultShape.arcs.length; i++) {
            this._shapeOBJ.arcs.push([...this.defaultShape.arcs[i]]);
            for (let k = 0; k < 2; k++) {
                this._shapeOBJ.arcs[i][k] = this._shapeOBJ.arcs[i][k] + this.pos.pos[k];
            }
        }
    }

    /**
     * Moves to the new coordinates.
     * @param {Point} p - New coordinates as a Point instance.
     */
    moveToPoint(p) {
        this.moveTo(...p.pos);
    }

    connectInput(link, port) {
        if (this.IO.in[port] != undefined) {
            throw new Error("Port busy, please use another port");
        }
        this.IO.in[port] = link;
    }

    connectOutput(link) {
        this.IO.out.push(link);
    }
}

// Logic gates
/**
 * Class that works as a prototype to generate all logic gates.
 */
class LogicGate extends LogicGateObject {
    constructor (x, y) {
        super(x, y);

        this._IO_SIZE.IN = 2;
        this.IO_SIZE.OUT = 1;
    }

    get stringLogic() {
        console.log("Inside " + this.stringName);
        let connectionLogicString = [];
        for (let i = 0; i < this.IO_SIZE.IN; i++) {
            connectionLogicString.push(this.IO.in[i].from.stringLogic);
        }
        return `${this.stringName}(${connectionLogicString.join(", ")})`;
    }
}

class LogicGateAND extends LogicGate {
    get defaultShape() {
        return SHAPES.AND;
    }

    get stringName() {
        return "AND";
    }
}

class LogicGateNAND extends LogicGate {
    get defaultShape() {
        return SHAPES.NAND;
    }

    get stringName() {
        return "NAND";
    }
}

class LogicGateNOR extends LogicGate {
    get defaultShape() {
        return SHAPES.NOR;
    }

    get stringName() {
        return "NOR";
    }
}

class LogicGateNOT extends LogicGate {

    constructor(x, y) {
        super(x, y);

        this.IO_SIZE.IN = 1;
    }

    get defaultShape() {
        return SHAPES.NOT;
    }

    get stringName() {
        return "NOT";
    }
}

class LogicGateOR extends LogicGate {
    get defaultShape() {
        return SHAPES.OR;
    }

    get stringName() {
        return "OR";
    }
}

class LogicGateXNOR extends LogicGate {
    get defaultShape() {
        return SHAPES.XNOR;
    }

    get stringName() {
        return "XNOR";
    }
}

class LogicGateXOR extends LogicGate {
    get defaultShape() {
        return SHAPES.XOR;
    }

    get stringName() {
        return "XOR";
    }
}

// Input and Output
/**
 * Prototype class to create the logic for the input and output classes.
 */
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

    /**
     * The default shape stored only if defined. Else, return default value.
     * @returns Object.
     */
    get defaultShape() {
        if (this._defaultShape) {
            return this._defaultShape;
        }

        return {lines: [], arcs: []};
    }

    /**
     * The default shape of the object itself, without the name.
     * @returns Object.
     */
    get bodyShape() {
        return null;
    }

    /**
     * The name shape.
     * @returns Object.
     */
    get name() {
        return null;
    }

    /**
     * Return the index of the name selected.
     * @returns The index stored only if defined. Else, return default value.
     */
    get index() {
        if (this._index) {
            return this._index;
        }
        return 0;
    }
}

class LogicGateInput extends LogicGateIO {
    constructor(x, y, index) {
        super(x, y, index);

        this._IO_SIZE = {IN: 0, OUT: 1};
    }

    get stringLogic() {
        return this.name.name;
    }

    get stringName() {
        return this.name.name;
    }

    get bodyShape() {
        return SHAPES.INPUT;
    }

    get name() {
        return SHAPES.IO_NAMES[this.index];
    }
}

class LogicGateOutput extends LogicGateIO {
    constructor(x, y, index) {
        super(x, y, index);

        this._IO_SIZE = {IN: 1, OUT: 0};
    }

    get stringName() {
        return this.name.name;
    }

    get stringLogic() {
        return `${this.stringName} = ${this.IO.in[0].from.stringLogic}`;
    }

    get bodyShape() {
        return SHAPES.OUTPUT;
    }

    get name() {
        return SHAPES.IO_NAMES[this.index];
    }
}