jQuery(document).ready(function(){
	$('#counter').countdown('2018/12/09 10:00:00')
	.on('update.countdown', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="days">%D</span>:'
			+ '<span class="hours">%H</span>:'
			+ '<span class="mins">%M</span>:'
			+ '<span class="secs">%S</span>'));
	})
	.on('finish.countdown', function(event) {
		$(this).html('&nbsp;')
	});

	if ($(window).width() >= 768) {
		$('.event-description.collapse').addClass("in");
	}
});
