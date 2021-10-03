class LogicLink {
    constructor(input, ...outputs) {
        input.connectOutput(this);
        this.input = input;

        this.outputs = [];
        for (let i = 0; i < outputs.length; i+=2) {
            outputs[i].connectInput(this, outputs[i + 1]);
            this.outputs.push(outputs[i]);
        }
    }

    get shape() {
        let inP = this.input.getPortLocation(this);
        let shapes = {
            lines: [],
            arcs: []
        };

        for (let i = 0; i < this.outputs.length; i++) {
            shapes.lines.push([inP, this.outputs[i].getPortLocation(this)]);
        }

        return shapes;
    }

    get from() {
        return this.input;
    }
}