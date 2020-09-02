$(document).ready(function () {
	$(".sidenav").sidenav({
		edge: "right"
	});
});

$(".owl-carousel").owlCarousel({
	loop: false,
	margin: 50,
	nav: false,
	navText: [
		"<i class='fa fa-caret-left'></i>",
		"<i class='fa fa-caret-right'></i>",
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		500: {
			items: 2.1,
		},
	},
});