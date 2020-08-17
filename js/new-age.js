(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


	var	scrolling = false;
	var contentSections = $('.cd-section'),
		verticalNavigation = $('.cd-vertical-nav'),
		navigationItems = verticalNavigation.find('a'),
		navTrigger = $('.cd-nav-trigger'),
		scrollArrow = $('.cd-scroll-down');

	// $(window).on('scroll', checkScroll);

	// //smooth scroll to the selected section
	// verticalNavigation.on('click', 'a', function(event){
  //       event.preventDefault();
  //       smoothScroll($(this.hash));
  //       verticalNavigation.removeClass('open');
  //   });

  //   //smooth scroll to the second section
  //   scrollArrow.on('click', function(event){
  //   	event.preventDefault();
  //       smoothScroll($(this.hash));
  //   });

	// // open navigation if user clicks the .cd-nav-trigger - small devices only
  //   navTrigger.on('click', function(event){
  //   	event.preventDefault();
  //   	verticalNavigation.toggleClass('open');
  //   });

	// function checkScroll() {
	// 	if( !scrolling ) {
	// 		scrolling = true;
	// 		(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
	// 	}
	// }

	// function updateSections() {
	// 	var halfWindowHeight = $(window).height()/2,
	// 		scrollTop = $(window).scrollTop();
	// 	contentSections.each(function(){
	// 		var section = $(this),
	// 			sectionId = section.attr('id'),
	// 			navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
	// 		( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
	// 			? navigationItem.addClass('active')
	// 			: navigationItem.removeClass('active');
	// 	});
	// 	scrolling = false;
	// }

	// function smoothScroll(target) {
  //       $('body,html').animate(
  //       	{'scrollTop':target.offset().top},
  //       	300
  //       );
	// }

})(jQuery); // End of use strict

