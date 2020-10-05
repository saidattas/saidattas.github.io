$(document).ready(function () {
	$('ul li').click(function () {
		$('#menuToggle input').prop('checked', false);
		$('li').removeClass('active');
		$(this).addClass('active');
	});
});
