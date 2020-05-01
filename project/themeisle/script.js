// Font Face Observer
const mainFont = new FontFaceObserver('sofia-pro');
mainFont.load().then(function () {
	sessionStorage.fontsLoaded = true;
	document.body.className += ' fonts-loaded';
}).catch(function () {
	sessionStorage.fontsLoaded = false;
});
if (sessionStorage.fontsLoaded) {
	document.body.className += ' fonts-loaded';
}

function handleNotice() {
	// create the notice popup and place it on all pages
	if ( 'yes' !== localStorage.getItem( 'neveShown' ) ) {
		let noticePopup = document.createElement( 'DIV' );
		noticePopup.setAttribute( 'id', 'notice-popup' );
		noticePopup.innerHTML = '<div>' +
				'<p>Are you looking for a free, modern and easy to use theme? Check-out Neve!</p>' +
				'<a href="https://themeisle.com/themes/neve/" id="notice-btn" target="_blank">View Details</a>' +
				'<a href="#close-notice" id="close-notice">' +
					'<svg xmlns="http://www.w3.org/2000/svg" height="512" width="512" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9s-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0s-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9s36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"/></svg>' +
				'</a>' +
				'</div>';
		document.getElementById( 'content' ).appendChild( noticePopup );
		// popup functionality
		if ( null !== document.getElementById( 'notice-popup' ) ) {
			noticePopup = document.getElementById( 'notice-popup' );
			let popupHeight = noticePopup.offsetHeight + 20;
			let closeBtn;
			noticePopup.style.marginBottom = '0';
			noticePopup.style.display = 'block';
			noticePopup = document.getElementById( 'notice-popup' );
			popupHeight = noticePopup.offsetHeight + 20;
			if ( null !== document.getElementById( 'close-notice' ) ) {
				closeBtn = document.getElementById( 'close-notice' );
				closeBtn.addEventListener( 'click', function( e ) {
					e.preventDefault();
					noticePopup.style.marginBottom = '-' + popupHeight + 'px';
					localStorage.setItem( 'neveShown', 'yes' );
				});
			}
		}
	}
}

jQuery(document).ready(function(){

	// sticky nav but not so sticky
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = jQuery('header').outerHeight();
	jQuery(window).scroll(function (event) {
		didScroll = true;
	});
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = jQuery(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}
		if (st > lastScrollTop && st > navbarHeight) {
			jQuery('header').removeClass('nav-down').addClass('nav-up');
		} else {
			if (st + jQuery(window).height() < jQuery(document).height()) {
				jQuery('header').removeClass('nav-up').addClass('nav-down');
			}
		}
		lastScrollTop = st;
	}

	// dropdown bootstrap menu
	var nav = jQuery('#site-navigation');
	if ( window.innerWidth <= 768 ) {
		jQuery('#primary-menu .menu-item-has-children > a').click(function(e){
			e.preventDefault();
			if ( jQuery(this).hasClass('sub-menu-open') ) {
				jQuery(this).next('.sub-menu').fadeOut();
				jQuery(this).removeClass('sub-menu-open');
			} else {
				jQuery(this).next('.sub-menu').fadeIn();
				jQuery(this).addClass('sub-menu-open');
			}
		})
	} else {
		jQuery('#primary-menu .menu-item-has-children').hover(
			function() {
				jQuery(this).addClass('show');
			}, function() {
				jQuery(this).removeClass('show');
			}
		);
	}

	jQuery('#toggle').click(function(){
		if ( nav.hasClass('nav-open') ) {
			nav.removeClass('nav-open');
			nav.fadeOut();
		} else {
			nav.addClass('nav-open');
			nav.fadeIn();
		}
	})

	// header search
	jQuery('#header-trigger').click(function(){
		jQuery('#overlay').fadeIn();
	})
	jQuery('#close-search').click(function(){
		jQuery('#overlay').fadeOut();
	})

	// nav menu in sidebar
	jQuery('.ti_cat_menu li.menu-item-has-children a').append('<span></span>');
	jQuery('.ti_cat_menu li.menu-item-has-children a span').on('click', function(e){
		e.preventDefault();
		if(jQuery(this).parent().parent().hasClass('open-sidebar-nav')) {
			jQuery(this).parent().parent().removeClass('open-sidebar-nav');
			jQuery(this).parent().next().fadeOut('fast');
		}
		else {
			jQuery(this).parent().parent().addClass('open-sidebar-nav');
			jQuery(this).parent().next().fadeIn('fast');
		}
	})

	// load the Neve notice with a 7sec delay
	setTimeout( handleNotice, 7000 );

})
