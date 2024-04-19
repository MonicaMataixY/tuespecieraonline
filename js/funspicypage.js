
//MENU BURGUER - Funciones para abrir y cerrar el menu hamburguesa - responsive
//Capturo los elementos
const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

//Al hacer click en el boton del menu hamburguesa, le digo que haga el menu responsive visible
openMenu.addEventListener("click", ()=> {
    nav.classList.add("visible");
});

//Al hacer click en la X le digo que haga no haga el menu responsive visible, que lo cierre
closeMenu.addEventListener("click", ()=> {
    nav.classList.remove("visible");
});



//FUNCIÓN PARA HACER EL EFECTO ACCORDEON


let elementAcordeon = document.getElementsByClassName("accordeon") //capturo los elementos accordeon 

for (let i=0; i<elementAcordeon.length; i++){ //los recorro para aplicar la función sobre cada uno de ellos 
    elementAcordeon[i].addEventListener("click", function(){
        this.classList.toggle("active"); //con toggle, le digo que al clicar haga visible la clase active y muestre el contenido del panel
        let panel = this.nextElementSibling;
        if(panel.style.display == "block") {
            panel.style.display = "none";
            
        }else {
            panel.style.display = "block";
        }
         }) }