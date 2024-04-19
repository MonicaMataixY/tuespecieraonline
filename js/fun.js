
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



// FUNCIÓN PARA DEJAR LA CLASE ACTIVE EN LOS BOTONES PC Y MOBILE
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones
    let botones = document.querySelectorAll("#filter");
  
    // Agregar un evento de clic a cada botón
    botones.forEach(function(boton) {
      boton.addEventListener("click", function() {
        // Remover la clase 'active' de todos los botones
        botones.forEach(function(b) {
          b.classList.remove("active");
        });
  
        // Agregar la clase 'active' solo al botón clickeado
        boton.classList.add("active");
      });
    });
  });


//FUNCIÓN PARA FILTRAR POR CATEGORÍAS 
//1 Capturo el contenedor de todos los botones 
const filterButtons = document.querySelector('.filter__buttons'); 
const cards = document.querySelectorAll('.spicy-cards'); 

//2 Crear evento "click" sobre el contenedor
filterButtons.addEventListener('click', function(e){
    
    // guardo en variable qué botón he clicado
    const clickedBtn = e.target;

    //extraigo data-filter del objeto dataset
    const filterName = clickedBtn.dataset.filter
    if(filterName) {
        cards.forEach(cardItem => {

            //extraer data category
            const category = cardItem.dataset.category;
        
            //comparar filtro y categoría
        
            if(filterName == category || filterName == "all") {
                cardItem.style.display= "block";
            } else {
                cardItem.style.display= "none";
            }
           });
    } 

   
});



//FUNCIÓN PARA FILTRAR POR CATEGORÍAS MOBILE

//1 Capturo el contenedor de todos los botones 
const cardsMobile = document.querySelectorAll('.spicy-cards__mobile'); 

//2 Crear evento "click" sobre el contenedor
filterButtons.addEventListener('click', function(e){
    
    // guardo en variable qué botón he clicado
    const clickedBtn = e.target;
    
    //extraigo data-filter del objeto dataset
    const filterName = clickedBtn.dataset.filter
    if(filterName) {
        cardsMobile.forEach(cardItem => {

            //extraer data category
            const category = cardItem.dataset.category;
        
            //comparar filtro y categoría
            if(filterName == category || filterName == "all") {
                cardItem.style.display= "block";
            } else {
                cardItem.style.display= "none";
            }
           });
    } 
});

