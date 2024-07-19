const nam = document.getElementById("demo");
const intro = "website designer";
const speed = 200;
let i = 0;
if (i < intro.length) {
    setInterval(() => {
        nam.innerHTML += intro.charAt(i);
        i++; 
    }, speed);

    }
    if (i = intro.length) {
        
            i = 0;    
    } 

    
    (function (){
var submitButton = document.getElementById("submit");
var clickButton = document.getElementById("open");
var Dialog = document.getElementById("dialog");
clickButton.addEventListener('click', function(){
    dialog.showModal();
});
submitButton.addEventListener('click',function(){
    dialog.close();
});  
    })();
    const nav = document.getElementById("nav");
    function show() {
        nav.style.width = "100%";
        document.getElementById("show").style.width = "0px"; 
    }
    function hide( ){
        nav.style.width = "0%";
        document.getElementById("show").style.width ="30px";
    }