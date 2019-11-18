/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function
	6.Oyo function
		1)Fullpage JS
		2)Ticker JS
		3)Counter JS
		4)Services & Team carousel
		5)Map initialization js
	7.Service,Team toggle window
	8.LightGallery init
	9.Rotate Portfolio init
	10.Placehoder ie9
************************************* **/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  Oyo();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
});
/*****Load function* end*****/

/***** Subscribe JS start *****/
$("#notifyMe").notifyMe(); 
/***** Subscribe JS end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('height', (height));
};
/***** Full height function end *****/


/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
	var width = $(window).width();
	if(width <= 1330) {
		$(".copywrite-wrap").insertAfter($(".connect-add"));
	}
	else 
		{
		$(".copywrite-wrap").appendTo($(".right-patch"));
	}
	if(width <= 974) {
		$(".contact-add").insertAfter($(".connect-add"));
	}
	else 
		{
		$(".contact-add").insertBefore($(".contact-form-wrap"));
	}
}).resize();
/***** Resize function end *****/

/***** Oyo function start *****/
var Oyo = function (){
	/*Fullpage JS*/
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['home', 'problem_and_solution', 'benefit','syllabus','student_contact','contact'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'Problem & Solution', 'benefit','syllabus','Student Contact Form','contact'],
		responsiveWidth: 1300
	});
	
	/*Ticker JS*/
	var nt_title = $('#nt-title').newsTicker({
		row_height: 220,
		max_rows: 1,
		duration: 4000,
		speed: 400,
		pauseOnHover: 1
	});
	
	/*Counter JS*/
	$('#countdown').countdown({ 
		date: '10/24/2017',
	});
	
	/*Services & Team carousel*/
	$('.services-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		navText: ["<img src='img/leftarrow.png' alt='nav'/>","<img src='img/rightarrow.png' alt='nav'/>"],
		dots:false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			768:{
				items:2
			},
			1401:{
				items:3
			}
		}
	});
	
	$('.team-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<img src='img/leftarrow.png' alt='nav'/>","<img src='img/rightarrow.png' alt='nav'/>"],
		dots:false,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			768:{
				items:2
			},
			1024:{
				items:3
			},
			1401:{
				items:4
			}
		}
	});
	
	$('.owl-prev,.owl-next').unwrap();
	$('.owl-prev,.owl-next').unwrap();
	$('.owl-dots').remove();
	
	
	
	/* Map initialization js*/
	if( $('#map_canvas').length > 0 ){	
		var settings = {
			zoom: 16,
			center: new google.maps.LatLng(43.270441,6.640888),
			mapTypeControl: false,
			scrollwheel: false,
			draggable: true,
			panControl:false,
			scaleControl: false,
			zoomControl: false,
			streetViewControl:false,
			navigationControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		 styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]};		
		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});	
		var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Friend!</strong></h4>'+
			'<div id="bodyContent">'+
			'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
			'</div>'+
			'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});	
		var companyImage = new google.maps.MarkerImage('img/pin-dark.png',
			new google.maps.Size(58,63),<!-- Width and height of the marker -->
			new google.maps.Point(0,0),
			new google.maps.Point(35,20)<!-- Position of the marker -->
		);
		var companyPos = new google.maps.LatLng(43.270441,6.640888);	
		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyImage,               
			title:"Our Office",
			zIndex: 3});	
		google.maps.event.addListener(companyMarker, 'click', function() {
			infowindow.open(map,companyMarker);
		});
	}
	
	/* Constellation js*/
	   var particles = {
        dotColor: '#f6e4c7',
        lineColor: '#55617b',
        density: 20000,
        parallax: false
    };
    var particleDensity;
    var options = {
            effectWeight: 1,
            outerBuffer: 1.05,
            elementDepth: 50,
            perspectiveMulti: 1.5,
            enableSmoothing: true,
            onInit: function() {
              $('#particle-target').particleground(particles);
            }
        };
    $("#const").logosDistort(options);
}

/***** Oyo function end *****/

/***** Service,Team toggle window start*****/
$(document).on( 'click', ".services-item .toggle-expand,.team-person .toggle-expand", function (e) {
	e.preventDefault();
	e.stopPropagation();
	var $this = $(this).parent();
	if(($this.find('.expand-content').hasClass('expand-visible')) && (!$this.find('.excont').hasClass('opacity-hide')) ) { 
		$this.find('.excont').addClass('opacity-hide');
		$this.find('.toggle-expand .minus').addClass('opacity-hide');
		$this.find('.toggle-expand .plus').removeClass('opacity-hide');
		setTimeout(function() { 
			$this.find('.expand-content').removeClass('expand-visible');
		},400);
	}
	if(!($this.find('.expand-content').hasClass('expand-visible'))) {
		$this.find('.expand-content').addClass('expand-visible');
		$this.find('.toggle-expand .minus').removeClass('opacity-hide');
		$this.find('.toggle-expand .plus').addClass('opacity-hide');
		setTimeout(function() { 
			$this.find('.excont').removeClass('opacity-hide');
		},800);
	}
	return false;
});
/***** Service,Team toggle window end*****/

/***** Style Switcher start*****/
$(document).on( 'click', "#app_customizer a", function (e) {
	e.preventDefault();
	$('#app_customizer').toggleClass('open-customizer');
	return false;
});	
$(document).on( 'click', ".light-dark-wrap span", function (e) {
	e.preventDefault();
	var target = $('body');
	if(this.id == 'light_bg'){
		$('#dark_bg').removeClass('active-bg');
		$(this).addClass('active-bg');
		target.removeClass('dark-theme').addClass('light-theme');
	}	
		else if(this.id == 'dark_bg') {
			$('#light_bg').removeClass('active-bg');
			$(this).addClass('active-bg');
			 target.removeClass('light-theme').addClass('dark-theme');
		} 
	return false;
});

$(document).on( 'click', ".colors span", function (e) {
	e.preventDefault();
	var target = $('body');
	if(this.id == 'pink_pick')
		target.removeClass('blue-color green-color orange-color').addClass('pink-color');
		else if(this.id == 'blue_pick')
			target.removeClass('pink-color green-color orange-color').addClass('blue-color');
			else if(this.id == 'green_pick')
				target.removeClass('blue-color pink-color orange-color').addClass('green-color');
				else if (this.id == 'orange_pick')
					target.removeClass('blue-color green-color pink-color').addClass('orange-color');
	return false;
});

/***** Style Switcher end*****/ 

/***** LightGallery init start*****/	
$('#portfolio').lightGallery({  showThumbByDefault: false,hash: false});
$('#video_player').lightGallery({  showThumbByDefault: false,hash: false,zoom: false,counter:false});
/***** LightGallery init end*****/			

/***** Rotate Portfolio init start*****/	
$('#rot_slider').rotateSlider({});
/***** Rotate Portfolio init end*****/ 

/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/