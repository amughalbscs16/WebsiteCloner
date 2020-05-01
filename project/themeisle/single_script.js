jQuery(document).ready(function(){

	// load related posts section and extra links section on scroll
	jQuery(window).one('scroll', function(){

		if ( jQuery('#related-section-posts').length ) {
			let related_posts_url = tiVars.rest_url + 'related-posts/show?post=' + tiVars.postID;
			let data, render_related_posts, title, link, image;
			let request_related_posts = new XMLHttpRequest();
			request_related_posts.open( 'GET', related_posts_url, true );
			request_related_posts.onload = function() {
				data = JSON.parse( this.response );
				render_related_posts = '<h3>You can check also:</h3>';
				data.forEach( el => {
					title = el.title;
				   	link = el.link;
				   	image = el.image;
				  	render_related_posts += `
						<div class="related-article">
				         	<a href="${link}">${image}</a>
				          	<h4><a href="${link}">${title}</a></h4>
						</div>`;
				});
				jQuery('#related-section-posts').append(render_related_posts);
			};
			request_related_posts.send();
		}
		
		if ( tiVars.extra_links_content !== null ) {
			jQuery('#extra-links').html(tiVars.extra_links_content);
		} 
	})

	// youtube play video and generate video title
	let youtube_iframe;
	let titleUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + tiVars.youtubeID + '&key=AIzaSyDeNeaj1JUxHDN_RxfzLs8EwNsS7PCNouY';
	$.getJSON( titleUrl, function( data ) {
		jQuery('#related-section h3').html(data.items[0].snippet.localized.title);
	});
	jQuery( '#youtube-mask, #play-youtube' ).on('click', function(){
		if ( tiVars.youtubeID !== null ) {
			youtube_iframe = '<div class="video-wrapper"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + 
			tiVars.youtubeID + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Recommended Video"></iframe></div>';
			jQuery('#youtube-holder').html(youtube_iframe);
		}
	})

	// load comments on button click
	var initial_text = jQuery('.comments-link a').text();
	jQuery('#show-comments').text(initial_text);
	jQuery('#show-comments').one('click', function(){
		jQuery.ajax({
			url:'/blog/wp-admin/admin-ajax.php',
			data: {
				action: 'themeisle_show_disqus'
			},
			success: function(data) {
				jQuery('#disqus_thread').html(data);
				jQuery('#show-comments').text('Hide Comments');
				jQuery('#show-comments').addClass('hide-comments');	
			},
			error: function(errorThrown){
				console.log(errorThrown);
			}
		})
	})
	jQuery('.comments-link a').on('click', function(){
		jQuery('#show-comments').trigger('click');
	})
	// hide/show comments on click
	jQuery('#show-comments').click(function(){
		if ( jQuery(this).hasClass('hide-comments') ) {
			jQuery('#comments-container').fadeOut();
			jQuery(this).text(initial_text);
			jQuery(this).removeClass('hide-comments');
			jQuery('.article-comments').css('padding-bottom', '50px');
			jQuery('#comments-container').css('margin-bottom', '0');
		} else {
			jQuery('#comments-container').fadeIn();
			jQuery(this).text('Hide Comments');
			jQuery(this).addClass('hide-comments');
			jQuery('.article-comments').css('padding-bottom', '10px');
			jQuery('#comments-container').css('margin-bottom', '50px');
		}
	})
	
})
