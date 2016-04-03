$(document).ready(function(){
	
	$( ".hamburger, .cover" ).click(function() {
	  $( ".hamburger" ).toggleClass( "displayed" );
	  $( ".cover" ).toggleClass( "displayed" );
	  $( ".categories" ).toggleClass( "displayed" );
	});
	
});
