(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 250) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//  Fact counter
	function CounterNumberChanger() {
		var timer = $('.timer');
		if (timer.length) {
			timer.appear(function () {
				timer.countTo();
			})
		}

	}


	//Tabs Box / Jquery Tabs
	if ($('.tabs-box').length) {

		//Tabs
		$('.tabs-box .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabs-box .tab-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabs-box .tab').fadeOut(0);
			$('.tabs-box .tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
			var windowWidth = $(window).width();
			if (windowWidth <= 700) {
				$('html, body').animate({
					scrollTop: $('.tabs-content').offset().top
				}, 1000);
			}
		});

	}

	//Accordion Box
	function accordion() {
		if ($('.accordion-box').length) {
			$(".accordion-box").on('click', '.accord-btn', function () {

				if ($(this).hasClass('active') !== true) {
					$('.accordion .accord-btn').removeClass('active');

				}

				if ($(this).next('.accord-content').is(':visible')) {
					$(this).removeClass('active');
					$(this).next('.accord-content').slideUp(500);
				} else {
					$(this).addClass('active');
					$('.accordion .accord-content').slideUp(500);
					$(this).next('.accord-content').slideDown(500);
				}
			});
		}
	}


	//Testimonials Slider
	if ($('#testimonials-one').length) {

		var slider = new MasterSlider();
		slider.setup('testimonials-one', {
			autoplay: true,
			loop: true,
			width: 80,
			height: 80,
			speed: 20,
			view: 'wave',
			preload: 0,
			space: 30,
			autoHeight: true,
			wheel: true,
			filters: {
				grayscale: 1
			},
			viewOptions: { centerSpace: 1.6 }
		});
		slider.control('arrows');
		slider.control('slideinfo', { insertTo: '#staff-info' });

	}



	//Gallery With Filters
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}


	//Jquery Spinner / Quantity Spinner
	if ($('.quantity-spinner').length) {
		$("input.quantity-spinner").TouchSpin({
			verticalbuttons: true
		});
	}


	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

		$sync3
			.owlCarousel({
				loop: true,
				items: 1,
				margin: 0,
				nav: true,
				navText: ['<span class="icon-arrows"></span>', '<span class="right_arrow icon-arrows"></span>'],
				dots: false,
				autoplay: true,
				autoplayTimeout: 5000
			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = false;
					$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});

		$sync4
			.owlCarousel({
				loop: true,
				margin: 10,
				items: 1,
				nav: false,
				navText: ['<span class="icon icon-arrows"></span>', '<span class="icon right_arrow icon-arrows"></span>'],
				dots: false,
				center: false,
				autoplay: true,
				autoplayTimeout: 5000,
				responsive: {
					0: {
						items: 1,
						autoWidth: false
					},
					400: {
						items: 1,
						autoWidth: false
					},
					600: {
						items: 1,
						autoWidth: false
					},
					1000: {
						items: 1,
						autoWidth: false
					},
					1200: {
						items: 1,
						autoWidth: false
					}
				},
			})

			.on('click', '.owl-item', function () {
				$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = true;
					$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});
	}


	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
						duration: r,
						easing: "linear",
						step: function () {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".count-text").text(this.countNum);
						}
					});
			}

		}, { accY: 0 });
	}


	//Custom Seclect Box
	if ($('.custom-select-box').length) {
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}


	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}


	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});
	}

	//Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});
	}


	//Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
			}
		});
	}


	//Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}

	//Four Item Carousel
	if ($('.four-item-fluidcarousel').length) {
		$('.four-item-fluidcarousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1500: {
					items: 4
				}
			}
		});
	}

	//five Item Carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//six Item Carousel
	if ($('.six-item-carousel').length) {
		$('.six-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				767: {
					items: 3
				},
				900: {
					items: 4
				},
				1024: {
					items: 5
				},
				1200: {
					items: 6
				}
			}
		});
	}

	//Masonary
	function enableMasonry() {
		if ($('.masonry-items-container').length) {

			var winDow = $(window);
			// Needed variables
			var $container = $('.masonry-items-container');

			$container.isotope({
				itemSelector: '.masonry-item',
				masonry: {
					columnWidth: 0
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});

			winDow.bind('resize', function () {

				$container.isotope({
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
			});
		}
	}

	enableMasonry();

	// isotope style
	if ($('.isotope_block').length) {
		$('.isotope_block').isotope({
			layoutMode: 'masonry'
		});
	}



	//Price Range Slider
	if ($('.range-slider-price').length) {

		var priceRange = document.getElementById('range-slider-price');

		noUiSlider.create(priceRange, {
			start: [180, 560],
			limit: 1000,
			behaviour: 'drag',
			connect: true,
			range: {
				'min': 100,
				'max': 1000
			}
		});

		var limitFieldMin = document.getElementById('min-value-rangeslider');
		var limitFieldMax = document.getElementById('max-value-rangeslider');

		priceRange.noUiSlider.on('update', function (values, handle) {
			(handle ? limitFieldMax : limitFieldMin).value = values[handle];
		});
	}




	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}


	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true
				},
				phone: {
					required: true,
				},
				subject: {
					required: true,
				},
				message: {
					required: true
				}
			}
		});
	}

	//===Brand Carousel===
	function brandCarousel() {
		if ($('.brand').length) {
			$('.brand').owlCarousel({
				dots: false,
				loop: true,
				margin: 30,
				nav: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>'
				],
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 4
					},
					800: {
						items: 3
					},
					1024: {
						items: 4
					},
					1100: {
						items: 4
					},
					1200: {
						items: 5
					}
				}
			});
		}
	}


	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	// Dom Ready Function
	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			CounterNumberChanger();
			brandCarousel();
			accordion();
			JoingTheClub();
		})(jQuery);
	});

	/* ==========================================================================
		 When document is Scrollig, do
		 ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
		 When document is loaded, do
		 ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
	});


	/* ==========================================================================
		 Join the club - WIP
		 ========================================================================== */

	function JoingTheClub() {
    /* $("#notifyText").text("Ryan M. from Daytona Beach, FL");
    var $notify = $("#notify");
    setTimeout(function() {
        $notify.slideToggle(500); //delay showing
    }, 5000);
    setTimeout(function() {
        $notify.slideToggle(500);
    }, 10000); */
	};

})(window.jQuery);