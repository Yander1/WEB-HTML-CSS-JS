window.onscroll=function(){
    var posicion=window.pageYOffset|| document.documentElement.scrollTop;
    var elemento1=document.getElementById("icon_heart");
    var elemento2=document.getElementById("icon_fire");
    elemento1.style.bottom=posicion*0.1+"px";
    elemento2.style.top=posicion*0.1+"px";

}

/*hacer aparecer menu*/

document.getElementById("icon_menu").addEventListener("click",mostrar_menu);

function mostrar_menu(){
    /*seleccionamos el contenedor*/
    document.querySelector(".menu").classList.toggle("mostrar_menu")
}

/*conteo numero */
const color=document.getElementById('fondo_color')


const numero=document.getElementById('numero');
const numero2=document.getElementById('numero2');
const numero3=document.getElementById('numero3');


let cantidad=0
let cantidad2=0
let cantidad3=0

let cantidadgeneral=0
let cantidadgeneral2=0
let cantidadgeneral3=0



let tiempo=setInterval(() => {
    cantidad+=1
    numero.textContent=cantidad
    
    if(cantidad===5000){
        cantidad=0
        cantidadgeneral+=1
        if(cantidadgeneral===1){
            clearInterval(tiempo)
        }
    }
}, );

let tiempo2=setInterval(() => {
    cantidad2+=1
    numero2.textContent=cantidad2
    if(cantidad2===800){
        cantidad2=0
        cantidadgeneral2+=1
        if(cantidadgeneral2===4){
            clearInterval(tiempo2)
        }
    }
}, 1);

let tiempo3=setInterval(() => {
    cantidad3+=1
    numero3.textContent=cantidad3
    if(cantidad3===500){
        cantidad3=0
        cantidadgeneral3+=1
        if(cantidadgeneral3===4){
         clearInterval(tiempo3)

        }
    }
}, 1);