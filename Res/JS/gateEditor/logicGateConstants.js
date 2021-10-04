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
                new Point(-SHAPES_SIZE, 0),
                new Point(-SHAPES_SIZE * 1.8, 0)
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
    },
    INPUT: {
        lines: [
            [
                new Point(-SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, -SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE*1.3, SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(SHAPES_SIZE*1.3, 0),
                new Point(SHAPES_SIZE*1.8, 0)
            ]
        ],
        arcs: []
    },
    OUTPUT: {
        lines: [
            [
                new Point(-SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, -SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE*1.3, SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(SHAPES_SIZE*1.3, -SHAPES_SIZE),
                new Point(SHAPES_SIZE*1.3, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE*1.3, 0),
                new Point(-SHAPES_SIZE*1.8, 0)
            ]
        ],
        arcs: []
    },
    IO_NAMES: [
        {
            name: "A",
            lines: [
                [
                    new Point(0, -SHAPES_SIZE * 0.7),
                    new Point(-SHAPES_SIZE * 0.4, SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(0, -SHAPES_SIZE * 0.7),
                    new Point(SHAPES_SIZE * 0.4, SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.3, SHAPES_SIZE * 0.2),
                    new Point(SHAPES_SIZE * 0.3, SHAPES_SIZE * 0.2)
                ]
            ],
            arcs: []
        },
        {
            name: "B",
            lines: [
                [
                    new Point(-SHAPES_SIZE * 0.4, -SHAPES_SIZE * 0.7),
                    new Point(-SHAPES_SIZE * 0.4, SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.4, -SHAPES_SIZE * 0.7),
                    new Point(0, -SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.4, SHAPES_SIZE * 0.7),
                    new Point(0, SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.4, 0),
                    new Point(0, 0)
                ]
            ],
            arcs: [
                [0, -SHAPES_SIZE * 0.35, SHAPES_SIZE * 0.35, -Math.PI / 2, Math.PI / 2],
                [0, SHAPES_SIZE * 0.35, SHAPES_SIZE * 0.35, -Math.PI / 2, Math.PI / 2]
            ]
        },
        {
            name: "F",
            lines: [
                [
                    new Point(-SHAPES_SIZE * 0.4, -SHAPES_SIZE * 0.7),
                    new Point(-SHAPES_SIZE * 0.4, SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.4, -SHAPES_SIZE * 0.7),
                    new Point(SHAPES_SIZE * 0.4, -SHAPES_SIZE * 0.7)
                ],
                [
                    new Point(-SHAPES_SIZE * 0.4, 0),
                    new Point(SHAPES_SIZE * 0.2, 0)
                ]
            ],
            arcs: []
        }
    ]
};

const IO = {
    INPUT:[
        [
            new Point(-SHAPES_SIZE * 1.8, 0)
        ],
        [
            new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6),
            new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
        ]
    ],
    OUTPUT:[
        [
            new Point(SHAPES_SIZE * 1.8, 0)
        ]
    ]
}

const OPERATION_CONVERTER = {
    AND: {
        PRE: "(",
        MID: "&&",
        POS: ")"
    },
    NAND: {
        PRE: "!(",
        MID: "&&",
        POS: ")"
    },
    NOR: {
        PRE: "!(",
        MID: "||",
        POS: ")"
    },
    OR: {
        PRE: "(",
        MID: "||",
        POS: ")"
    },
    XNOR: {
        PRE: "(",
        MID: "==",
        POS: ")"
    },
    XOR: {
        PRE: "(",
        MID: "!=",
        POS: ")"
    }
}