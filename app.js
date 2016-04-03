$(document).ready(function(){
	
	$( ".hamburger, .cover" ).click(function() {
	  $( ".hamburger, .cover, .categories" ).toggleClass( "displayed" );
	});
	
	
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
