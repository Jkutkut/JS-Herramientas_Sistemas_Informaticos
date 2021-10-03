const SHAPES_SIZE = 25;
const SHAPES = {
    AND: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2]
        ]
    },
    NAND: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE * 1.4, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [SHAPES_SIZE * 1.2, 0, SHAPES_SIZE * 0.2, 0, Math.PI * 2]
        ]
    },
    NOR: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE * 0.75, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE * 0.75, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE * 1.4, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [-SHAPES_SIZE * 1.95, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4],
            [SHAPES_SIZE * 1.2, 0, SHAPES_SIZE * 0.2, 0, Math.PI * 2]
        ]
    },
    NOT: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(SHAPES_SIZE, 0)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(SHAPES_SIZE, 0)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE * 1.4, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [SHAPES_SIZE * 1.2, 0, SHAPES_SIZE * 0.2, 0, Math.PI * 2]
        ]
    },
    OR: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE * 0.75, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE * 0.75, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [-SHAPES_SIZE * 1.95, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4]
        ]
    },
    XNOR: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE * 1.4, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [-SHAPES_SIZE * 1.95, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4],
            [-SHAPES_SIZE * 2.25, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4],
            [SHAPES_SIZE * 1.2, 0, SHAPES_SIZE * 0.2, 0, Math.PI * 2]
        ]
    },
    XOR: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [-SHAPES_SIZE * 1.95, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4],
            [-SHAPES_SIZE * 2.25, 0, SHAPES_SIZE * 1.4, -Math.PI * 0.25, Math.PI / 4]
        ]
    }
}

class LogicGate {

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
            p.x <= this.x + LogicGate.half_width &&
            p.y >= this.y - LogicGate.half_height &&
            p.y <= this.y + LogicGate.half_height
        );
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
