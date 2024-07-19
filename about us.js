
const client = document.getElementById("client");
const request = document.getElementById("request");
const complet = document.getElementById("complete");
const rejected = document.getElementById("rejected");
let x = 1;
let y = 1;
let z = 1;
let u = 1;
setInterval(() => {
    x += 1;
    if (x >= 501) {
        clearInterval(interval);
        }
        client.innerHTML = x;
    
}, 10);
setInterval(() => {
    y += 1;
    if (y >= 451) {
        clearInterval(interval);
        }
        request.innerHTML = y;
    
}, 10);
setInterval(() => {
    z += 1;
    if (z >= 291) {
        clearInterval(interval);
        }
        complet.innerHTML = z;
    
}, 10);
setInterval(() => {
    u += 1;
    if (u >= 161) {
        clearInterval(interval);
        }
        rejected.innerHTML = u;
    
}, 10);
const nav = document.getElementById("nav");
function show() {
    nav.style.width = "100%";
    document.getElementById("show").style.width = "0px"; 
}
function hide( ){
    nav.style.width = "0%";
    document.getElementById("show").style.width ="30px";
}
