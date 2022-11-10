let button = document.querySelector(".buttonMenuResp");
let respList = document.querySelector(".menuResp");
let content = document.querySelector(".contenido_pagina_home");
let pie = document.querySelector(".pie");


button.addEventListener('click', function(){
    respList.classList.toggle("mostrarList");
})



/* function mostrar(){   
    let scrollTop = document.documentElement.scrollTop;
    let topCont = content.offsetTop;
    for(let i = 0; i <= 1; i++){ 
       if(scrollTop >= topCont){
          content.style.opacity = "1";
        }else if(window.scroll < topCont) {
            content.style.opacity = "0";
        }
    }
    let topPie = pie.offsetTop
    for(let i = 0; i <= 1; i++){        ;
        if(scrollTop >= topPie){
           pie.style.opacity = "1";
        }else if(scrollTop < topPie) {
            pie.style.opacity = "0";
        }
     }
}   

window.onscroll = function(){ mostrar()};
 */
