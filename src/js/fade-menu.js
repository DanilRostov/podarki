$('.fade-menu-open').click(function() {
	$('.fade-menu').fadeIn();
	$('body').addClass('position-fixed');
});

$('.fade-menu-close').click(function() {
	$('body').removeClass('position-fixed');
	$('.fade-menu').fadeOut();
	$('.burger-checkbox').prop('checked', false);
});