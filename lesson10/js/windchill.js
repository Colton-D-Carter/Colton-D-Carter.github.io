var t = 50;
var s = 3.0;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,.16) + .4275 * t * Math.pow(s,.16);
document.getElementById("demo1").innerHTML = f;
document.getElementById("demo2").innerHTML = s;
document.getElementById("demo3").innerHTML = t;