const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
let painting = false;

canvas.width = 700;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

function startPainting() {
  painting = true;
}

function stopPainting(){
  painting = false;
}

function onMouseMove(e){
  const x = e.offsetX;
  const y = e.offsetY;

  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseLeave(e){
  stopPainting();
}