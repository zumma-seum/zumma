const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const sizeRange = document.getElementById("jsSize");
const opacityRange = document.getElementById("jsOpacity");
const mode = document.getElementById("modeBtn");
const reset = document.getElementById("resetBtn");
const eraser = document.getElementById("eraserBtn");
const saveBtn = document.getElementById("saveBtn");

ctx.fillStyle = "#2c2c2c";
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 6;
ctx.globalAlpha= 1;

canvas.width = 800;
canvas.height = 500;

let drawingValue = false;
let fillValue = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!fillValue) {
        if(!drawingValue) {
            ctx.beginPath();
            ctx.moveTo(x,y);
        } else {
            ctx.lineTo(x,y);
            ctx.stroke();
        };
    };
};

function onMouseDown() {
    drawingValue = true;
};
function onMouseUp() {
    drawingValue = false;
};
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleOpacityClick(event) {
    const opacity = event.target.value;
    ctx.globalAlpha = opacity;
}
function handleModeChange() {
    if(fillValue){
        fillValue = false;
        mode.innerText = "Fill";
    } else {
        fillValue = true;
        mode.innerText = "Paint"
    }
}
function fillCanvas() {
    if(fillValue) {
        drawingValue = false;
        ctx.fillRect(0,0,800,500);
    }
}
function handleResetClick() {
    ctx.clearRect(0,0,800,500);
}
function handleEraserClick() {
    ctx.strokeStyle = "white";
    drawingValue = false;
    fillValue = false;
}
function handleRightClick(event) {
    event.preventDefault();
}
function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("click", fillCanvas)
    canvas.addEventListener("contextmenu", handleRightClick);
};
if(colors) {
    Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
}
if(sizeRange) {
    sizeRange.addEventListener("input", handleRangeChange);
}
if(opacityRange) {
    opacityRange.addEventListener("input", handleOpacityClick);
}
if(mode){
    mode.addEventListener("click",handleModeChange);
}
if(reset){
    reset.addEventListener("click",handleResetClick);
}
if(eraser){
    eraser.addEventListener("click", handleEraserClick);
}
if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}