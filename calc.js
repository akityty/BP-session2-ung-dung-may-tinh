let x1 = document.getElementById("num1").value;
let x2 = document.getElementById("num2").value;

function add() {
    document.getElementById("demo").innerHTML=x1+x2;
}
function sub() {
    document.getElementById("demo").innerHTML=x1-x2;
}
function mul() {
    document.getElementById("demo").innerHTML=x1*x2;
}
function div() {
    document.getElementById("demo").innerHTML=x1/x2;
}