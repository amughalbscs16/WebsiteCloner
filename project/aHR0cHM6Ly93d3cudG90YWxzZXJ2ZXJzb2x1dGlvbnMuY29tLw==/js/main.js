
$(document).ready(function () {
	$("span.pop-img").popover({
		html: true,
		trigger: 'manual',
		placement: $(this).data('placement'),
		content: function () {
			return '<img src="' + $(this).data('img') + '" />';
		}
	});
	$("span.pop-img").hover(function () {
		$(this).popover('show');
	}, function () {
		$(this).popover('hide');
	});
});


//------------------------------------//
//Scroll To//
//------------------------------------//
$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top - 140}, 800);
	
});


//------------------------------------//
//Click Expand//
//------------------------------------//
$(".click-expand").click(function() {
	$(this).toggleClass("expanded");
    $(this).find('> .expand-item').slideToggle();
});


//------------------------------------//
//Adjust Scroll Position for Veeam iFrame Modal//
//------------------------------------//
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('veeam-iframe')) {
		window.scrollTo( 0, 500);
	}
});
