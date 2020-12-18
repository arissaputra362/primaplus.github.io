const moveMenuNav = event => {
	const getId = event.id;
	const links = document.querySelectorAll('.navbar .nav-link')
	for(i=0; i<links.length; i++){
		if(links[i].hasAttribute('class')){
			links[i].classList.remove('active')	
		} 
	}

    event.classList.add('active')
}

$(document).ready(function(){

	$('.items').slick({
		dots: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
			}
			},
			{
			breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
			},
			{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
			}
		
		]
	});
});

var $owl = $('#carousel1');
$owl.children().each( function ( index ){
  $(this).attr('data-position', index);

});

$("#carousel1").owlCarousel({
	loop: false,
	center: true,
	margin: 0,
	responsiveClass: true,
	nav: false, 
	responsive: {
	  0: {
		items: 1
	  },
	  680: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
});

$(document).on('click', '.owl-item>div', function(){
	var $speed = 1000;
	$owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});

const showRequiredCategory = event => {
	const getId = event.id;
	const links = document.querySelectorAll('.bimbel-category button')
	for(i=0; i<links.length; i++){
		if(links[i].hasAttribute('class')){
			links[i].classList.remove('active')	
		} 
	}

	event.classList.add('active')
	const getCategory = document.querySelector('.category-'+ getId)
	const categories = document.querySelectorAll('div[class^="category-"]')
	for(i=0; i<categories.length; i++){
		if(categories[i].hasAttribute('class')){
			categories[i].classList.remove('showCategory')	
			categories[i].classList.add('hideCategory')	
		} 
	}

	getCategory.classList.remove('hideCategory')
	getCategory.classList.add('showCategory')
}

var $owl = $('#carousel2');
$owl.children().each( function ( index ){
  $(this).attr('data-position', index);

});

$("#carousel2").owlCarousel({
	loop: false,
	center: true,
	margin: 0,
	responsiveClass: true,
	nav: false, 
	responsive: {
	  0: {
		items: 1
	  },
	  680: {
		items: 2
	  },
	  1000: {
		items: 3
	  }
	}
});
