
//FUNCIÓN PARA SCROLL AUTOMÁTICO

var arrow = document.getElementById('arrow');
var firstPage = document.getElementById('first-page');

arrow.addEventListener('mouseover', function() {
    
    var windowHeight = document.documentElement.clientHeight;
    
    window.scrollBy({top:windowHeight, behavior:'smooth'});

});

//FUNCIÓN PARA DESVANECER FISRT PAGE

window.addEventListener('scroll', function() {
    
    var scrollY = window.scrollY;

    var scrollclient = 50; 

    if (scrollY < scrollclient) {
        
        firstPage.style.opacity = '1';
        firstPage.style.visibility = 'visible';
    } else{
        
        firstPage.style.transition = 'opacity 0.2s ease';
        firstPage.style.opacity = '0';
        firstPage.style.visibility = 'hidden';
    }
    
});


// MENU RESPONSIVE

var btnMenuOpen = document.getElementById("btnMenuOpen"), 
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu"),
    enlaces = document.getElementById("enlaces");



btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
    btnMenuOpen.classList.add("active")
});


btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
    btnMenuOpen.classList.remove("active");
});


 
enlaces.addEventListener("click", function() {
    menuResponsive.classList.remove("active");
    btnMenuOpen.classList.remove("active");
});



