$("h1").addClass("big-title");

$("input").keypress(function(event) { $("h1").text(event.key); });

$("h1").on("mouseover", function() { $("h1").css("color", "yellow"); })
$("h1").on("click", function() { $("h1").css("color", "purple"); })


//add button before h1
//<button>New</button>
//<h1>Hello</h1>
$("h1").before("<button>New</button>");

//add button after h1
//<h1>Hello</h1>
//<button>New</button>
$("h1").after("<button>New</button>");

//add button inside h1 (in the beginning)
//<h1><button>New</button>Hello</h1>
$("h1").prepend("<button>New</button>");

//add button inside h1 (at the end)
//<h1>Hello<button>New</button></h1>
$("h1").append("<button>New</button>");

//remove the h1 element
//$("h1").remove();

//show the element
//$("h1").show();
//$("h1").fadeIn(); //with animation
//$("h1").slideDown(); //with animation

//hide the element
//$("h1").hide();
//$("h1").fadeOut(); //with animation
//$("h1").slideUp(); //with animation

//toggle the show and hide
//$("h1").toggle();
//$("h1").fadeToggle(); //with animation
//$("h1").slideToggle(); //with animation

//change the css with animation (the css value must be numeric value)
//$("h1").animate({opacity: 0.5});
//$("h1").animate({margin: 20});
//$("h1").animate({margin: "20%"});