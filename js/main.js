$( document ).ready(function() {

$('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	// var target = $(id).offset().top;
	if($(id).hasClass("hidden")){
		$(".active").addClass("hidden");
		$(id).removeClass("hidden");
		$(id).addClass("active");
	}
	if ($(this).attr("href") == "#about"){
		$("nav").css("background","#3498db");
		$("nav li a").css("background","#3498db");
		$("body").css("background","#3498db");
		$("section").css("background","#3498db");
		$("header").css("background","#3498db");
		$("footer").css("background","#3498db");
		$("html").css("background","#3498db");
		$(".icon-button").css("background","#3498db")
	}
	else if ($(this).attr("href") == "#work"){
		$("nav").css("background","#ffd071");
		$("nav li a").css("background","#ffd071");
		$("body").css("background","#ffd071");
		$("section").css("background","#ffd071");
		$("header").css("background","#ffd071");
		$("footer").css("background","#ffd071");
		$("html").css("background","#ffd071");
		$(".icon-button").css("background","#ffd071")
	}

	else if ($(this).attr("href") == "#experience"){
		$("nav").css("background","#f0776c");
		$("nav li a").css("background","#f0776c");
		$("body").css("background","#f0776c");
		$("section").css("background","#f0776c");
		$("header").css("background","#f0776c");
		$("footer").css("background","#f0776c");
		$("html").css("background","#f0776c");
		$(".icon-button").css("background","#f0776c")
	}

	else if ($(this).attr("href") == "#contact"){
		$("nav").css("background","#1abc9c");
		$("nav li a").css("background","#1abc9c");
		$("body").css("background","#1abc9c");
		$("section").css("background","#1abc9c");
		$("header").css("background","#1abc9c");
		$("footer").css("background","#1abc9c");
		$("html").css("background","#1abc9c");
		$(".icon-button").css("background","#1abc9c")
	}



	});



document.addEventListener("touchstart", function() {},false);

});



 // #3498db --about
 // #ffd071 --work
 // #f0776c --experience
 // #1abc9c --contact

 // nav, body, section, header