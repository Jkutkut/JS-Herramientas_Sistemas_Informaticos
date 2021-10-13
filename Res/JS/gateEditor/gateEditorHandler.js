var gateEditorCanvas, canvasContainer;
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
    canvasContainer = document.getElementById('gateEditorContainer');
    ctx = gateEditorCanvas.getContext('2d');
    let cOffset = $("#gateEditor").offset();
    canvasOffset = new Point(cOffset.left, cOffset.top);

    // Mouse control logic
    window.addEventListener("contextmenu", e => e.preventDefault());
    $("#gateEditor").mousedown(handleMouseDown).mouseup(handleMouseUp).mousemove(handleMouseMove).contextmenu(handleRightClick);

    // Create circuit.
    addInput();
    addOutput();

    updateTruthTableShape();
    show();
}

// Representation

function show () {
    ctx.clearRect(0, 0, gateEditorCanvas.width, gateEditorCanvas.height);

    ctx.save(); // save previous styles & set our current styles
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;

    canvas_draw.array(inputs);
    canvas_draw.array(outputs);
    canvas_draw.array(gates);

    for(let i = 0; i < links.length; i++) {
        canvas_draw.element(links[i]);
    }

    ctx.restore();
}

const canvas_draw = {
    line: (startPoint, endPoint) => {
        ctx.beginPath();
        ctx.moveTo(...startPoint.pos);
        ctx.lineTo(...endPoint.pos);
        ctx.closePath();
        ctx.stroke();
    },
    arc: (x, y, radius, startAngle, endAngle, fill=false) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, fill);
        if (fill) {
            ctx.fill();
        }
        else {
            ctx.stroke();
        }
    },
    element: (element, fillCircles=false) => {
        let shape = element.shape;

        for (let i = 0; i < shape.lines.length; i++) {
            canvas_draw.line(...shape.lines[i]);
        }
        
        for (let i = 0; i < shape.arcs.length; i++) {
            canvas_draw.arc(...shape.arcs[i], fillCircles);
        }
    },
    array: (arr) => {
        for (let i = 0; i < arr.length; i++) {
            canvas_draw.element(arr[i]);
    
            for (let j = 0; j < arr[i].IO_SIZE.IN; j++) {
                canvas_draw.element(pointShape(arr[i].getIN_location(j)), true);
            }
    
            for (let j = 0; j < arr[i].IO_SIZE.OUT; j++) {
                canvas_draw.element(pointShape(arr[i].getOUT_location(j)), true);
            }
        }
    }
}

function pointShape(point) {
    return {
        shape: {
            lines: [],
            arcs: [[...point.pos, SHAPES_SIZE * 0.3, 0, Math.PI * 2]]
        }
    };
}


// Control logic
var draggingGate = null;
var refreshingCanvas = null;

function updateCanvasOffset() {
    let cOffset = $("#gateEditor").offset();
    canvasOffset.moveTo(cOffset.left, cOffset.top);
}

function handleMouseDown(e) {
    let mouse = getMousePosition(e);
    
    // Move objects
    let mouseInsideArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].IO_SIZE.OUT; j++) {
                if (arr[i].getOUT_location(j).dist(mouse) < SHAPES_SIZE * 0.5) {
                    links.push(new mouseLink(arr[i], mouse));
                    draggingGate = mouse;
                    refreshingCanvas = setInterval(show, 40);
                    return true;
                }
            }
            if (arr[i].isPointInside(mouse)) {
                draggingGate = arr[i];
                refreshingCanvas = setInterval(show, 40);
                return true;
            }
        }
        return false;
    };
    if (mouseInsideArray(gates)) return;
    if (mouseInsideArray(inputs)) return;
    if (mouseInsideArray(outputs)) return;
}

function handleMouseUp(e) {
    if (draggingGate instanceof LogicGateObject) {
        draggingGate = null;
    }
    else if (draggingGate instanceof Point){ // draggingGate is using a mouseLink!
        // Check if connecting to something
        let mouseInsideArray = (arr)=>{
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].IO_SIZE.IN; j++) {
                    if (arr[i].IO.in[j] == undefined &&
                        arr[i].getIN_location(j).dist(draggingGate) < SHAPES_SIZE * 0.5) {
                        return {obj: arr[i], port: j};
                    }
                }
            }
            return false;
        };

        let connection = mouseInsideArray(outputs) || mouseInsideArray(gates);
        let newLink;
        if (connection) {
            let gate = links[links.length - 1].from;
            newLink = new LogicLink(gate, connection.obj, connection.port);
        }
        
        links.pop();
        draggingGate = null;
        if (newLink) {
            links.push(newLink);
        }
    }

    clearInterval(refreshingCanvas);
    show();
}

function handleMouseMove(e) {
    if (draggingGate != null) {
        // let mouse = new Point(
        //     parseInt(e.clientX - canvasOffset.x),
        //     parseInt(e.clientY - canvasOffset.y)
        // );
        let mouse = getMousePosition(e);

        draggingGate.moveToPoint(mouse);
    }   
}

function handleRightClick(e) {
    let mouse = new Point(
        parseInt(e.clientX - canvasOffset.x),
        parseInt(e.clientY - canvasOffset.y)
    );
    
    // Move objects
    let mouseInsideArray = (arr)=>{
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].isPointInside(mouse)) { // If mouse over gateObj 
                // for (let j = 0; j < arr[i].IO_SIZE.IN; j++) {
                //     let link = arr[i].disconnectInput(j); // Disconnect the link and store it
                //     if (link) link.destroy();
                // }

                // for (let j = 0; j < arr[i].IO_SIZE.IN; j++) {
                //     let link = arr[i].disconnectInput(j); // Disconnect the link and store it
                //     if (link) link.destroy();
                // }

                // show();
                return true;
            }
        }
        return false;
    };
    if (mouseInsideArray(gates)) return;
    if (mouseInsideArray(inputs)) return;
    if (mouseInsideArray(outputs)) return;
}

