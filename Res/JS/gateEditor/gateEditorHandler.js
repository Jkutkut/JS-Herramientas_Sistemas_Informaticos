var gateEditorCanvas;
var ctx;


var gates = [];

window.onload = () => {

    gateEditorCanvas = document.getElementById('gateEditor');
    ctx = gateEditorCanvas.getContext('2d');

    gates.push(new LogicGate(100, 100));

    show();
}

function show () {
    for (let i = 0; i < gates.length; i++) {
        showElement(gates[i]);
    }
}

function showElement(element, filled=true) {
    // save previous styles & set our current styles
    ctx.save();
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'blue'
    ctx.lineWidth = 4

    let shape = element.shape;

    ctx.moveTo(...shape[0].pos) // sets our starting point
    ctx.beginPath();
    for (let i = 1; i < shape.length; i++) {
        ctx.lineTo(...shape[i].pos);
    }
    if (filled) {
        ctx.fill(); // no need to closePath, fill automatically closes the path
        // ctx.stroke();
    }
    else {
        ctx.closePath(); // left side and closes the path
        ctx.stroke(); // draws it to screen via a stroke
    }

    ctx.restore();
}