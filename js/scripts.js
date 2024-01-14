(function ($) {
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);

	if ( !isIE ) {
		//IE specific code goes here
		"use strict";
	}

	$('[data-toggle="tooltip"]').tooltip();

	/*** Sticky header */
	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$(".header").addClass("stop");
			$(".header .top-bar").hide('.d-none');
		} else {
			$(".header").removeClass("stop");
			$(".header .top-bar").show(".d-block");
		}
	});

	/*** Sticky header */
	var fixedContentPos = true;
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 100;

	window.addEventListener("scroll", () => {
	  	const currentScroll = window.pageYOffset;
	  	if (currentScroll <= 0) 
	  	{
	    	body.classList.remove(scrollUp);
	    	return;
	  	}

	  	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
	  	{
	    	body.classList.remove(scrollUp);
	    	body.classList.add(scrollDown);
	  	} 
	  	else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
	  	{
	    	body.classList.remove(scrollDown);
	    	body.classList.add(scrollUp);
	  	}

	  	lastScroll = currentScroll;
	});

    /*** Navbar Menu */
	$('.navbar-toggle').sidr({
		name: 'sidr-main',
		side: 'right',
		source: '#sidr',
		displace: false,
		renaming: false,
	});

	$('.navbar-toggle.in').on('click', function(e){
		e.preventDefault();
		$.sidr('close', 'sidr-main');
	});

	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$.sidr('close', 'sidr-main');
		}
	});

	function powerelevatorltdMobileMenu() {
	    var $nav = $(".navbar-mobile"),
	        $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back'><div class='control'>Back<span class='icon-right'></span></div></li>");

	    // For Title
	    $('.navbar-mobile li.dropdown > a').each(function(){
	        $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a>" + $(this).text() +"</a></div>");
	    });

	    // open sub-level
	    $('.navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
	        e.preventDefault();
	        e.stopPropagation();

	        $(this).parent().parent().addClass("is-open");
	        $(this).parents().find( '.navbar-mobile' ).addClass("is-parent");

	        var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
	            gutter = $('.pel-mobile-nav');

	        if ( gutter ) 
	        {
	            gutter.height(header);
	        }
	    });

	    // go back
	    $back_btn.on("click", ".dropdown-back", function(e) {
	        e.stopPropagation();
	        $(this)
	        .parents(".is-open")
	        .first()
	        .removeClass("is-open");

	        var header = $(this).parents(".is-parent").first().height();

	        $(this)
	        .parents(".is-parent")
	        .first()
	        .removeClass("is-parent");

	        var gutter = $('.pel-mobile-nav');

	        setTimeout(function() {
	            if (gutter) {
	                gutter.height(header);
	            } 
	        }, 200);
	    });
	}

	powerelevatorltdMobileMenu();

    /*** ScrollDown */
	$('.scrollDown').click(function() {
	    var target = $('#primary');
	    var space = $(this).data('space');

	    if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - space
	        }, 1e3, "easeInOutExpo");
	    }
	});

	/*** Smooth scroll */
	$('.sscroll, .sscroll a').click(function() {
       	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           	var target = $(this.hash);
           	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           	if (target.length) {
               	$('html,body').animate({
                   scrollTop: target.offset().top - 60
               	}, 1e3, "easeInOutExpo");

               return false;
           	}
       	}
    });

	/*** Header height = gutter height */
	function setGutterHeight() {
		var header = document.querySelector('.header'),
			  gutter = document.querySelector('.header-gutter');
		if (gutter) {
			gutter.style.height = header.offsetHeight + 'px';
		}
	}
	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;

	/*** inspire-brands-slider */
    $('.banner-slider').slick({
        speed: 500,
        fade: true,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

	/*** newarrival__slider */
    $('.testmonial-slider').slick({
        dots: false,
        speed: 500,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1,
        prevArrow: $(".slick__control.prev"),
        nextArrow: $(".slick__control.next"),
    });

	$('.product-slider-for').slick({
		fade: true,
		dots: false,
		arrows: false,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
  		autoplaySpeed: 2000,
		adaptiveHeight: true,
		asNavFor: '.product-slider-nav'
	});

	$('.product-slider-nav').slick({
		dots: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,
		asNavFor: '.product-slider-for',
		responsive: [
		    {
		      	breakpoint: 576,
		      	settings: {
		        	slidesToShow: 3
		      	}
		    },
		    {
		      	breakpoint: 481,
		      	settings: {
		        	slidesToShow: 2
		      	}
		    }
		]
	});

    /*** enable lightbox */
    $('.gallery-popup').magnificPopup({
 		delegate: 'a.popup',
 		type: 'image',
 		midClick: true,
 		preloader: false,
 		fixedBgPos: true,
 		removalDelay: 500,
 		fixedContentPos: true,
 		closeBtnInside: false,
 		gallery: {
	        enabled: true,
	        navigateByImgClick: true,
	        preload: [0,1]
	    },
 		callbacks: {
		    beforeOpen: function() {
		        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		        this.st.mainClass = 'mfp-move-from-top';
		    },
		},
 		closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Close<span class="icon-cancel"></span></button>',
    });
	
	/*** enable lightbox */
	$('.gallery-popup').on('click', function(event) {
		event.preventDefault();
		
		var gallery = $(this).attr('href');

		$(gallery).magnificPopup({
      		delegate: 'a',
      		type: 'image',
      		midClick: true,
      		preloader: false,
      		fixedBgPos: true,
      		removalDelay: 500,
      		fixedContentPos: true,
      		closeBtnInside: false,
	 		gallery: {
		        enabled: true,
		        navigateByImgClick: true,
		        preload: [0,1]
		    },
	        image: {
	    	  markup:
	    	  	'<div class="mfp-figure">'+
	    		    '<div class="mfp-top-bar">'+
	    				'<div class="mfp-title"></div>'+
	    				'<div class="mfp-counter"></div>'+
	    		    '</div>'+

	    		    '<figure class="mfp-img-wrap">'+
	    		        '<div class="mfp-img"></div>'+
	    		    '</figure>'+
	    	  	'</div>',
	    		cursor: 'mfp-zoom-out-cur',
	    		titleSrc: 'title',
	    		verticalFit: true,
	    		tError: '<a href="%url%">The image</a> could not be loaded.'
	        },
			callbacks: {
			    beforeOpen: function() {
			        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			        this.st.mainClass = 'mfp-move-from-top';
			    },
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Close<span class="icon-cancel"></span></button>',
		}).magnificPopup('open');
	});

	/*** Cursor */
	const cursor = document.querySelector('#cursor');

	if ( cursor ) {
		
		const cursorCircle = cursor.querySelector('.cursor__circle');

		const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
		const pos = { x: 0, y: 0 }; // cursor's coordinates
		const speed = 0.4; // between 0 and 1

		const updateCoordinates = e => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('mousemove', updateCoordinates);

		function getAngle(diffX, diffY) {
			return Math.atan2(diffY, diffX) * 180 / Math.PI;
		}

		function getSqueeze(diffX, diffY) {
			const distance = Math.sqrt(
				Math.pow(diffX, 2) + Math.pow(diffY, 2)
			);
			const maxSqueeze = 0.15;
			const accelerator = 1500;
			return Math.min(distance / accelerator, maxSqueeze);
		}

		const updateCursor = () => {
			const diffX = Math.round(mouse.x - pos.x);
			const diffY = Math.round(mouse.y - pos.y);

			pos.x += diffX * speed;
			pos.y += diffY * speed;

			const angle = getAngle(diffX, diffY);
			const squeeze = getSqueeze(diffX, diffY);

			const rotate = 'rotate(' + angle +'deg)';
			const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

			cursor.style.transform = translate;
		};

		function loop() {
			updateCursor();
			requestAnimationFrame(loop);
		}

		requestAnimationFrame(loop);

		const cursorModifiers = document.querySelectorAll('[cursor-class]');

		cursorModifiers.forEach(curosrModifier => {
			curosrModifier.addEventListener('mouseenter', function() {
				const className = this.getAttribute('cursor-class');
				cursor.classList.add(className);
			});

			curosrModifier.addEventListener('mouseleave', function() {
				const className = this.getAttribute('cursor-class');
				cursor.classList.remove(className);
			});
		});

		const anchorLinks = document.querySelectorAll('a[href], button');

		anchorLinks.forEach(curosrModifier => {
			curosrModifier.addEventListener('mouseenter', function() {
				const className = 'anchor';
				cursor.classList.add(className);
			});

			curosrModifier.addEventListener('mouseleave', function() {
				const className = 'anchor';
				cursor.classList.remove(className);
			});
		});
	}

	/*** Generated by CoffeeScript 1.9.2 */
	function stickyKit() {
	    $("[data-sticky_column]").stick_in_parent({
	        parent: "[data-sticky_parent]",
	        offset_top: 120,
	        bottoming: true,
	    });

	    const resetScroll = () => {
	        const scroller = $("body,html");
	        scroller.stop(true);

	        if ($(window).scrollTop() !== 0) {
	            scroller.animate({ scrollTop: 0 }, "fast");
	        }
	        return scroller;
	    };

	    window.scroll_it = () => {
	        const max = $(document).height() - $(window).height();
	        return resetScroll().animate({ scrollTop: max }, max * 3)
	            .delay(100).animate({ scrollTop: 0 }, max * 3);
	    };

	    window.scroll_it_wobble = () => {
	        const max = $(document).height() - $(window).height();
	        const third = Math.floor(max / 3);
	        return resetScroll().animate({ scrollTop: third * 2 }, max * 3)
	            .delay(100).animate({ scrollTop: third }, max * 3)
	            .delay(100).animate({ scrollTop: max }, max * 3)
	            .delay(100).animate({ scrollTop: 0 }, max * 3);
	    };

	    $(window).on("load resize", () => {
	        $(document.body).trigger("sticky_kit:recalc");
	    });
	}

	const window_width = $(window).width();

	const handleWindowResize = () => {
	    const newWidth = $(window).width();
	    if (newWidth < 992) {
	        $(document.body).trigger("sticky_kit:detach");
	    } else {
	        stickyKit();
	    }
	};

	$(window).on("load resize", handleWindowResize);

	/*** Magnetic button using GSAP */
    function magneticButton(options) {
        let settings = $.extend({
            target: $('[data-magnetic]'), // jQuery element
            class: 'magnetizing',
            attraction: 0.5, // 1 is weak, 0 is strong
            distance: 100, // magnetic area around element
            onEnter: function (data) {
                   
            },
            onExit: function (data) {
                   
            },
            onUpdate: function (data) {
                   
            },
        }, options),

        isEnter = [],

        // distance from mouse to center of target
        distanceFromMouse = function ($target, mouseX, mouseY) {
            let centerX = $target.offset().left + $target.outerWidth() / 2,
            centerY = $target.offset().top + $target.outerHeight() / 2,
            pointX = mouseX - centerX,
            pointY = mouseY - centerY,
            distance = Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2));

           return Math.floor(distance);
        },

        // processing
        magnetize = function ($this, e) {
            let mouseX = e.pageX, mouseY = e.pageY;

            $this.each(function (index) {
                let $this = $(this),
                centerX = $this.offset().left + $this.outerWidth() / 2,
                centerY = $this.offset().top + $this.outerHeight() / 2,
                deltaX = Math.floor(centerX - mouseX) * -1 * settings.attraction,
                deltaY = Math.floor(centerY - mouseY) * -1 * settings.attraction,
                mouseDistance = distanceFromMouse($this, mouseX, mouseY),
                data = {target: $this, y: deltaY, x: deltaX, distance: mouseDistance};

                if (mouseDistance < settings.distance) {
                    gsap.to($this, {y: deltaY, x: deltaX});

                    // enter
                    if (!isEnter[index]) {
                        isEnter[index] = true;
                        $this.addClass(settings.class);
                        settings.onEnter(data);
                    }

                    // update
                    settings.onUpdate(data);
                } else {
                    gsap.to($this, {y: 0, x: 0});

                    // exit
                    if (isEnter[index]) {
                        isEnter[index] = false;
                        $this.removeClass(settings.class);
                        settings.onExit(data);
                    }
                }
            });
        };

        // exit
        if (!settings.target.length) return;

        // on mouse move
        $(window).on('mousemove', function (e) {
           magnetize(settings.target, e);
        });
    }

    // init
    magneticButton({
        distance: 120,
        onEnter: function (data) {
            gsap.to(data.target, {scale: 1.2});
        },
        onExit: function (data) {
            gsap.to(data.target, {scale: 1});
        },
        onUpdate: function (data) {

        }
    });

	/*** wow js */
    function wowjs() {
    	wow = new WOW({
    		boxClass: 'wow',
    		animateClass: 'animate__animated',
    		offset: 0,
    		mobile: true,
    		live: true,
    	});
    	wow.init();
    }

    wowjs();

	/*** mixitup load for search */
	var containerEl = $('.resentworks-grid');

	if (containerEl.length > 0) {

	    var mixer = mixitup(containerEl, {
	        animation: {
	            enable: false,
	            duration: 350,
	            queueLimit: 5,
	        },
	        controls: {
	            toggleLogic: 'and',
	        },
	        selectors: {
	            target: '.mix'
	        },
	        callbacks: {
	            onMixStart: function (state, futureState) {
	                wowjs();
	                // Remove or comment the next line to remove LoadingOverlay
	                // jQuery.LoadingOverlay("show");
	            },

	            onMixEnd: function (state, futureState) {
	                wowjs();
	                // Remove or comment the next line to remove LoadingOverlay
	                // jQuery.LoadingOverlay("hide");
	            },
	        }
	    });

	    // Simulate a click on the first filter item to make it active
	    var firstFilterItem = document.querySelector('.filters li:first-child');
	    if (firstFilterItem) {
	        mixer.filter(firstFilterItem.getAttribute('data-filter'));
	    }
	}

}(jQuery));