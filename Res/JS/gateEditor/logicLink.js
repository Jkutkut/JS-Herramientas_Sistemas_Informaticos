class LogicLink {
    constructor(input, ...outputs) {
        this.input = input;

        this.outputs = outputs;
    }

    get shape() {
        let inP = this.input.pos;
        let shapes = {
            lines: [

            ],
            arcs: [

            ]
        };

        for (let i = 0; i < this.outputs.length; i++) {
            shapes.lines.push()
        }
    }
}