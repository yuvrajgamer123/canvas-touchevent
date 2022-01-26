canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


var last_x,last_y;
color="black";
width=1;
var swidth=screen.width;
var sheight=screen.height;
new_width=screen.width-70;
new_height=screen.height-300;
if (swidth<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    
    last_x=current_x;
    last_y=current_y;
}
function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}