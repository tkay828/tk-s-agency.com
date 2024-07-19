const nav = document.getElementById("nav");
function show() {
    nav.style.width = "100%";
    document.getElementById("show").style.width = "0px"; 
}
function hide( ){
    nav.style.width = "0%";
    document.getElementById("show").style.width ="30px";
}
 function moveTarget() {
    const target = document.getElementById("target");
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';
  
  }
  target.addEventListener('mouseover',function() {
    moveTarget();

})   
  
function myfunc() {
  alert("THANK YOU VERY MUCH");
  
}             