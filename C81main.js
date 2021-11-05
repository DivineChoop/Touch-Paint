var lastposofx, lastposofy

canvas = document.getElementById("can1");
ctx = canvas.getContext("2d");

var color = "red";
var widthofline = "1";
var radius = "";

// canvas.addEventListener("mousedown", my_mousedown)
// function my_mousedown(e) {
//     mouseevent = "mouseDown";
// }

// canvas.addEventListener("mouseleave", my_mouseleave)
// function my_mouseleave(e) {
//     mouseevent = "mouseLeave";
// }

// canvas.addEventListener("mouseup", my_mouseUp)
// function my_mouseUp(e) {
//     mouseevent = "mouseUp";
// }

var width = screen.width;
var new_width = screen.width - 70;
var height = screen.height;
var new_height = screen.height - 100;

if (width < 992) {
    document.getElementById("can1").width = new_width;
    document.getElementById("can1").height = new_height;
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
    currentposofmousex = e.touches[0].clientX - canvas.offsetLeft;
    currentposofmousey = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchMove)
function my_touchMove(e) {
    currentposofmousex = e.touches[0].clientX - canvas.offsetLeft;
    currentposofmousey = e.touches[0].clientY - canvas.offsetTop;
    // if (mouseevent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;

    console.log("lastposofx and y coordinates= ");
    console.log("x = " + lastposofx + "y = " + lastposofy);
    ctx.moveTo(lastposofx, lastposofy);
    console.log("currentposofmousex and y coordinates= ");
    console.log("x = " + currentposofmousex + "y = " + currentposofmousey);
    ctx.lineTo(currentposofmousex, currentposofmousey);
    ctx.stroke();
    // }
    lastposofx = currentposofmousex;
    lastposofy = currentposofmousey;
}