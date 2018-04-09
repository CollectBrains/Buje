$(function() {

	$(".slider").slick({
		arrows: false,
		dots: true
	});

	$("#MixItUp").mixItUp();

	$(".block__item").each(function (e) {
		var $th = $(this);
		$th.attr('href', '#block-' + e)
			.find('.block__popup').attr('id', 'block-' + e)
	});

	$(".block__item").magnificPopup({
		type: 'inline'
	});

	$(".toggle-mnu").on('click', function() {
		$(this).toggleClass("on");
		$(".m-menu").fadeToggle();
		return false;
	});

	$(".nav__link").on('click', function() {
		$(".toggle-mnu").toggleClass("on");
		$(".m-menu").fadeToggle();
		return false;
	});

	$("body").on('click', function () {
		$(".toggle-mnu").removeClass("on");
		$(".m-menu").fadeOut();
	});


	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex','-1');
							$target.focus();
						}
					});
				}
			}
		});

});
