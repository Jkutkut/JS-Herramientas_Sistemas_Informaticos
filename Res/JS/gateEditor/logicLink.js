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
        let inP = this.fromPoint;
        let shapes = {
            lines: [],
            arcs: []
        };
        
        let ps = this.toPoints;

        for (let i = 0; i < this.outputs.length; i++) {
            shapes.lines.push([inP, ps[i]]);
        }

        return shapes;
    }

    get from() {
        return this.input;
    }

    get to() {
        return this.outputs;
    }

    get fromPoint() {
        return this.input.getPortLocation(this);
    }

    get toPoints() {
        let points = [];
        for (let i = 0; i < this.outputs.length; i++) {
            points.push(this.outputs[i].getPortLocation(this));
        }
        return points;
    }

    static pointShape(point) {
        return {shape: {lines: [], arcs: [[...point.pos, SHAPES_SIZE * 0.3, 0, Math.PI * 2]]}};
    }
}