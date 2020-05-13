if (!_foreDocument) {
  var _foreDocument = document;
}

(function($, doc) {
  function getCookie(c_name) {
    if (doc.cookie.length>0) {
      c_start=doc.cookie.indexOf(c_name + "=");
      if (c_start!=-1) {
        c_start=c_start + c_name.length+1;
        c_end=doc.cookie.indexOf(";",c_start);
        if (c_end==-1) c_end=doc.cookie.length;
        return unescape(doc.cookie.substring(c_start,c_end));
      }
    }
    return "";
  }

  function setCookie(c_name,value,expiredays) {
    var host    = doc.location.host.toLowerCase().split(":")[0];
    var parts   = host.split(".");
    var domains = [];

    if (parts.length == 1) {
        // Just set the cookie on a path
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        doc.cookie=c_name+ "=" +escape(value)+
          ((expiredays==null) ? "" : ";expires="+exdate.toUTCString()) + ";path=/";
    } else {
      // Loop over domains and set it on the first one that sticks
      for(var i = parts.length - 1; i >= 0; i--) {
        domains.push(parts[i]);

        var domain = "." + domains.slice().reverse().join(".");

        // Attempt to set cookie on given domain
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        doc.cookie=c_name+ "=" +escape(value)+
          ((expiredays==null) ? "" : ";expires="+exdate.toUTCString()) + ";domain=" + domain + ";path=/";

        // If cookie was set, break out of the loop
        if (getCookie(c_name) == value) break;
      }
    }
  }
  
  function submitForm() {
    var form    = $(this);
    var failure = $(form.data("failure"));
      
    failure.text("").hide();

    if (!hasFilledForm() && validate(form)) {
      identifyFieldsToCustomerIO(form);
      markFormAsFilled();
      showSuccess(form);
    }

    return false;
  }

  function identifyFieldsToCustomerIO(form) {
    var fields = fieldsFrom(form);

    fields["id"] = form.data("id")(fields);
    fields["created_at"] = Math.round(new Date().getTime() / 1000); // seconds since the epoch

    _cio.identify(fields);
  };

  function fieldsFrom(form) {
    var fields = {};

    $.each(form.find("input, textarea"), function(index, field) {
      field = $(field);
      fields[field.attr("name")] = field.val();
    });

    return fields;
  };

  function showSuccess(form) {
    form.html($(form.data('success')).html());
  };

  function validate(form) { 
    var func = form.data("validate");

    if (func) {
      var message = func(fieldsFrom(form));

      if (message && form.data("failure")) {
        $(form.data("failure")).html(message).show();
      }

      return !message;
    } else {
      return true;
    }
  }

  function hasFilledForm() {
    return getCookie("_fore") != "";
  };

  function markFormAsFilled() {
    setCookie("_fore", true, 365);
  }

  $.fn.resetForm = function(options) {
    console.log("before: " + getCookie("_fore"));
    setCookie("_fore", "", 365);
    console.log("after: " + getCookie("_fore"));
    doc.location.reload();
  };

  $.fn.trackForm = function(options) {
    var form = $(this);

    form.data("id",       options["id"]);
    form.data("success",  options["success"]);
    form.data("validate", options["validate"]);
    form.data("failure",  options["failure"]);
    
    if (hasFilledForm()) {
      showSuccess(form);
    } else {
      form.unbind("submit", submitForm);
      form.bind("submit", submitForm);
    }
  };
})(jQuery, _foreDocument);
