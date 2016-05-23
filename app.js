$(document).ready(function(){
	
	
	//MOBILE MENU TOGGLE
	$( ".hamburger, .cover" ).click(function() {
	  $( ".hamburger, .cover, .categories, .main-nav" ).toggleClass( "displayed" );
	});
	
	
	//SCROLL TO
	$('a[href^="#"]').click(function(e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
				
});
