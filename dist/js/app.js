// App js of Fernando Ted personal website - fernandoted.github.io
// https://github.com/fernandoted
// 03-03-17

/* language */
/*$(document).ready(function() {
     $(".language[lang='pt-br']").hide();
     $(".eng").click(function(){
           $(".eng").addClass("select");
           $(".port").removeClass("select");
           $(".language[lang=eng]").show();
           $('.language[lang=pt-br]').hide();
        });
        $(".port").click(function(){
           $(".port").addClass("select");
           $(".eng").removeClass("select");
           $(".language[lang=pt-br]").show();
           $(".language[lang=eng]").hide();
    });
});*/

$(document).ready(function() {
     $(".language[lang='eng']").hide();
     $(".port").click(function(){
           $(".port").addClass("select");
           $(".eng").removeClass("select");
           $(".language[lang=pt-br]").show();
           $('.language[lang=eng]').hide();
        });
        $(".eng").click(function(){
           $(".eng").addClass("select");
           $(".port").removeClass("select");
           $(".language[lang=eng]").show();
           $(".language[lang=pt-br]").hide();
    });
});

/* scroll */
$(document).ready(function() {
    // add scroll to body tag
	$('body').scrollspy({target: '.nav', offset: 50});
	
	// add smooth scrolling on menu links
	$('.top-nav a').on('click', function(event) {
		if (this.hash !== "") {
			// prevent default anchor click behavior
			event.preventDefault();
			// store hash
			var hash = this.hash;
			//jQuery animate
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // end if
	});
});

/* back to top button */
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
	$('button.back-top').addClass('show');
	} else {
		$('button.back-top').removeClass('show');
	}
});

$('button.back-top').click(function() {
	$('html, body').animate({
	scrollTop: 0 }, 800);
	return false;
});

// fade-in 
$(document).ready(function() {
	// every time the window is scrolled
	$(window).scroll(function() {
		$('.icon-tool').each(function(i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity':'1'},600);
			}
		});
	});
});