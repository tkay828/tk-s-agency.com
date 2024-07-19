const ii = document.getElementById("iii");
const intro = "Gallery/images";
const speed = 200;
let i = 0;
if (i < intro.length) {
    setInterval(() => {
        ii.innerHTML += intro.charAt(i);
        i++; 
    }, speed);

    }
      const nav = document.getElementById("nav");
    function show() {
        nav.style.width = "100%";
        document.getElementById("show").style.width = "0px"; 
    }
    function hide( ){
        nav.style.width = "0%";
        document.getElementById("show").style.width ="30px";
    }