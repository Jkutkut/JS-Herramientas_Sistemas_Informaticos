var gateEditorCanvas;
var ctx;
var canvasOffset;


var gates = [];
var inputs = [];
var outputs = [];
var links = [];

window.onload = () => {

    // Setup truth table
    $(".staticCheckbox").on("click", ()=>{return false;});

    // Set up canvas
    gateEditorCanvas = document.getElementById('gateEditor');
    ctx = gateEditorCanvas.getContext('2d');
    let cOffset = $("#gateEditor").offset();
    canvasOffset = new Point(cOffset.left, cOffset.top);

    // Mouse control logic
    $("#gateEditor").mousedown(handleMouseDown).mouseup(handleMouseUp).mousemove(handleMouseMove);

    // Create circuit.
    inputs.push(new LogicGateInput(100, 100, 0));
    inputs.push(new LogicGateInput(100, 200, 1));
    gates.push(new LogicGateAND(200, 150));
    outputs.push(new LogicGateOutput(320, 150, 2));

    links.push(new LogicLink(inputs[0], gates[0], 0));
    links.push(new LogicLink(inputs[1], gates[0], 1));
    links.push(new LogicLink(gates[0], outputs[0], 0));

    show();
}

// Representation
function show () {
    ctx.clearRect(0, 0, gateEditorCanvas.width, gateEditorCanvas.height);

    ctx.save(); // save previous styles & set our current styles
    
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3

    for (let i = 0; i < inputs.length; i++) {
        showElement(inputs[i]);
    }
    for (let i = 0; i < gates.length; i++) {
        showElement(gates[i]);
    }
    for (let i = 0; i < outputs.length; i++) {
        showElement(outputs[i]);
    }
    for(let i = 0; i < links.length; i++) {
        showElement(links[i]);
    }

    ctx.restore();
}

function showElement(element) {
    let shape = element.shape;

    for (let i = 0; i < shape.lines.length; i++) {
        ctx.beginPath();
        ctx.moveTo(...shape.lines[i][0].pos);
        ctx.lineTo(...shape.lines[i][1].pos);
        ctx.closePath();
        ctx.stroke(); // update the screen

    }
    

    for (let i = 0; i < shape.arcs.length; i++) {
        ctx.beginPath();
        ctx.arc(...shape.arcs[i]);
        if (fill) {
            ctx.fill();
        }
        else {
        ctx.stroke();
        }
    }
}


// Control logic
var draggingGate = null;
var refreshingCanvas = null;

function handleMouseDown(e) {
    let mouse = new Point(
        parseInt(e.clientX - canvasOffset.x),
        parseInt(e.clientY - canvasOffset.y)
    );
  
    for (let i = 0; i < gates.length; i++) {
        if (gates[i].isPointInside(mouse)) {
            draggingGate = gates[i];
            refreshingCanvas = setInterval(show, 40);
            break;
        }
    }

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].isPointInside(mouse)) {
            draggingGate = inputs[i];
            refreshingCanvas = setInterval(show, 40);
            break;
        }
    }

    for (let i = 0; i < outputs.length; i++) {
        if (outputs[i].isPointInside(mouse)) {
            draggingGate = outputs[i];
            refreshingCanvas = setInterval(show, 40);
            break;
        }
    }
}

function handleMouseUp(e) {
    draggingGate = null;
    clearInterval(refreshingCanvas);
}

function handleMouseMove(e) {
    if (draggingGate != null) {
        let mouse = new Point(
            parseInt(e.clientX - canvasOffset.x),
            parseInt(e.clientY - canvasOffset.y)
        );

        draggingGate.moveToPoint(mouse);
    }   
}

// Logic to add elements to canvas
const addElement = {
    AND: () => {
        addGate(LogicGateAND);
    },
    NAND: () => {
        addGate(LogicGateNAND);
    },
    NOR: () => {
        addGate(LogicGateNOR);
    },
    NOT: () => {
        addGate(LogicGateNOT);
    },
    OR: () => {
        addGate(LogicGateOR);
    },
    XNOR: () => {
        addGate(LogicGateXNOR);
    },
    XOR: () => {
        addGate(LogicGateXOR);
    },
    input: () => {
        addInput();
    },
    output: () => {
        addOutput();
    },

}

function addGate(gate) {
    gates.push(new gate(200, 100));
    show();
}
function addInput() {
    if (inputs.length >= 2) return;

    inputs.push(new LogicGateInput(200, 100, inputs.length));
    show();
}
function addOutput() {
    if (outputs.length >= 1) return;
    
    outputs.push(new LogicGateOutput(200, 100, outputs.length));
    show();
}

// Converters

function getLogic(output=outputs[0]) {
    let s = output.stringLogic.substring(4);
    let q = processLogic(s);

    // console.log(q);

    let logicTable = [];
    for (let i = 0; i < 2; i++) {
        let A = i == 1;
        for (let j = 0; j < 2; j++) {
            let B = j == 1;
            logicTable[i * 2 + j] = eval(q);
        }
    }

    updateTruthTable(logicTable);
}


function processLogic(str) {
    if (/^[A-Z]$/.test(str)) {
        return str;
    }

    let reg = /^([A-Z]+)\((.+), (.+)\)$/.exec(str);

    const S = OPERATION_CONVERTER[reg[1]];
    return `${S.PRE} ${processLogic(reg[2])} ${S.MID} ${processLogic(reg[3])} ${S.POS}`;
}


function updateTruthTable(result) {
    let body = $($("#truthTable").children()[1]).children();
    for (let i = 0; i < result.length; i++) {
        let o = $($($(body[i]).children()[2]).children());
        o.attr("checked", result[i]);
    }
}