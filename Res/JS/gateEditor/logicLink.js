class LogicLink {
    constructor(input, ...outputs) {
        this.input = input;

        this.outputs = outputs;
    }

    get shape() {
        let inP = this.input.getOUT_location(0);
        let shapes = {
            lines: [

            ],
            arcs: [

            ]
        };

        for (let i = 0; i < this.outputs.length; i++) {
            shapes.lines.push([inP, this.outputs[i].getIN_location(0)]);
        }

        return shapes;
    }
}