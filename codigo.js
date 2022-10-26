const nav = document.querySelector("#nav");
const main = document.querySelector("#intro");


function ocultar(){   
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i <= 1; i++){
       let topPos = main.offsetTop;
       if(topPos <= scrollTop){
           nav.classList.add("alt");
        }else{
           nav.classList.remove("alt");
        }
    }
}   

window.onscroll = function(){ ocultar()};
   
