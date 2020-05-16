// Load the customer.io tracker
var _cio = _cio || [];
(function() {
	var a,b,c;a=function(f){return function(){_cio.push([f].
	concat(Array.prototype.slice.call(arguments,0)))}};b=["identify",
	"track"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
	var t = document.createElement("script"),
		s = document.getElementsByTagName("script")[0];
	t.async = true;
	t.id    = "cio-tracker";
	t.setAttribute("data-site-id", customer_io.data_site_id);
	t.src = "https://assets.customer.io/assets/track.js";
	s.parentNode.insertBefore(t, s);
})();
// Form Validation and Submition to Customer.io
jQuery(".customer_io_form").submit(function(event) {
	event.preventDefault();
	var form = jQuery(this),
		email = form.find('input[name=email]').val(),
		fields = {},
		regx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if ( !regx.test(email) ) {
		// Error
		form.find('.errorMessage').show();
	} else {
		// Success
		jQuery.each(form.find("input"), function(index, field) {
			field = jQuery(field);
			fields[field.attr("name")] = field.val();
		});
		fields["id"] = email;
		fields["created_at"] = Math.round(new Date().getTime() / 1000);
		_cio.identify(fields);
		form.hide();
		form.parent().find('.successMessage').show();
	};
});
// Form Reset/Page Reload
jQuery('.cio_reset').click(function(event) {
	event.preventDefault();
	location.reload();
});
