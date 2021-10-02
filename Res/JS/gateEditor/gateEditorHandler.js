var gateEditorCanvas;
var ctx;


var gates = [];

window.onload = () => {

    gateEditorCanvas = document.getElementById('gateEditor');
    ctx = gateEditorCanvas.getContext('2d');

    gates.push(new LogicGateAND(100, 100));
    gates.push(new LogicGateNAND(300, 100));
    gates.push(new LogicGateNOR(100, 200));
    gates.push(new LogicGateNOT(300, 200));
    gates.push(new LogicGateOR(100, 300));
    gates.push(new LogicGateXNOR(300, 300));
    gates.push(new LogicGateXOR(100, 400));

    show();
}

function show () {
    ctx.save(); // save previous styles & set our current styles
    
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 3

    for (let i = 0; i < gates.length; i++) {
        showElement(gates[i]);
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
        ctx.stroke();

    }
}