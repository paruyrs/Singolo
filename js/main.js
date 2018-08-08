window.onload = function () {

		(function () {
		
		var w = $(window).width();
		
		//Start of Slider
		if (w>583){

		var slider=$(".header-slider .slider"),
			headerOuter=$(".header-outer"),
			logo=$(".header-slider .logo"),
			nav=$(".header-slider .header-right ul"),
			sliderContent=$(".header-slider .content");

		headerOuter.attr("data-0" , "height:89px; border-bottom:6px solid rgb(50,55,70); opacity:1; border-radius: 0px;");
		headerOuter.attr("data-500" , "height:47px; border-bottom:3px solid rgb(50,55,70); opacity:0.5; border-radius: 20px;");

		logo.attr("data-0" , "margin-top:34px; width:100%; background-size:100%;");
		logo.attr("data-500" , "margin-top:16px; width:80%; background-size:100%;");

		nav.attr("data-0", "line-height: 95px;");
		nav.attr("data-500", "line-height: 50px;");

		sliderContent.attr("data-200" , "opacity:1");
		sliderContent.attr("data-700" , "opacity:0");	

		slider.attr("data-100" , "opacity:1;");
		slider.attr("data-400" , "opacity:0; ");
	}
	//End of slider
		
		if (w>1020)
		{

			//Start of Services

			var services = $("div#services"),
				icons = services.find ("img.icon"),
				h3 = services.find ("h3"),
				span = services.find ("span"),
				h2 = services.find("h2"),
				box1 = services.find("div.block_box:nth-child(1)"),
				box2 = services.find("div.block_box:nth-child(2)"),
				box3 = services.find("div.block_box:nth-child(3)"),
				box4 = services.find("div.block_box:nth-child(4)"),
				box5 = services.find("div.block_box:nth-child(5)"),
				box6 = services.find("div.block_box:nth-child(6)"),
				intro = services.find ("div.intro");

			h2.attr ( "data-550" , "letter-spacing: 30px; opacity:0");
			h2.attr ( "data-700" ,  "letter-spacing: 2px; opacity:1");
			intro.attr ( "data-550" , "letter-spacing: 5px; opacity:0");
			intro.attr ( "data-700" ,  "letter-spacing: 1px; opacity:1");

			icons.attr ( "data-550" , "-webkit-transform: translate(70px , 0); opacity:0" );
			icons.attr ( "data-700" , "-webkit-transform: translate(0 , 0); opacity:1");
			span.css ("display", "block");
			span.attr ( "data-550" , "-webkit-transform: translate(0 , -50px ); opacity:0" );
			span.attr ( "data-700" , "-webkit-transform: translate(0 ,0 ); opacity:1" );
			h3.attr ( "data-550" , "-webkit-transform: translate(0 , 90px); opacity:0");
			h3.attr ( "data-700" ,  "-webkit-transform: translate(0 ,0 ); opacity:1");
			// box1.attr ( "data-550" ,  "opacity:0.1");
			// box4.attr ( "data-550" ,  "-webkit-transform: translate( 0 , -162px); opacity:0.1");
			// box1.attr ( "data-800" ,  "opacity:0.3");
			// box4.attr ( "data-800" ,  "-webkit-transform: translate( 0 , -162px); opacity:0.3");
			// box1.attr ( "data-1000" ,  "opacity:1");
			// box4.attr ( "data-1000" ,  "-webkit-transform: translate( 0 , 0); opacity:1");

			// box2.attr ( "data-550" ,  "-webkit-transform: translate( -312px , 0); opacity:0.1");
			// box5.attr ( "data-550" ,  "-webkit-transform: translate( -312px , -162px); opacity:0.1");
			// box2.attr ( "data-800" ,  "-webkit-transform: translate( 0 , 0); opacity:0.3");
			// box5.attr ( "data-800" ,  "-webkit-transform: translate( 0 , -162px); opacity:0.3");
			// box2.attr ( "data-1000" ,  "-webkit-transform: translate( 0 , 0); opacity:1");
			// box5.attr ( "data-1000" ,  "-webkit-transform: translate( 0 , 0); opacity:1");
			

			// box3.attr ( "data-550" ,  "-webkit-transform: translate( -624px , 0); opacity:0.1");
			// box6.attr ( "data-550" ,  "-webkit-transform: translate( -624px , -162px); opacity:0.1");
			// box3.attr ( "data-800" ,  "-webkit-transform: translate( 0 , 0); opacity:0.3");
			// box6.attr ( "data-800" ,  "-webkit-transform: translate( 0 , -162px); opacity:0.3");
			// box3.attr ( "data-1000" ,  "-webkit-transform: translate( 0 , 0); opacity:1");
			// box6.attr ( "data-1000" ,  "-webkit-transform: translate( 0 , 0); opacity:1");


			//End of Services	
		}

	})();


	$(function(){
	   	 var entered = false;
	    $(document).on("scroll",function(){
	        if($("body").scrollTop() > $("#portfolio").position().top - $(window).height()/1.8 && !entered)
			{
				$(".from-left1").css({"opacity":1,"left":0});
				$(".from-right1").css({"opacity":1,"right":0});
				$(".fade").css({"opacity":1});
				$(".from-top").css({"opacity":1, "top":0});
				entered = true;
			}
	    });
	});

	
	$(function(){
    var entered = false;
    $(document).on("scroll",function(){
        if($("body").scrollTop() > $("#about").position().top - $(window).height()/1.8 && !entered)
		{
			$(".from-left").css({"opacity":1,"left":0});
			$(".from-right").css({"opacity":1,"right":0});
			$(".from-bottom").css({"opacity":1,"bottom":0});
			$(".about").css({"opacity":1});
			entered = true;
		}
    });
    
	});

	// Init Skrollr
	var s = skrollr.init();
	 

}


