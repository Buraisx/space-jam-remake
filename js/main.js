$(document).ready(function(){
	
	$("h1").click(function(){
		alert(location);
	});
	$(window).scroll(function(){
		// Retrieve location of h1 element offset from the top
		// location is static 20pixels
		var location = $("h1").offset().top;
		var scroll =  $(window).scrollTop();
		if (location - scroll == 0) {
			alert("hey!");
		}
	});
});