function getMousePosition(e) {
    return mouse = new Point(e.offsetX, e.offsetY);
}


// Logic to add elements to canvas
const addElement = {
    AND: (x, y) => {
        addGate(LogicGateAND, x, y);
    },
    NAND: (x, y) => {
        addGate(LogicGateNAND, x, y);
    },
    NOR: (x, y) => {
        addGate(LogicGateNOR, x, y);
    },
    NOT: (x, y) => {
        addGate(LogicGateNOT, x, y);
    },
    OR: (x, y) => {
        addGate(LogicGateOR, x, y);
    },
    XNOR: (x, y) => {
        addGate(LogicGateXNOR, x, y);
    },
    XOR: (x, y) => {
        addGate(LogicGateXOR, x, y);
    },
    input: (x, y) => {
        addInput(x, y);
    },
    output: (x, y) => {
        addOutput(x, y);
    },

}

function addGate(gate, x=null, y=null) {
    x = (x == null) ? 250 : x;
    y = (y == null) ? 100 : y;
    gates.push(new gate(x, y));
    show();
}

function addDragGate(event) {
    console.log(event);
    let gateTypeRegex = /^.*?([A-Za-z]+)\.png$/;
    let gateObjType = event.dataTransfer.getData("Text").match(gateTypeRegex)[1];
    gateObjType = gateObjType.match(/output|input|[A-Z]+$/);

    let x = event.layerX;
    let y = event.layerY;

    addElement[gateObjType](x, y);
}

function addInput(x=null, y=null) {
    if (inputs.length >= SHAPES.INPUTS) return;

    x = (x == null) ? 100 : x;
    y = (y == null) ? 100 * (1 + inputs.length) : y;
    inputs.push(new LogicGateInput(x, y, inputs.length));
    updateTruthTableShape();
    show();
}
function addOutput(x=null, y=null) {
    if (outputs.length >= SHAPES.OUTPUTS) return;
    
    x = (x == null) ? 600 : x;
    y = (y == null) ? 100 * (1 + outputs.length) : y;
    outputs.push(new LogicGateOutput(x, y, SHAPES.INPUTS + outputs.length));
    updateTruthTableShape();
    show();
}

// Converters

function *getIterator2toN(n) {
    let result = [];
    result.length = n;
    for (let i = 0; i < (2 << (n - 1)); i++) {
        for (let j = 1; j <= n; j++) {
            result[n - j] = (i >> (j - 1)) % 2;
        }
        // console.log(...result);
        yield result;
    }
}

function getLogic() {
    updateTruthTableShape();

    for (let outputIndex = 0; outputIndex < outputs.length; outputIndex++) {
        let s = outputs[outputIndex].stringLogic.substring(4);
        let q = processLogic(s);

        // Calc result of applying the rule q to all the posible values of the inputs.
        let logicTable = [];
        let iterator = getIterator2toN(inputs.length);

        do {
            let inputSequence = iterator.next();
            if (inputSequence.done) {
                break;
            }
            let vals = inputSequence.value;

            for (let i = 0; i < vals.length; i++) {
                let s = `var ${String.fromCharCode(65 + i)} = ${vals[i]} == 1`;
                eval(s);
            }

            logicTable.push(eval(q));
        } while (true)

        // Represent result

        let increment = (2<<(3 - inputs.length));
        if (inputs.length == 4) {
            increment = 1;
        }
        for (let s = 0, i = 0; s < 16; s+=increment, i++) {
            $($($($("tr")[s + 1]).children()[SHAPES.INPUTS + outputIndex]).children()[0]).attr("checked", logicTable[i]);
        }
    }
}

function processLogic(str) {
    if (/^[A-Z]$/.test(str)) {
        return str;
    }

    let operation, input1, input2;

    let i = 1;
    while(str[++i] != "(");

    operation = str.substring(0, i);
    str = str.substring(i + 1);

    let depth = 0;
    i = 0;
    while (true) {
        if (str[i] == "," && depth == 0) break
        else if (str[i] == "(") depth++;
        else if (str[i] == ")") depth--;
        i++;
    }

    input1 = str.substring(0, i);
    input2 = str.substring(i + 2, str.length - 1);

    const S = OPERATION_CONVERTER[operation];
    return `${S.PRE} ${processLogic(input1)} ${S.MID} ${processLogic(input2)} ${S.POS}`;
}

function updateTruthTableShape() {
    /* 
        n = 1: 0, 8
        n = 2: 0, 4, 8, 12
        n = 3: 0, 2, 4, 6, 8, 10, 12, 14
        n = 4: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
    */

    let increment = (2<<(3 - inputs.length));
    if (inputs.length == 4) {
        increment = 1;
    }

    $("tr").css("display", "none");
    $($("tr")[0]).css("display", "table-row");

    for (let s = 0; s < 16; s+=increment) {
        $($("tr")[s + 1]).css("display", "table-row");
    }

    $("th").css("display", "table-cell");
    $("td").css("display", "table-cell");
    for (let i = inputs.length; i < 4; i++) {
        $($("th")[i]).css("display", "none");
        $(`td:nth-child(${i+1})`).css("display", "none");
    }

    for (let i = outputs.length + 4; i < 7; i++) {
        $($("th")[i]).css("display", "none");
        $(`td:nth-child(${i+1})`).css("display", "none");
    }
}
