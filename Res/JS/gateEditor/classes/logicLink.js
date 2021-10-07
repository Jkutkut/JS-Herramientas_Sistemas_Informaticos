class LogicLinkPrototype {
    constructor(input, output, port) {
        input.connectOutput(this);
        this.input = input;

        this.output = output;
        this.port = port;
    }

    get shape() {
        let shape = {
            lines: [[this.fromPoint, this.toPoint]],
            arcs: []
        };
        return shape;
    }

    get from() {
        return this.input;
    }

    get to() {
        return this.output;
    }

    get fromPoint() {
        return this.input.getPortLocation(this);
    }

    get toPoint() {
        return this.output.getPortLocation(this);
    }

    destroy() {
        this.output.disconnectInput(this.output.getPortLocation(this));
        this.input.disconnectOutput(this);
    }
}

class LogicLink extends LogicLinkPrototype {
    constructor(input, output, port) {
        super(input, output, port);
        output.connectInput(this, port);
    }
}

class mouseLink extends LogicLinkPrototype {
    constructor(input, output) {
        super(input, output);
    }

    get toPoint() {
        return this.output;
    }
}