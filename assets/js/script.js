$(function(){

AOS.init();



$('.banSlider').slick({
	infinite: true,
	dots: true,
	arrows: false,
});




$('#nav-icon4').click(function(){
  $(".header").toggleClass('open');
  $('.mainMenu').toggleClass('activeMenu');
});


// Smooth Scroll 
	jQuery('.smoothClick, .smoothLink > a').click(function() {
	
	var dis = jQuery(this);

	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top-100
		}, 1000);
		return false;
	  }
	}
  });



$(".arrowIcon").append("<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink=' http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 421' style='enable-background:new 0 0 492 421;' xml:space='preserve'><g><g><path d='M484.1,191.9L306.5,14.2c-5.1-5.1-11.8-7.9-19-7.9c-7.2,0-14,2.8-19,7.9l-16.1,16.1c-5.1,5.1-7.9,11.8-7.9,19 c0,7.2,2.8,14.2,7.9,19.3l103.7,103.9H26.6C11.7,172.5,0,184.1,0,199v22.8c0,14.9,11.7,27.6,26.6,27.6h330.5L252.2,353.9c-5.1,5.1-7.9,11.7-7.9,18.9c0,7.2,2.8,13.9,7.9,18.9l16.1,16.1c5.1,5.1,11.8,7.8,19,7.8c7.2,0,14-2.8,19-7.9l177.7-177.7c5.1-5.1,7.9-11.9,7.9-19.1C492,203.8,489.2,197,484.1,191.9z'/></g></g></svg>");



if (window.matchMedia("(max-width: 767px)").matches) {
	$('.footer h3').click(function(){
	  $(this).parents('.col-12').find('p').slideToggle();
	  $(this).parents('.fotLinks').find('ul').slideToggle();
	  $(this).toggleClass('active');
	});
}




$(function () {

	//*****************************
	// Responsive Slider
	//*****************************
	var respsliders = {
		1: { slider: '.xs-slider' }
	};

	$.each(respsliders, function () {
		$(this.slider).slick({
			arrows: true,
			dots: false,
			autoplay: true,
			settings: "unslick",
			responsive: [
				{
					breakpoint: 2000,
					settings: "unslick"
				},
				{
					breakpoint: 767,
					settings: {
						unslick: true
					}
				}
			]
		});
	});




});//end Main function








}); //---Main Function Close