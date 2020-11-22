const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");



/* Mobile menu toggle function */
const toggleMenu =() => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Allow user to close submenu on body click */
const closeSubmenu = (e) => {
	let isClickInside = menu.contains(e.target);
  
	if (!isClickInside && menu.querySelector(".submenu-active")) {
	  menu.querySelector(".submenu-active").classList.remove("submenu-active");
	}
  }

/* Activate Submenu */
 function toggleItem () {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);


/* jQuery document ready functions */

$(document).ready(function(){
    $('.article-slider').slick({
        arrows: false /* disabling slick slider arrows */
    });

	/* Start of custom slick slider arrows */
    $('.custom-prev').click(function(){ 
        $(this).parent().find('.slick-slider').slick('slickPrev');
    } );
    
    $('.custom-next').click(function(e){
        e.preventDefault(); 
        $(this).parent().find('.slick-slider').slick('slickNext');
	} );
	
	/* End of custom slick slider arrows */

    // Calculate users scroll on page and showing back to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    // Back to top button click event
    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

