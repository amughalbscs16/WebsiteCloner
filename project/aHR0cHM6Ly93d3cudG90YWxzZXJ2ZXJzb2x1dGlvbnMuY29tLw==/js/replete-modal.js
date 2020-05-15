;(function(window, document, undefined) {
  "use strict";
  
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
var olay = document.getElementsByTagName("body");

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = require('./modules/handle-dom');

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = require('./modules/utils');

/*
 *  Handle repleteModal's DOM elements
 */

var _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = require('./modules/handle-swal-dom');

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = require('./modules/handle-click');

var _handleKeyDown = require('./modules/handle-key');

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = require('./modules/default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = require('./modules/set-params');

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global repleteModal function
 * (this is what the user calls)
 */
 if(window.event){var e = event;}
var repleteModal, rplm;
var params;

repleteModal = rplm = function (e) {
  var customizations = arguments[0];
    
  //_hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);
  
  if(params.type == 'input'){
    _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();
  }

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Replete Modal expects at least 1 attribute!');
    return false;
  }

    if(params.backgroundScroll === true){
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
    }
    
  switch (typeof customizations) {

    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
 // _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1],params);
 
  // Get cookie for prevent dialog 
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
    }
  }
  var cookieNm = getCookie("rplm"+params.cookieName);
  if((params.preventDialog === false && params.oneTimePopUp === false) || (params.preventDialog === true && cookieNm !== params.cookieName || (params.oneTimePopUp === true && cookieNm !== params.cookieName))){
  _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1],params);
  }

  // Modal interactions
  var modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  rplm.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
repleteModal.setDefaults = rplm.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
repleteModal.close = rplm.close = function (params) {
  var modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var olay = document.getElementsByTagName("body");
  var bg = document.getElementsByClassName("rplm-overlay");

  olay[0].removeAttribute('data-overlay');
  olay[0].removeAttribute('data-modal');
  olay[0].removeAttribute('data-closebtncolor');
  olay[0].removeAttribute('data-padding');
  var $fieldset = modal.querySelector('.customFieldset span');
  $fieldset.innerHTML = "";

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showRepleteModal');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideRepleteModal');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');


  $('.rplm-alert').removeAttr('style');
  if(params.modalNOverlay == "custom"){
    modal.getElementsByClassName('content-wrap')[0].removeAttribute('style');
  }
  /*
  * Width
  */
  if (typeof params.width === 'string') {
    var area = document.getElementsByClassName("rplm-alert");
    area[0].style.width = "";
  }

  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
  }
  if(params.oneTimePopUp === true){
    var user = params.cookieName; //"preventRepleteModal";
    var days = params.preventDays;
    setCookie("rplm"+user, user, days);
  }
  
  if(params.overlay == "custom"){
    console.log(bg[0]);
      bg[0].style.backgroundColor = '';
  }
  if (!params.animation) {
    $(modal).removeClass('animated');
  }
  else if (typeof params.animation === 'string') {
    $(modal).removeClass('animated ' + params.animation);
  } else {
    $(modal).removeClass('animated bounceIn');
  }
  
  modal.removeAttribute('data-duration');
  modal.removeAttribute('data-delay');
  
    
  if(document.getElementsByClassName('rm-button-container')[0].style.display = "none"){
      document.getElementsByClassName('rm-button-container')[0].removeAttribute("style");
  }
  /* Remove SVG section */
  var arr = document.getElementsByClassName("flat-filled");
  for (var i = arr.length - 1; i >= 0; i--) {
    if(arr[i].parentNode.className == "rm-icon rm-success" || arr[i].parentNode.className == "rm-icon rm-error" ){
        arr[i].innerHTML = "";
      }
      else{
        arr[i].innerHTML = "";
        arr[i].id = "";
      }
  }

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.rm-icon.rm-success');
  var $errorIcon = modal.querySelector('.rm-icon.rm-error');
  var $warningIcon = modal.querySelector('.rm-icon.rm-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.rm-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.rm-dot'), 'pulseWarningIns');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
repleteModal.showInputError = rplm.showInputError = function (errorMessage) {
  var modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.rm-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.rm-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    repleteModal.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
repleteModal.resetInputError = rplm.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.rm-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.rm-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
repleteModal.disableButtons = rplm.disableButtons = function (event) {
  var modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
repleteModal.enableButtons = rplm.enableButtons = function (event) {
  var modal = _repleteModalInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'repleteModal' was set as global.
  window.repleteModal = window.rplm = repleteModal;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Replete Modal is a frontend module!');
}

},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  lat: 0,
  lng: 0,
  zoom: 8,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  showCloseButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  svgIcon: null,
  closeButtonText: '',
  closeButtonColor: "black",
  closeButtonWithInModal: false,
  confirmButtonText: 'OK',
  confirmButtonColor: '#4ecdc4',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  html: false,
  animation: true,
  position: 'center',
  overlay: 'default',
  delay: null,
  duration: null,
  modalNOverlay: null,
  allowPadding: true,
  customOverlayColor: '#46B9B1',
  customModalColor: "#8CD4F5",
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false,
  backgroundScroll: false,
  width: '478px',
  youtubeID: null,
  vimeoID: null,
  videoHeight: "315",
  videoWidth: "100%",
  oneTimePopUp: false,
  preventDialog: false,
  cookieName: 'preventRepleteModal',
  preventText: "Hide this Dialog forever",
  preventDays: 2000000000,
};

exports['default'] = defaultParams;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = require('./utils');

var _getModal = require('./handle-swal-dom');

var _hasClass$isDescendant = require('./handle-dom');

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('rplm-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        repleteModal.close(params);
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;
  if(params.type === "input"){
    if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
      callbackValue = modal.querySelector('input').value;

      if (!callbackValue) {
        callbackValue = '';
      }
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    repleteModal.close(params);
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    repleteModal.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    repleteModal.close(params);
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Then fixed for Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = require('./handle-dom');

var _setFocusStyle = require('./handle-swal-dom');

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    /*_stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }*/
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = require('./utils');

var _removeClass$getTopMargin$fadeIn$show$addClass = require('./handle-dom');

var _defaultParams = require('./default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);


/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = require('./injected-html');

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.rplm-alert';
var overlayClass = '.rplm-overlay';

var repleteModalInitialize = function repleteModalInitialize() {
  var rplmWrap = document.createElement('div');
  rplmWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (rplmWrap.firstChild) {
    document.body.appendChild(rplmWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    repleteModalInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback,params) {
  var $modal = getModal();

  /* SVG Variables Start*/

  var browserFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M28.692,24.431h42.615c2.353,0,4.262,1.908,4.262,4.262v42.615c0,2.354-1.909,4.262-4.262,4.262H28.692c-2.354,0-4.262-1.908-4.262-4.262V28.692C24.431,26.338,26.339,24.431,28.692,24.431z'/><path class='screen' d='M27.982,38.637h44.036v32.672H27.982V38.637z'/><path class='top' d='M24.431,24.431h51.139v11.364H24.431V24.431z'/><path class='green' d='M47.159,27.271c1.57,0,2.841,1.273,2.841,2.841s-1.271,2.841-2.841,2.841c-1.569,0-2.841-1.272-2.841-2.841S45.589,27.271,47.159,27.271z'/><path class='orange' d='M38.344,27.271c1.569,0,2.841,1.273,2.841,2.841s-1.271,2.841-2.841,2.841s-2.841-1.272-2.841-2.841S36.776,27.271,38.344,27.271z'/><path class='red' fill='' d='M29.858,27.271c1.569,0,2.841,1.273,2.841,2.841s-1.272,2.841-2.841,2.841c-1.569,0-2.841-1.272-2.841-2.841S28.289,27.271,29.858,27.271z'/></g></svg>";
  var brushFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='brush_base' d='M74.264,24.224c0.863-0.864,2.264-0.864,3.128,0l1.042,1.042c0.863,0.864,0.863,2.265,0,3.129L56.055,57.027L45.628,46.602L74.264,24.224z'/><path class='brush_highlight' d='M74.264,24.224c0.863-0.864,2.264-0.864,3.128,0l1.042,1.042c-1.225,1.133-26.979,27.164-26.979,27.164L45.628,46.6L74.264,24.224z'/><path class='brush_silver' d='M45.662,46.434l10.427,10.425c0.863,0.864,0.863,2.265,0,3.129l-3.128,3.128c-0.863,0.863-2.265,0.863-3.129,0L39.406,52.69c-0.863-0.864-0.863-2.265,0-3.129l3.128-3.127C43.399,45.571,44.799,45.571,45.662,46.434z'/><path class='brush_tip' d='M39.677,53.031l10.229,10.228c-8.683,20.973-28.987,10.601-28.987,10.601s10.482,0.427,10.021-9.586C30.561,56.009,37.24,53.623,39.677,53.031z'/></g></svg>";
  var calanderFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base_top' d='M69.436,24.573h-38.89c-2.478,0-4.486,2.009-4.486,4.487V50h47.862V29.061C73.922,26.582,71.912,24.573,69.436,24.573z'/><path class='base_bottom' d='M69.436,75.427h-38.89c-2.478,0-4.486-2.009-4.486-4.487V50h47.862v20.939C73.922,73.418,71.912,75.427,69.436,75.427z'/><path class='left' d='M23.088,47.009h2.991v5.982h-2.991V47.009z'/><path class='right' d='M73.922,47.009h2.99v5.982h-2.99V47.009z'/><path class='number' d='M45.991,39.779c-1.318,0-2.443,0.463-3.378,1.394c-0.936,0.93-1.402,2.059-1.402,3.387v10.898c0,1.316,0.465,2.439,1.395,3.371c0.929,0.929,2.058,1.394,3.386,1.394c1.307,0,2.427-0.464,3.362-1.387c0.935-0.924,1.401-2.05,1.401-3.378V44.56c0-1.317-0.461-2.443-1.385-3.377C48.445,40.246,47.318,39.779,45.991,39.779z M47.632,55.41c0,0.477-0.169,0.886-0.51,1.227c-0.339,0.341-0.748,0.51-1.226,0.51s-0.885-0.169-1.22-0.51s-0.502-0.75-0.502-1.227V44.494c0-0.477,0.167-0.887,0.502-1.226c0.334-0.339,0.742-0.51,1.22-0.51s0.887,0.171,1.226,0.51c0.341,0.339,0.51,0.749,0.51,1.226V55.41z M56.667,40.033c-0.288,0.658-0.758,1.218-1.411,1.682c-0.653,0.462-1.342,0.734-2.063,0.82v2.104h2.565v15.377h3.012V40.033H56.667L56.667,40.033z'/></g></svg>";
  var cameraFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M75.707,75.279H24.293c-2.839,0-5.141-2.303-5.141-5.143V39.289c0-2.556,1.87-4.659,4.313-5.058l-0.028-0.084c0,0,0.331,0,0.856,0l0,0h4.285c11.14,0,7.712-9.426,15.424-9.426c2.57,0,5.998,0,5.998,0s3.428,0,5.998,0c7.712,0,4.285,9.426,15.424,9.426h4.284l0,0c0.526,0,0.856,0,0.856,0l-0.027,0.084c2.443,0.398,4.313,2.502,4.313,5.058v30.848C80.85,72.977,78.546,75.279,75.707,75.279z'/><path class='strip' d='M19.152,48.715h61.696v17.138H19.152V48.715z'/><path class='lens' d='M50.001,41.86c8.519,0,15.424,6.904,15.424,15.423c0,8.52-6.905,15.426-15.424,15.426c-8.518,0-15.424-6.906-15.424-15.426C34.576,48.764,41.482,41.86,50.001,41.86z'/><path class='lens_inner' d='M50.001,46.144c6.151,0,11.14,4.987,11.14,11.139s-4.986,11.141-11.14,11.141c-6.153,0-11.14-4.986-11.14-11.141C38.861,51.133,43.848,46.144,50.001,46.144z'/><path class='flash' d='M44.859,27.864h10.284c1.795,0,3.428,4.284,3.428,4.284c0,1.42-1.151,2.569-2.571,2.569H44.003c-1.42,0-2.571-1.149-2.571-2.569C41.432,32.148,43.063,27.864,44.859,27.864z'/><path class='red' d='M73.708,36.717c1.42,0,2.571,1.151,2.571,2.571c0,1.421-1.151,2.57-2.571,2.57c-1.419,0-2.571-1.149-2.571-2.57C71.137,37.869,72.289,36.717,73.708,36.717z'/><path class='button' d='M25.722,31.578h3.428c1.419,0,2.57,1.15,2.57,2.57h-8.569C23.151,32.728,24.302,31.578,25.722,31.578z'/></g></svg>";
  var clockFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M50,16.25c18.641,0,33.75,15.109,33.75,33.75S68.641,83.75,50,83.75c-18.64,0-33.75-15.109-33.75-33.75S31.36,16.25,50,16.25z'/><path class='face' d='M50,22.635c15.113,0,27.365,12.252,27.365,27.365c0,15.113-12.252,27.365-27.365,27.365c-15.113,0-27.365-12.252-27.365-27.365C22.635,34.887,34.887,22.635,50,22.635z'/><path class='seconds' d='M45.915,46.352l0.645-0.645l16.419,16.418l-0.645,0.646L45.915,46.352z'/><path class='middle' d='M50,47.264c1.512,0,2.736,1.226,2.736,2.736S51.512,52.736,50,52.736S47.264,51.511,47.264,50S48.488,47.264,50,47.264z'/><path class='hour' fill='' d='M51.844,50c0,0.504-0.408,0.912-0.912,0.912H37.249c-0.505,0-0.912-0.408-0.912-0.912c0-0.504,0.407-0.912,0.912-0.912h13.683C51.436,49.088,51.844,49.496,51.844,50z'/><path class='minute' d='M50,28.108c0.504,0,0.912,0.408,0.912,0.913v20.067C50.912,49.592,50.504,50,50,50c-0.504,0-0.912-0.408-0.912-0.912V29.021C49.088,28.516,49.496,28.108,50,28.108z'/></g></svg>";
  var coffeeFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M27.253,32.94h45.493l-8.748,46.369H36.002L27.253,32.94z'/><path class='middle' d='M27.253,43.329h45.493l-4.373,20.122H31.627L27.253,43.329z'/><polygon class='top' points='70.996,26.816 66.623,26.816 63.998,20.692 36.002,20.692 33.377,26.816 29.003,26.816 26.378,32.94 73.621,32.94 '/></g></svg>";
  var diamondFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' fill='' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='middle' d='M17.702,38.645h64.597L50,82.607L17.702,38.645z'/><path class='top_3' d='M50,23.393l11.665,15.252H38.336L50,23.393z'/><path class='top_2' d='M38.336,38.645l-8.972-15.252H50L38.336,38.645z'/><path class='top_1' d='M61.664,38.645L50,23.393h20.635L61.664,38.645z'/><path class='top_left' d='M29.364,23.393l8.972,15.252H17.702L29.364,23.393z'/><path class='top_right' d='M70.635,23.393l11.662,15.252H61.662L70.635,23.393z'/><path class='right' d='M61.664,38.645h20.635L50,82.607L61.664,38.645z'/><path class='left' d='M17.702,38.645h20.635L50,82.607L17.702,38.645z'/></g></svg>";
  var diskFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M72.848,75.133H27.151c-1.262,0-2.285-1.023-2.285-2.285V27.151c0-1.261,1.022-2.284,2.285-2.284h38.843l9.139,9.138v38.842C75.133,74.109,74.109,75.133,72.848,75.133z'/><path class='top' d='M65.992,24.867v15.994c0,1.261-1.021,2.285-2.283,2.285H36.29c-1.262,0-2.285-1.023-2.285-2.285V24.867H65.992z'/><path class='top_right' d='M55.711,27.914h8.379v12.185h-8.379V27.914z'/><path class='bottom' d='M65.992,75.133V53.047c0-1.261-1.021-2.285-2.283-2.285H36.29c-1.262,0-2.285,1.024-2.285,2.285v22.086H65.992z'/><path class='text' d='M39.718,58.377h20.563c0.211,0,0.381-0.17,0.381-0.379c0-0.211-0.17-0.381-0.381-0.381H39.718c-0.21,0-0.38,0.17-0.38,0.381C39.337,58.207,39.508,58.377,39.718,58.377z M60.281,63.709H39.718c-0.21,0-0.38,0.172-0.38,0.381c0,0.211,0.17,0.381,0.38,0.381h20.563c0.211,0,0.381-0.17,0.381-0.381C60.662,63.881,60.492,63.709,60.281,63.709z M60.281,69.801H39.718c-0.21,0-0.38,0.172-0.38,0.381c0,0.211,0.17,0.381,0.38,0.381h20.563c0.211,0,0.381-0.17,0.381-0.381C60.662,69.975,60.492,69.801,60.281,69.801z'/></g></svg>";
  var emailFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='top' d='M76.162,35.079c1.113,0.731,1.113,1.917,0,2.647L52.013,53.615c-1.11,0.731-2.915,0.731-4.024,0l-24.15-15.889c-1.111-0.73-1.111-1.916,0-2.647l24.15-15.889c1.11-0.729,2.914-0.729,4.024,0L76.162,35.079z'/><path class='paper' d='M30.105,32.763h39.791v28.421H30.105V32.763z'/><path class='base' d='M23.003,36.404L50,54.165l26.997-17.761c0,0,0.006-0.667,0.006,1.688v27.002c0,2.354-1.91,4.264-4.264,4.264H27.262c-2.354,0-4.264-1.91-4.264-4.264V38.092C23,35.738,23.003,36.404,23.003,36.404z'/><path class='text' d='M36.145,38.27h27.71c0.199,0,0.357-0.16,0.357-0.356c0-0.195-0.158-0.355-0.357-0.355h-27.71c-0.197,0-0.355,0.16-0.355,0.355C35.788,38.11,35.947,38.27,36.145,38.27z M63.854,39.691H36.144c-0.197,0-0.355,0.159-0.355,0.356c0,0.196,0.158,0.355,0.355,0.355h27.711c0.197,0,0.357-0.16,0.357-0.355C64.211,39.849,64.053,39.691,63.854,39.691z M63.854,41.822H36.144c-0.197,0-0.355,0.161-0.355,0.356c0,0.197,0.158,0.355,0.355,0.355h27.711c0.197,0,0.357-0.158,0.357-0.355C64.211,41.982,64.053,41.822,63.854,41.822z'/></g></svg>";
  var filmFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' fill='' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M72.021,74.154v-3.552c0-1.177-0.954-2.132-2.131-2.132h-2.842c-1.176,0-2.132,0.955-2.132,2.132v3.552H35.081v-3.552c0-1.177-0.955-2.132-2.131-2.132h-2.843c-1.176,0-2.131,0.955-2.131,2.132v3.552h-2.842V25.846h2.842v3.552c0,1.177,0.955,2.132,2.131,2.132h2.843c1.176,0,2.131-0.955,2.131-2.132v-3.552h29.837v3.552c0,1.177,0.955,2.132,2.132,2.132h2.842c1.178,0,2.131-0.955,2.131-2.132v-3.552h2.843v48.309H72.021z M35.081,36.502c0-1.177-0.955-2.132-2.131-2.132h-2.843c-1.176,0-2.131,0.955-2.131,2.132v1.421c0,1.175,0.955,2.132,2.131,2.132h2.843c1.176,0,2.131-0.957,2.131-2.132V36.502z M35.081,45.026c0-1.176-0.955-2.13-2.131-2.13h-2.843c-1.176,0-2.131,0.953-2.131,2.13v1.42c0,1.177,0.955,2.132,2.131,2.132h2.843c1.176,0,2.131-0.955,2.131-2.132V45.026z M35.081,53.552c0-1.177-0.955-2.132-2.131-2.132h-2.843c-1.176,0-2.131,0.955-2.131,2.132v1.421c0,1.176,0.955,2.13,2.131,2.13h2.843c1.176,0,2.131-0.954,2.131-2.13V53.552z M35.081,62.077c0-1.176-0.955-2.132-2.131-2.132h-2.843c-1.176,0-2.131,0.956-2.131,2.132v1.421c0,1.177,0.955,2.132,2.131,2.132h2.843c1.176,0,2.131-0.955,2.131-2.132V62.077z M72.021,36.502c0-1.177-0.954-2.132-2.131-2.132h-2.842c-1.176,0-2.132,0.955-2.132,2.132v1.421c0,1.175,0.955,2.132,2.132,2.132h2.842c1.177,0,2.131-0.957,2.131-2.132V36.502z M72.021,45.026c0-1.176-0.954-2.13-2.131-2.13h-2.842c-1.176,0-2.132,0.953-2.132,2.13v1.42c0,1.177,0.955,2.132,2.132,2.132h2.842c1.177,0,2.131-0.955,2.131-2.132V45.026z M72.021,53.552c0-1.177-0.954-2.132-2.131-2.132h-2.842c-1.176,0-2.132,0.955-2.132,2.132v1.421c0,1.176,0.955,2.13,2.132,2.13h2.842c1.177,0,2.131-0.954,2.131-2.13V53.552z M72.021,62.077c0-1.176-0.954-2.132-2.131-2.132h-2.842c-1.176,0-2.132,0.956-2.132,2.132v1.421c0,1.177,0.955,2.132,2.132,2.132h2.842c1.177,0,2.131-0.955,2.131-2.132V62.077z'/><path class='bottom' d='M40.054,51.42h19.892c1.177,0,2.132,0.955,2.132,2.132v12.787c0,1.177-0.955,2.132-2.132,2.132H40.054c-1.177,0-2.132-0.955-2.132-2.132V53.552C37.922,52.375,38.876,51.42,40.054,51.42z'/><path class='top' fill='' d='M40.054,31.529h19.892c1.177,0,2.132,0.953,2.132,2.13v12.787c0,1.177-0.955,2.132-2.132,2.132H40.054c-1.177,0-2.132-0.955-2.132-2.132V33.659C37.922,32.482,38.876,31.529,40.054,31.529z'/></g></svg>";
  var flagFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,4.25c26.441,0,47.875,21.434,47.875,47.875S76.441,100,50,100C17.857,100,2.125,78.566,2.125,52.125S23.559,4.25,50,4.25z'/><g class='icon'><path class='bottom' d='M49.857,36.924l24.678,6.581v24.677l-24.678-6.58V36.924z'/><path class='shadow' d='M49.857,37.45l13.984-4.114v24.678l-13.984,4.113V37.45z'/><path class='top' d='M39.426,26.845l24.677,6.581v24.679l-24.677-6.58V26.845z'/><path class='pole' d='M37.826,22.117c1.817,0,3.29,1.473,3.29,3.291v54.292c0,1.816-1.474,3.289-3.29,3.289c-1.817,0-3.291-1.473-3.291-3.289V25.407C34.536,23.59,36.009,22.117,37.826,22.117z'/></g></svg>";
  var folderFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='back' d='M67.715,70.502c0,2.516-2.038,4.555-4.556,4.555H30.51c-2.516,0-4.555-2.041-4.555-4.555V29.499c0-2.516,2.039-4.555,4.555-4.555h6.834c9.871,0,6.833,6.075,18.224,6.075c4.556,0,12.148,0,12.148,0L67.715,70.502L67.715,70.502z'/><path class='paper_back' d='M27.828,34.56h44.04v39.483h-44.04V34.56z'/><path class='paper_front' d='M29.602,38.356h44.798v35.687H29.602V38.356z'/><path class='front' d='M73.491,75.057H30.212c-1.96,0-3.615-1.244-4.26-2.979c0.439,0.863,2.465,1.461,3.5,1.461c1.519,0,3.037-1.52,3.037-4.557V43.167h45.559v27.334C78.048,73.016,76.008,75.057,73.491,75.057z'/></g></svg>";
  var graphFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='bar_left' d='M42.401,35.96l15.197,11.053v25.563H42.401V35.96z'/><path class='bar_middle' d='M27.201,42.178l15.199-6.22v36.616c0,0-8.186,0-11.294,0c-1.785,0-3.986-1.842-3.906-3.397C27.518,63.139,27.201,42.178,27.201,42.178z'/><path class='bar_right' d='M72.8,69.178c0.08,1.556-2.121,3.398-3.907,3.398c-3.107,0-11.294,0-11.294,0V47.013l15.199-17.271C72.8,29.741,72.483,63.139,72.8,69.178z'/><path class='dot_4' d='M42.401,33.642c1.524,0,2.763,1.237,2.763,2.764s-1.238,2.764-2.763,2.764c-1.527,0-2.764-1.237-2.764-2.764S40.875,33.642,42.401,33.642z'/><path class='dot_3' d='M57.599,42.623c1.526,0,2.763,1.237,2.763,2.763c0,1.527-1.236,2.765-2.763,2.765c-1.525,0-2.763-1.237-2.763-2.765C54.836,43.86,56.073,42.623,57.599,42.623z'/><path class='dot_2' d='M72.8,27.424c1.524,0,2.762,1.238,2.762,2.764c0,1.527-1.237,2.765-2.762,2.765c-1.527,0-2.764-1.237-2.764-2.765C70.034,28.661,71.271,27.424,72.8,27.424z'/><path class='dot_1' d='M27.201,38.479c1.525,0,2.764,1.237,2.764,2.764s-1.238,2.765-2.764,2.765c-1.526,0-2.763-1.238-2.763-2.765C24.438,39.715,25.675,38.479,27.201,38.479z'/></g></svg>";
  var heartFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' fill='' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M50,79.036c-5.322-0.002-30.415-18.54-30.415-37.078c0-5.324,0.566-16.994,15.969-16.994c6.321,0,11.918,4.825,14.446,10.042c2.53-5.217,8.127-10.042,14.448-10.042c15.402,0,15.967,11.67,15.967,16.994C80.415,60.496,55.323,79.034,50,79.036z'/><path class='left' d='M50,79.036c-10.701-3.241-30.415-18.54-30.415-37.078c0-5.324,0.566-16.994,15.969-16.994c6.321,0,11.918,4.825,14.446,10.042C50,46.931,50,68.191,50,79.036z'/></g></svg>";
  var homeFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M50,29.753l23.293,17.47v26.011c0,2.572-2.086,4.659-4.66,4.659H31.366c-2.574,0-4.658-2.086-4.658-4.659V47.223L50,29.753z'/><path class='hole' d='M50,50.427c5.145,0,9.316,4.172,9.316,9.316c0,5.144-4.172,9.317-9.316,9.317c-5.146,0-9.316-4.174-9.316-9.317C40.684,54.599,44.854,50.427,50,50.427z'/><path class='roof' d='M50,35.188L22.826,55.374V38.295L50,18.107l27.174,20.188v17.08L50,35.188z'/></g></svg>";
  var lightningFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><polygon class='bolt' points='76.155,41.825 58.155,41.825 69.163,20.856 42.078,20.856 29.845,55.805 47.029,55.805 38.583,81.145 '/><path class='highlight' d='M65.014,22.603H44.917L33.559,54.059l13.98-27.96L65.014,22.603z M42.296,75.9l10.049-20.096h-2.791L42.296,75.9z'/></g></svg>";
  var locationFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M50,19.53c13.945,0,25.248,11.213,25.248,25.045C75.248,60.437,54.207,80.47,50,80.47c-4.208,0-25.248-20.033-25.248-35.895C24.752,30.743,36.056,19.53,50,19.53z'/><path class='inner' d='M50,30.488c8.174,0,14.8,6.625,14.8,14.799c0,8.173-6.626,14.8-14.8,14.8s-14.8-6.626-14.8-14.799C35.2,37.114,41.826,30.488,50,30.488z'/></g></svg>";
  var lockFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M29.929,39.176h38.933c2.688,0,4.866,2.181,4.866,4.868v24.332c0,2.688-2.179,4.869-4.866,4.869H29.929c-2.687,0-4.867-2.179-4.867-4.869V44.043C25.062,41.356,27.242,39.176,29.929,39.176z'/><path class='baselight' d='M27.495,39.176h19.466c1.343,0,2.434,0,2.434,0v34.066c0,0-1.09,0-2.434,0H27.495c-1.344,0-2.433-2.179-2.433-4.867V44.042C25.062,41.356,26.152,39.176,27.495,39.176z'/><path class='keyhole' d='M55.073,53.776c0-3.136-2.542-5.679-5.678-5.679s-5.678,2.543-5.678,5.679c0,2.263,1.328,4.212,3.244,5.124v5.418h4.867V58.9C53.745,57.988,55.073,56.039,55.073,53.776z'/><path class='bar' d='M49.395,27.821c-6.271,0-11.355,5.083-11.355,11.354h-6.489c0-9.854,7.989-17.843,17.844-17.843c9.854,0,17.844,7.989,17.844,17.843h-6.49C60.749,32.904,55.667,27.821,49.395,27.821z'/></g></svg>";
  var magnifyFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M72.215,69.959L60.276,58.021c2.497-3.507,3.97-7.792,3.97-12.424c0-11.847-9.604-21.451-21.452-21.451c-11.848,0-21.451,9.604-21.451,21.451c0,11.847,9.604,21.451,21.451,21.451c4.632,0,8.918-1.473,12.425-3.97l11.938,11.938c1.116,1.115,2.928,1.115,4.045,0l1.013-1.014C73.33,72.887,73.33,71.074,72.215,69.959z'/><path class='glass' d='M43.034,30.103c8.689,0,15.732,7.043,15.732,15.731c0,8.689-7.043,15.732-15.732,15.732c-8.688,0-15.731-7.043-15.731-15.732C27.302,37.146,34.345,30.103,43.034,30.103z'/></g></svg>";
  var messageFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='back' d='M75.139,28.854h-3.807l-8.125-8.125c-0.381-0.38-0.999-0.382-1.381,0l-8.124,8.125H36.428c-2.79,0-5.05,2.261-5.05,5.048v25.247c0,2.79,2.26,5.051,5.05,5.051h38.711c2.789,0,5.05-2.261,5.05-5.051V33.902C80.188,31.115,77.928,28.854,75.139,28.854z'/><path class='front' d='M63.571,35.8H24.862c-2.789,0-5.05,2.262-5.05,5.049v25.247c0,2.788,2.261,5.049,5.05,5.049h3.806l8.125,8.125c0.382,0.381,1,0.383,1.381,0l8.125-8.125h17.275c2.788,0,5.05-2.261,5.05-5.049V40.85C68.62,38.062,66.361,35.8,63.571,35.8z'/><path class='dots' d='M34.743,50.108c-1.858,0-3.365,1.507-3.365,3.366c0,1.86,1.506,3.367,3.365,3.367c1.86,0,3.367-1.507,3.367-3.367C38.109,51.615,36.603,50.108,34.743,50.108z M44.842,50.108c-1.858,0-3.367,1.507-3.367,3.366c0,1.86,1.507,3.367,3.367,3.367c1.859,0,3.366-1.507,3.366-3.367C48.208,51.615,46.701,50.108,44.842,50.108z M54.94,50.108c-1.857,0-3.365,1.507-3.365,3.366c0,1.86,1.506,3.367,3.365,3.367c1.86,0,3.366-1.507,3.366-3.367C58.307,51.615,56.8,50.108,54.94,50.108z'/></g></svg>";
  var micFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M50,19.317c8.592,0,15.557,6.964,15.557,15.558v12.101c0,8.593-6.965,15.558-15.557,15.558s-15.558-6.965-15.558-15.558V34.875C34.443,26.281,41.408,19.317,50,19.317z'/><path class='stand' d='M74.201,46.975c0-1.433-1.161-2.594-2.592-2.594c-1.434,0-2.595,1.161-2.595,2.594c0,10.501-8.512,19.015-19.014,19.015c-10.501,0-19.015-8.514-19.015-19.015c0-1.433-1.16-2.594-2.593-2.594c-1.432,0-2.593,1.161-2.593,2.594c0,12.49,9.461,22.765,21.607,24.06v4.461h-6.913c-1.432,0-2.594,1.162-2.594,2.594s1.161,2.594,2.594,2.594h19.014c1.433,0,2.593-1.162,2.593-2.594s-1.16-2.594-2.593-2.594h-6.915v-4.461C64.739,69.74,74.201,59.463,74.201,46.975z'/><path class='bars_left' d='M34.443,33.146v3.458h10.372v-3.458H34.443z M34.443,42.653h10.372v-3.457H34.443V42.653z M34.443,48.704h10.372v-3.458H34.443V48.704z'/><g class='bars_right'><rect x='55.187' y='33.146' width='10.371' height='3.458'/><rect x='55.187' y='39.196' width='10.371' height='3.457'/><rect x='55.187' y='45.246' width='10.371' height='3.458'/></g></g></svg>";
  var paperFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M33.174,76.947V28.366h37.955v48.581H33.174z'/><path class='front' d='M28.872,71.634V23.053h27.328L66.826,33.68v37.954H28.872z'/><path class='corner' d='M56.199,23.053L66.826,33.68H56.199V23.053z'/><path class='text' d='M36.432,39.247h22.014c0.209,0,0.381-0.169,0.381-0.379c0-0.211-0.17-0.381-0.381-0.381H36.432c-0.21,0-0.38,0.17-0.38,0.381C36.052,39.077,36.222,39.247,36.432,39.247z M58.443,46.079H36.431c-0.21,0-0.38,0.169-0.38,0.379c0,0.211,0.17,0.381,0.38,0.381h22.013c0.211,0,0.381-0.169,0.381-0.381C58.824,46.249,58.654,46.079,58.443,46.079z M58.443,53.67H36.431c-0.21,0-0.38,0.169-0.38,0.379c0,0.211,0.17,0.381,0.38,0.381h22.013c0.211,0,0.381-0.17,0.381-0.381C58.824,53.839,58.654,53.67,58.443,53.67z M58.443,61.261H36.431c-0.21,0-0.38,0.17-0.38,0.379c0,0.211,0.17,0.381,0.38,0.381h22.013c0.211,0,0.381-0.17,0.381-0.381C58.824,61.431,58.654,61.261,58.443,61.261z'/></g></svg>";
  var pencilFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,4.25c26.441,0,47.875,21.434,47.875,47.875C97.875,78.566,76.441,100,50,100C17.857,100,2.125,78.566,2.125,52.125C2.125,25.684,23.559,4.25,50,4.25z'/><g class='icon'><path class='wood' d='M26.683,55.108l16.801,16.84L23.62,75.635L26.683,55.108z'/><path class='base_top' d='M53.408,28.524l5.809,5.813L32.489,61.012l-5.807-5.75L53.408,28.524z'/><path class='base_bottom' d='M63.639,38.64l6.569,6.572L43.483,71.948l-6.635-6.575L63.639,38.64z'/><path class='base_middle' d='M58.868,33.931l6.569,6.573L38.714,67.239l-6.569-6.574L58.868,33.931z'/><path class='tip' d='M31.731,74.101l-8.635,1.776l1.776-8.638L31.731,74.101z'/><path class='eraser' d='M65.004,23.567l10.455,10.461c1.926,1.926,1.926,5.049,0,6.975L58.03,23.567C59.958,21.642,63.078,21.642,65.004,23.567z'/><path class='metal' d='M58.555,22.899l17.429,17.437c0.322,0.321,0.322,0.843,0,1.163l-4.244,4.246c-0.32,0.322-0.841,0.322-1.163,0L53.147,28.308c-0.319-0.32-0.319-0.842,0-1.161l4.245-4.248C57.715,22.578,58.235,22.578,58.555,22.899z'/></g></svg>";
  var phoneFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M37.381,21.793h25.237c2.46,0,4.454,1.994,4.454,4.454v47.506c0,2.46-1.994,4.454-4.454,4.454H37.381c-2.46,0-4.454-1.994-4.454-4.454V26.247C32.928,23.787,34.921,21.793,37.381,21.793z'/><path class='screen' d='M35.896,30.701h28.208v38.598H35.896V30.701z'/><path class='details' d='M50,71.681c-1.23,0-2.227,0.998-2.227,2.228c0,1.227,0.996,2.225,2.227,2.225s2.227-0.998,2.227-2.225C52.227,72.679,51.23,71.681,50,71.681z M52.969,26.401h-5.938c-0.411,0-0.743,0.331-0.743,0.741s0.332,0.743,0.743,0.743h5.938c0.41,0,0.743-0.333,0.743-0.743C53.71,26.732,53.379,26.401,52.969,26.401z'/></g></svg>";
  var pictureFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='back' d='M23.236,32.68l41.281-11.062c1.221-0.327,2.477,0.397,2.804,1.618l11.062,41.279c0.327,1.223-0.397,2.478-1.618,2.805L35.483,78.382c-1.221,0.327-2.477-0.397-2.804-1.618L21.618,35.484C21.29,34.262,22.015,33.007,23.236,32.68z'/><path class='front' d='M28.631,26.343h42.736c1.264,0,2.29,1.024,2.29,2.289v42.736c0,1.265-1.025,2.289-2.29,2.289H28.631c-1.264,0-2.29-1.024-2.29-2.289V28.632C26.342,27.367,27.367,26.343,28.631,26.343z'/><path class='sky' d='M30.158,29.395h39.684c0.422,0,0.764,0.342,0.764,0.765v39.684c0,0.423-0.342,0.765-0.764,0.765H30.158c-0.421,0-0.763-0.342-0.763-0.765V30.159C29.395,29.736,29.736,29.395,30.158,29.395z'/><path class='sun' d='M39.062,35.342c2.529,0,4.579,2.051,4.579,4.579c0,2.529-2.05,4.579-4.579,4.579s-4.579-2.05-4.579-4.579C34.483,37.393,36.534,35.342,39.062,35.342z'/><path class='mountain' d='M29.395,70.033l10.59-16.188c0.535-0.834,1.402-0.834,1.937,0l3.549,5.536l9.875-15.399c0.763-1.192,2.003-1.192,2.766,0c0,0,11.314,23.861,12.494,25.789c-0.003,0.388,0.046,0.834-0.443,0.834C67.2,70.672,35.549,70.6,30.036,70.593C29.526,70.593,29.395,70.033,29.395,70.033z'/></g></svg>";
  var planeFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='bottom' f d='M57.25,62.16L46.755,74.738l4.498-15.933L57.25,62.16z'/><path class='right' d='M75.985,25.262L64.742,73.061L51.247,58.806L75.985,25.262z'/><path class='middle' d='M75.985,25.262L51.996,59.645l-5.247,15.094L33.257,53.771'/><path class='left' d='M75.985,25.262L33.257,54.61l-17.242-0.839L75.985,25.262z'/></g></svg>";
  var presentFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,4.25c26.441,0,47.875,21.434,47.875,47.875C97.875,78.566,76.441,100,50,100C17.857,100,2.125,78.566,2.125,52.125C2.125,25.684,23.559,4.25,50,4.25z'/><g class='icon'><path class='base' d='M24.724,47.472h50.554v30.33H24.724V47.472z'/><path class='top' d='M21.354,39.047h57.293v8.426H21.354V39.047z'/><path class='ribbon' d='M58.427,22.196c-4.651,0-8.426,3.772-8.426,8.426c0-4.653-3.773-8.426-8.426-8.426s-8.427,3.772-8.427,8.426c0,4.652,3.774,8.426,8.427,8.426h4.212v38.756h8.426V39.047h4.214c4.651,0,8.425-3.772,8.425-8.426S63.078,22.196,58.427,22.196z M44.944,33.991h-3.369c-1.861,0-3.37-1.51-3.37-3.37s1.509-3.37,3.37-3.37c1.86,0,3.369,1.51,3.369,3.37V33.991z M58.427,33.991h-3.369v-3.37c0-1.86,1.507-3.37,3.369-3.37c1.861,0,3.37,1.51,3.37,3.37S60.288,33.991,58.427,33.991z'/></g></svg>";
  var robotFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='ears' d='M22.849,58.578l5.43,3.102V43.837l-5.43,3.102V58.578z M71.722,43.835V61.68l5.43-3.105V46.939L71.722,43.835z'/><path class='base' d='M31.381,33.751h37.237c1.714,0,3.102,1.39,3.102,3.103v32.582c0,1.715-1.388,3.104-3.102,3.104H31.381c-1.713,0-3.102-1.389-3.102-3.104V36.854C28.279,35.141,29.668,33.751,31.381,33.751z'/><path class='highlight' d='M29.83,33.751h18.618c0.855,0,1.552,0,1.552,0v38.788c0,0-0.695,0-1.552,0H29.83c-0.856,0-1.552-1.391-1.552-3.104V36.854C28.279,35.141,28.975,33.751,29.83,33.751z'/><path class='antenna' d='M55.431,22.891c0-3-2.431-5.43-5.431-5.43c-2.999,0-5.43,2.43-5.43,5.43c0,2.459,1.637,4.534,3.879,5.203v5.66h3.104v-5.66C53.795,27.425,55.431,25.349,55.431,22.891z'/><path class='eyes' d='M42.241,49.266c-2.141,0-3.879,1.736-3.879,3.879c0,2.141,1.736,3.879,3.879,3.879c2.142,0,3.879-1.738,3.879-3.879C46.121,51.002,44.383,49.266,42.241,49.266z M57.758,49.266c-2.141,0-3.879,1.736-3.879,3.879c0,2.141,1.736,3.879,3.879,3.879s3.879-1.738,3.879-3.879C61.637,51.002,59.898,49.266,57.758,49.266z'/></g></svg>";
  var rocketFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='engine' d='M32.515,51.63l16.327,16.328l-3.571,5.612L26.902,55.2L32.515,51.63z'/><path class='base' d='M26.902,46.083l1.021-1.021c0,0,7.669-1.483,14.828-8.643c14.165-14.164,30.583-9.217,30.583-9.217s4.946,16.421-9.216,30.583c-7.159,7.158-8.643,14.829-8.643,14.829l-1.021,1.021L26.902,46.083z'/><path class='window' d='M62.619,39.311c2.817,2.818,2.817,7.387,0,10.205c-2.817,2.82-7.388,2.82-10.204,0c-2.817-2.817-2.817-7.386,0-10.205C55.233,36.493,59.802,36.493,62.619,39.311z'/><path class='glass' d='M61.09,40.841c1.972,1.974,1.972,5.172,0,7.144c-1.974,1.972-5.171,1.972-7.143,0c-1.973-1.973-1.973-5.171,0-7.144C55.919,38.87,59.116,38.87,61.09,40.841z'/><path class='flame' d='M33.326,66.073c1.69,1.692,1.747,4.377,0.126,5.999c-1.859,1.858-6.759,1.656-7.269,1.146c-0.511-0.511-0.713-5.41,1.146-7.27C28.949,64.327,31.635,64.384,33.326,66.073z'/></g></svg>";
  var screenFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,4.25c26.441,0,47.875,21.434,47.875,47.875S76.441,100,50,100C17.857,100,2.125,78.566,2.125,52.125S23.559,4.25,50,4.25z'/><g class='icon'><path class='stand' d='M33.606,79.886v-2.343c7.113,0,8.588-2.227,8.588-6.242c0-0.133-0.017-0.65-0.021-0.782h15.652c-0.005,0.132-0.021,0.649-0.021,0.782c0,4.016,1.474,6.242,8.588,6.242v2.343H33.606z'/><path class='base' d='M27.361,28.364h45.276c2.587,0,4.685,2.097,4.685,4.685v32.787c0,2.586-2.098,4.683-4.685,4.683H27.361c-2.587,0-4.684-2.097-4.684-4.683V33.049C22.678,30.461,24.774,28.364,27.361,28.364z'/><path class='highlight' d='M27.361,28.364h45.276c2.587,0,4.685,1.786,4.685,3.99v27.929c0,2.205,0,3.992,0,3.992H22.678c0,0,0-1.787,0-3.992V32.354C22.678,30.15,24.774,28.364,27.361,28.364z'/><path class='logo' d='M49.999,64.757c1.294,0,2.342,1.05,2.342,2.343c0,1.292-1.049,2.342-2.342,2.342c-1.292,0-2.342-1.05-2.342-2.342C47.657,65.807,48.706,64.757,49.999,64.757z'/></g></svg>";
  var settingsFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M79.649,54.255v-8.509l-8.053-1.832c-0.484-1.721-1.162-3.358-2.019-4.885l4.396-6.986l-6.017-6.017l-6.985,4.396c-1.526-0.859-3.164-1.536-4.885-2.02l-1.832-8.051h-8.509l-1.832,8.051c-1.72,0.485-3.357,1.161-4.886,2.02l-6.986-4.396l-6.017,6.017l4.397,6.986c-0.858,1.527-1.536,3.164-2.021,4.885l-8.052,1.832v8.509l8.052,1.831c0.484,1.721,1.162,3.358,2.021,4.885l-4.397,6.987l6.017,6.017l6.986-4.396c1.527,0.858,3.164,1.535,4.886,2.02l1.832,8.051h8.509l1.832-8.051c1.72-0.484,3.357-1.161,4.885-2.02l6.985,4.396l6.017-6.017l-4.396-6.987c0.858-1.526,1.534-3.164,2.019-4.885L79.649,54.255z'/><path class='top' d='M50,35.171c8.189,0,14.829,6.639,14.829,14.83c0,8.191-6.64,14.83-14.829,14.83c-8.191,0-14.83-6.639-14.83-14.83C35.17,41.81,41.809,35.171,50,35.171z'/></g></svg>";
  var spaceshipFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,4.25c26.441,0,47.875,21.434,47.875,47.875C97.875,78.566,76.441,100,50,100C17.857,100,2.125,78.566,2.125,52.125C2.125,25.684,23.559,4.25,50,4.25z'/><g class='icon'><path class='light' d='M41.156,55.62h17.688l7.37,17.689h-32.43L41.156,55.62z'/><path class='glass' d='M41.156,35.535c0-4.884,3.96-8.845,8.844-8.845c4.885,0,8.845,3.96,8.845,8.845H41.156z'/><path class='base' d='M50,34.798c15.063,0,27.271,4.951,27.271,11.056c0,6.106-12.209,11.056-27.271,11.056c-15.062,0-27.271-4.949-27.271-11.056C22.729,39.749,34.938,34.798,50,34.798z'/><path class='circles' d='M50,41.433c-2.441,0-4.422,1.98-4.422,4.422s1.98,4.423,4.422,4.423c2.44,0,4.422-1.981,4.422-4.423S52.44,41.433,50,41.433z M64.741,41.433c-2.441,0-4.423,1.98-4.423,4.422s1.981,4.423,4.423,4.423s4.422-1.981,4.422-4.423S67.183,41.433,64.741,41.433z M35.259,41.433c-2.442,0-4.423,1.98-4.423,4.422s1.981,4.423,4.423,4.423s4.422-1.981,4.422-4.423S37.701,41.433,35.259,41.433z'/></g></svg>";
  var stormFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='cloud' d='M70.342,38.521c0.003-0.123,0.02-0.243,0.02-0.367c0-8.339-6.752-15.099-15.083-15.099c-5.764,0-10.769,3.238-13.308,7.996c-0.791-0.285-1.641-0.446-2.53-0.446c-4.166,0-7.541,3.382-7.541,7.549l0.002,0.039c-6.729,0.392-12.068,5.961-12.068,12.795c0,7.088,5.74,12.834,12.821,12.834h34.693c7.081,0,12.82-5.746,12.82-12.834C80.165,44.936,75.974,39.874,70.342,38.521z'/><polygon class='lightning' points='58.151,69.529 51.223,69.529 54.074,63.822 46.737,63.822 41.845,73.606 49.066,73.606 45.922,80.944 '/></g></svg>";
  var suitcaseFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/><g class='icon'><path class='top' d='M23.542,52.268V37.905c0-2.504,2.031-4.535,4.536-4.535h10.583v-4.534c0-2.505,2.031-4.537,4.536-4.537h13.607c2.504,0,4.535,2.032,4.535,4.537v4.534h10.584c2.504,0,4.535,2.031,4.535,4.535v14.363H23.542z M57.56,31.857v-1.511c0-1.253-1.016-2.269-2.268-2.269H44.709c-1.253,0-2.269,1.016-2.269,2.269v1.511v1.513H57.56V31.857L57.56,31.857z'/><path class='bottom' d='M76.457,52.268v18.898c0,2.506-2.031,4.535-4.536,4.535H28.076c-2.504,0-4.535-2.029-4.535-4.535V52.268H76.457z'/><path class='buttons' d='M36.394,49.245c-1.671,0-3.024,1.353-3.024,3.023s1.354,3.023,3.024,3.023c1.67,0,3.023-1.354,3.023-3.023S38.063,49.245,36.394,49.245z M63.606,49.245c-1.67,0-3.023,1.353-3.023,3.023s1.354,3.023,3.023,3.023s3.023-1.354,3.023-3.023S65.276,49.245,63.606,49.245z'/></g></svg>";
  var tagFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M75.523,53.617L53.508,75.631c-1.777,1.78-4.662,1.78-6.439,0L25.418,54.174c-2.275-2.276-2.275-7.275-2.275-8.347V27.614c0-2.514,1.821-4.58,4.336-4.58l19.188,0.028c3.036,0,5.313,0.759,7.59,3.033l21.268,21.082C77.303,48.957,77.303,51.842,75.523,53.617z'/><path class='dot' d='M33.866,27.083c2.934,0,5.312,2.379,5.312,5.313c0,2.933-2.377,5.312-5.312,5.312c-2.934,0-5.312-2.379-5.312-5.312C28.555,29.461,30.932,27.083,33.866,27.083z'/></g></svg>";
  var thumbsdownFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M52.125,2.125C78.566,2.125,100,23.559,100,50c0,26.441-21.434,47.875-47.875,47.875C19.982,97.875,4.25,76.441,4.25,50C4.25,23.559,25.684,2.125,52.125,2.125z'/><g class='icon'><path class='base' d='M75.731,49.391c0,0,2.573-0.862,2.573-3.451c0-2.59-3.43-4.315-3.43-4.315s1.715-0.693,1.715-3.454c0-2.759-4.287-3.452-4.287-3.452s2.572-0.864,2.572-3.452c0-2.589-4.093-3.452-4.093-3.452H46.568v28.477h4.289c5.587,0,6.003,8.63,6.003,8.63s0,5.173,0,6.04c0,1.726,0.858,4.315,4.289,2.588c3.43-1.726,3.43-4.95,3.43-8.628c0-2.761-0.856-8.63-0.856-8.63s8.283,0,12.008,0c1.717,0,3.431-0.862,3.431-3.451C79.163,50.25,75.731,49.391,75.731,49.391z'/><path class='sleeve' d='M41.424,27.818h-5.988c-8.062,0-14.597,6.567-14.597,14.67c0,8.102,6.535,14.669,14.597,14.669h5.988V27.818z'/><path class='cuff' d='M38.85,58.674h10.293V25.881H38.85V58.674z'/><path class='dot' d='M43.997,35.521c1.42,0,2.573-1.159,2.573-2.589c0-1.429-1.152-2.587-2.573-2.587s-2.573,1.159-2.573,2.587C41.424,34.361,42.576,35.521,43.997,35.521z'/></g></svg>";
  var thumbsupFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' d='M78.856,47.19c0-2.562-1.698-3.417-3.396-3.417c-3.685,0-11.882,0-11.882,0s0.849-5.809,0.849-8.538c0-3.642,0-6.831-3.395-8.538c-3.396-1.708-4.242,0.854-4.242,2.562c0,0.856,0,5.977,0,5.977s-0.414,8.538-5.942,8.538h-4.243V71.95h23.958c0,0,4.051-0.854,4.051-3.416c0-2.561-2.547-3.415-2.547-3.415s4.243-0.687,4.243-3.416c0-2.732-1.697-3.417-1.697-3.417s3.396-1.707,3.396-4.27s-2.548-3.416-2.548-3.416S78.856,49.75,78.856,47.19z'/><path class='sleeve' d='M41.512,42.919h-5.925c-7.977,0-14.443,6.498-14.443,14.515c0,8.017,6.467,14.515,14.443,14.515h5.925V42.919z'/><path class='cuff' d='M38.965,73.865h10.185V41.419H38.965V73.865z'/><path class='dot' d='M41.512,66.891c0,1.415,1.14,2.562,2.546,2.562c1.407,0,2.547-1.146,2.547-2.562c0-1.414-1.141-2.561-2.547-2.561C42.652,64.33,41.512,65.477,41.512,66.891z'/></g></svg>";
  var trashFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' fill='' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='base' fill='' d='M72.201,38.16v32.561c0,2.452-1.988,4.44-4.441,4.44H32.241c-2.452,0-4.44-1.988-4.44-4.44V38.16H72.201z'/><path class='details' fill='' d='M40.381,41.861c-0.817,0-1.481,0.661-1.481,1.48V69.98c0,0.817,0.663,1.48,1.481,1.48c0.816,0,1.48-0.661,1.48-1.48v-26.64C41.861,42.522,41.198,41.861,40.381,41.861z M59.621,41.861c-0.816,0-1.48,0.661-1.48,1.48V69.98c0,0.817,0.664,1.48,1.48,1.48s1.48-0.661,1.48-1.48v-26.64C61.102,42.522,60.438,41.861,59.621,41.861z M50.001,41.861c-0.817,0-1.481,0.661-1.481,1.48V69.98c0,0.817,0.663,1.48,1.481,1.48c0.816,0,1.48-0.661,1.48-1.48v-26.64C51.481,42.522,50.817,41.861,50.001,41.861z'/><path class='lid' fill='' d='M24.1,38.16L24.1,38.16c0-2.453,1.987-4.441,4.441-4.441H38.9v-4.44c0-2.452,1.988-4.439,4.44-4.439h13.32c2.453,0,4.441,1.987,4.441,4.439v4.44h10.359c2.451,0,4.439,1.988,4.439,4.441l0,0H24.1z M57.4,32.24v-1.48c0-1.226-0.996-2.22-2.219-2.22H44.82c-1.226,0-2.219,0.994-2.219,2.22v1.48v1.48H57.4V32.24z'/></g></svg>";
  var userFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='body' d='M74.302,78.127H25.698c-2.982,0-5.4-2.419-5.4-5.4l0,0l0,0c0-19.884,13.501-25.202,29.702-25.202s29.702,5.318,29.702,25.202l0,0C79.702,75.71,77.283,78.127,74.302,78.127z'/><polygon class='collar_right' points='63.501,49.325 50,54.726 55.4,62.826 '/><polygon class='collar_left' points='46.977,62.826 52.377,54.726 38.876,49.325 '/><path class='head' d='M50.877,21.873c8.947,0,16.201,7.254,16.201,16.201c0,8.948-7.254,16.201-16.201,16.201c-8.947,0-16.201-7.253-16.201-16.201C34.676,29.127,41.928,21.873,50.877,21.873z'/><path class='hair' d='M67.918,39.683c-1.019,0.116-2.053,0.193-3.114,0.193c-8.816,0-16.3-4.136-19.082-9.9h-0.565c-1.256,2.194-3.435,4.371-6.296,6.022c-1.684,0.972-3.41,1.646-5.062,2.043c0.386-7.127,5.121-13.086,11.609-15.266h0.087c0.83-0.279,1.686-0.499,2.564-0.653c0.055-0.009,0.11-0.018,0.166-0.023c0.371-0.061,0.745-0.111,1.124-0.148c0.497-0.044,0.997-0.075,1.504-0.075c7.674,0,14.167,5.054,16.332,12.016c0.168,0.537,0.309,1.083,0.423,1.638c0.229,1.114,0.349,2.267,0.349,3.447C67.954,39.215,67.928,39.445,67.918,39.683z'/></g></svg>";
  var winnerFilled = "<svg class='flat_icon' xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' ><path class='circle' d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z'/><g class='icon'><path class='ribbon' d='M39.036,61.003h21.929l2.529,21.928L50,75.341l-13.494,7.59L39.036,61.003z'/><path class='base' d='M74.459,41.529c0,0.771-2.346,1.423-2.42,2.173c-0.074,0.765,2.102,1.855,1.955,2.599c-0.148,0.753-2.576,0.932-2.797,1.659c-0.223,0.734,1.697,2.231,1.406,2.933c-0.293,0.708-2.711,0.405-3.068,1.076c-0.361,0.675,1.227,2.518,0.805,3.15c-0.426,0.636-2.738-0.13-3.221,0.458c-0.484,0.59,0.715,2.708,0.176,3.247c-0.539,0.54-2.656-0.659-3.246-0.177c-0.59,0.484,0.176,2.795-0.457,3.221c-0.633,0.423-2.479-1.167-3.152-0.804c-0.67,0.357-0.369,2.773-1.076,3.066c-0.701,0.292-2.197-1.627-2.932-1.405c-0.727,0.221-0.906,2.649-1.66,2.798c-0.742,0.146-1.833-2.03-2.599-1.956c-0.753,0.074-1.401,2.42-2.173,2.42c-0.771,0-1.421-2.346-2.173-2.42c-0.765-0.074-1.856,2.103-2.599,1.956c-0.754-0.15-0.934-2.578-1.66-2.798c-0.733-0.222-2.23,1.697-2.932,1.405c-0.708-0.293-0.407-2.709-1.077-3.066c-0.675-0.363-2.519,1.227-3.151,0.804c-0.635-0.426,0.131-2.738-0.458-3.221c-0.589-0.482-2.707,0.717-3.247,0.177c-0.54-0.539,0.66-2.657,0.176-3.248c-0.484-0.589-2.795,0.178-3.22-0.457c-0.422-0.633,1.167-2.479,0.805-3.15c-0.359-0.671-2.775-0.369-3.068-1.076c-0.291-0.702,1.628-2.198,1.406-2.933c-0.22-0.725-2.648-0.906-2.797-1.659c-0.147-0.744,2.028-1.834,1.955-2.599c-0.074-0.752-2.42-1.402-2.42-2.173s2.346-1.423,2.42-2.173c0.074-0.765-2.101-1.857-1.955-2.599c0.149-0.754,2.578-0.933,2.797-1.659c0.223-0.734-1.697-2.231-1.406-2.933c0.293-0.708,2.709-0.406,3.069-1.076c0.361-0.675-1.228-2.519-0.805-3.151c0.425-0.634,2.736,0.132,3.219-0.457c0.485-0.587-0.715-2.709-0.175-3.248c0.54-0.54,2.657,0.66,3.247,0.176c0.589-0.483-0.177-2.795,0.457-3.22c0.633-0.423,2.478,1.167,3.151,0.805c0.67-0.358,0.369-2.775,1.077-3.069c0.701-0.29,2.198,1.63,2.933,1.407c0.724-0.221,0.905-2.649,1.659-2.797c0.743-0.146,1.834,2.028,2.599,1.955c0.752-0.074,1.402-2.42,2.173-2.42c0.771,0,1.422,2.346,2.173,2.42c0.766,0.074,1.856-2.101,2.599-1.954c0.756,0.149,0.934,2.577,1.66,2.794c0.732,0.225,2.23-1.695,2.934-1.404c0.705,0.293,0.404,2.71,1.074,3.068c0.676,0.363,2.52-1.227,3.152-0.804c0.635,0.425-0.133,2.736,0.457,3.219c0.588,0.483,2.709-0.716,3.246-0.175c0.539,0.54-0.66,2.657-0.176,3.247c0.484,0.589,2.795-0.177,3.221,0.457c0.422,0.633-1.166,2.478-0.805,3.151c0.357,0.67,2.775,0.369,3.068,1.076c0.291,0.702-1.629,2.198-1.406,2.933c0.221,0.724,2.648,0.905,2.797,1.659c0.146,0.742-2.029,1.834-1.955,2.599C72.113,40.108,74.459,40.758,74.459,41.529z'/><path class='text' d='M50.183,32.507h-2.711l-0.806,4.888h-2.357l0.806-4.888h-2.71l-0.806,4.888h-2.701l-0.417,2.731h2.668l-0.565,3.421h-2.706l-0.417,2.732h2.674L39.43,50.55h2.71l0.704-4.271h2.357l-0.704,4.271h2.71l0.704-4.271h2.831l0.418-2.732h-2.798l0.564-3.421h2.837l0.418-2.731h-2.805L50.183,32.507z M45.652,43.547H43.31l0.549-3.421h2.343L45.652,43.547z M57.184,32.521c-0.258,0.595-0.684,1.101-1.273,1.518c-0.588,0.417-1.209,0.664-1.859,0.74v1.898h2.313v13.873h2.719V32.521H57.184z'/></g></svg>";
  
  var arr = document.getElementsByClassName("flat-filled");
  
  for (var i = arr.length - 1; i >= 0; i--) {
    if(arr[i].parentNode.className == "rm-icon rm-success" || arr[i].parentNode.className == "rm-icon rm-error" ){
      arr[i].innerHTML = "";
      
      var svgID = arr[i].id;
      var svgName = svgID.split('-')[1];
      var svgTo = 'filled-'+svgName;
      var svgIn = eval(svgName+'Filled');
      $(svgIn).appendTo('#'+svgTo);
    }/*
    else
    {
      arr[i].innerHTML = "";
      arr[i].id = "";
    }*/
  }
  
  if(params.svgIcon !== null){
    var name = params.svgIcon;
    var id = document.getElementsByClassName("rm-svg")[0].childNodes[0].id = 'filled-'+name;
    var sIn = eval(name+'Filled');
    $(sIn).appendTo('.rm-svg #'+id);
  }

  $('.rm-prevent-link span').remove();
  if((params.preventDialog === true)&&(params.preventText !== null)){
    var text = "<span>"+params.preventText+"</span>";
    $('.rm-prevent-link').append(text);
  }

  /* Cancel - Confirm Button Background section */
  var canc = document.getElementsByClassName('cancel')[1].style.display;
  var conf = document.getElementsByClassName('confirm')[0].style.display;
  if(canc == 'none' && conf == 'none'){
      document.getElementsByClassName('rm-button-container')[0].style.display = "none";
  }
  
  
  /* SVG Variables End*/
  
  /* Modal duration & delay */
  if(params.delay){
      var dly = params.delay+"s";
      $modal.setAttribute('data-delay', dly);
      if ( $('.rplm-alert').is( '[data-delay]') ) {
        $('.rplm-alert').css({'-webkit-animation-delay':dly,'-moz-animation-delay':dly,'-ms-animation-delay':dly,'-o-animation-delay':dly,'animation-delay':dly,'transition-delay':dly});
      }
  }
  
  if(params.duration){
      var dura = params.duration+"s";
      $modal.setAttribute('data-duration', dura);
      if ( $('.rplm-alert').is( '[data-duration]') ) {
        $('.rplm-alert').css({'-webkit-animation-duration':dura,'-moz-animation-duration':dura,'-ms-animation-duration':dura,'-o-animation-duration':dura,'animation-duration':dura});
      }
  }

  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showRepleteModal');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideRepleteModal');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        // repleteModal.close(_defaultParams2['default']);
        repleteModal.close(params);
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();
  if($input !== null){
    _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
    $input.value = _defaultParams2['default'].inputValue;
    $input.setAttribute('type', _defaultParams2['default'].inputType);
    $input.setAttribute('placeholder',_defaultParams2 ['default'].inputPlaceholder);
    resetInputError();
  }
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.rm-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.rm-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.repleteModalInitialize = repleteModalInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"rplm-overlay\"></div>" +

// Modal
"<div class=\"rplm-alert\"> <div class=\"content-wrap\">" +

// Close Button
"<div class=\"close-btn cancel\"></div>" +


// Error icon
/* "<div class=\"rm-icon rm-error\">\n      <span class=\"rm-x-mark\">\n        <span class=\"rm-line rm-left\"></span>\n        <span class=\"rm-line rm-right\"></span>\n      </span>\n    </div>" +*/
"<div class=\"rm-icon rm-error\">\n   <span class=\"svg-icon flat-filled\" id=\"filled-thumbsdown\"></span> </div>" +

// Warning icon
"<div class=\"rm-icon rm-warning\">\n      <span class=\"rm-body\"></span>\n      <span class=\"rm-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"rm-icon rm-info\"></div>" +

// Success icon
/*"<div class=\"rm-icon rm-success\">\n      <span class=\"rm-line rm-tip\"></span>\n      <span class=\"rm-line rm-long\"></span>\n\n      <div class=\"rm-placeholder\"></div>\n      <div class=\"rm-fix\"></div>\n    </div>" + "<div class=\"rm-icon rm-custom\"></div>" +*/
"<div class=\"rm-icon rm-success\">\n  <span class=\"svg-icon flat-filled\" id=\"filled-thumbsup\"></span>  </div>" + "<div class=\"rm-icon rm-custom\"></div>" +


//SVG 
"<div class=\"rm-svg\"></div>" +

// Title, text and input
"<div class=\"customTitle\"></div>\n    <p>Text</p>\n   <div class=\"customFieldset\"><span></span></div>" +
 //"<fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"rm-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"rm-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div> </div>" +

// Cancel and confirm buttons
"<div class=\"rm-button-container\">\n      <button class=\"cancel\" >Cancel</button>\n      <div class=\"rm-confirm-button-container\">\n        <button class=\"confirm\" >OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>" +
"<div class=\"rm-prevent-link\"></div>\n    </div>" +
// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = require('./utils');

var _getModal$getInput$setFocusStyle = require('./handle-swal-dom');

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = require('./handle-dom');

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt', 'map'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  // var $title = modal.querySelector('h2');
  var $title = modal.querySelector('.customTitle');
  var $fieldset = modal.querySelector('.customFieldset span');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');
  
  if(params.type === "input"){
    $fieldset.innerHTML = "<fieldset>\n <input type=\"text\" />\n <div class=\"rm-input-error\"></div>\n </fieldset>";
  }
  else {
    $fieldset.innerHTML = "";
  }

  if(params.title !== ""){
    $title.innerHTML="<h2></h2>";
    $title = modal.querySelector('.customTitle h2');
  }
  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  if(params.youtubeID !== null){
    var utubeHeight = params.videoHeight;
    var utubeWidth = params.videoWidth;
    var utubeURL = 'https://www.youtube.com/embed/'+params.youtubeID;
    var utubeIframe = '<iframe src="'+utubeURL+'" frameborder="0" height="'+utubeHeight+'" width="'+utubeWidth+'" allowfullscreen></iframe>';
    params.text = utubeIframe;
  }
  if(params.vimeoID !== null){
    var vimeoHeight =  params.videoHeight;
    var vimeoWidth =  params.videoWidth;
    var vimeoURL = 'https://player.vimeo.com/video/'+params.vimeoID;
    var vimeoIframe = '<iframe src="'+vimeoURL+'" frameborder="0" height="'+vimeoHeight+'" width="'+vimeoWidth+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    params.text = vimeoIframe;
  }
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.rm-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.rm-icon.' + 'rm-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          break;

        case 'error':
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.rm-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.rm-dot'), 'pulseWarningIns');
          break;

        case 'input':

        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', rplm.resetInputError);
          }, 400);
          break;

          case 'map':
          // console.log('asdf');
            var mapCanvas = document.getElementById('map');
            var lt = parseFloat(params.lat);
            var lg = parseFloat(params.lng);
            var mapOptions = {
              center: new google.maps.LatLng(params.lat, params.lng),
              zoom: params.zoom,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

            setTimeout(function(){
              var map = new google.maps.Map(mapCanvas, mapOptions);
              google.maps.event.trigger(map,'resize');
              var marker = new google.maps.Marker({
                position: {lat: lt, lng: lg},
                map: map,
              });
            },800);
            break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.rm-icon.rm-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * SVG icon
   */
  if (params.svgIcon !== null) {
    var $svgIcon = modal.querySelector('.rm-svg');
    
    var svgVal = '<span class="svg-icon flat-filled" id="filled-'+params.svgIcon+'"></span>';
    $svgIcon.innerHTML= svgVal;
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($svgIcon);
  }
  
  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }


  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.className += ' animated';
  }
  else if (typeof params.animation === 'string') {
    modal.className += ' animated ' + params.animation;
  } else {
    modal.className += ' animated bounceIn';
  }

  /*
   * Position
   */
  if (!params.position) {
    modal.setAttribute('data-position', 'center');
  } else if (typeof params.position === 'string') {
    modal.setAttribute('data-position', params.position); // Custom position
  } else {
    modal.setAttribute('data-position', 'center');
  }

  /*
   * Modal and Overlay 
   */
  var body = document.getElementsByTagName("body");
  
  /* Custom Overlay Color */
  body[0].setAttribute('data-closebtncolor', params.closeButtonColor);

  if (typeof params.modalNOverlay === 'string') {
    body[0].setAttribute('data-modal', params.modalNOverlay); // Custom modalNOverlay
    /* Custom Overlay Color */
    var bg = document.getElementsByClassName("rplm-overlay");
    if(params.modalNOverlay == "custom"){
      if (!params.customModalColor) {
        params.customModalColor = '#000000';
        modal.getElementsByClassName('content-wrap')[0].style.backgroundColor = params.customModalColor;
        modal.getElementsByClassName('rm-button-container')[0].style.backgroundColor = params.customModalColor;
      }else if (typeof params.customModalColor === 'string') {
        modal.getElementsByClassName('content-wrap')[0].style.backgroundColor = params.customModalColor;
        modal.getElementsByClassName('rm-button-container')[0].style.backgroundColor = params.customModalColor;
      }else{
        modal.getElementsByClassName('content-wrap')[0].style.backgroundColor = params.customModalColor;
        modal.getElementsByClassName('rm-button-container')[0].style.backgroundColor = params.customModalColor;

      }
    }
  }
  /*
  * Width
  */
  if (typeof params.width === 'string') {
    var area = document.getElementsByClassName("rplm-alert");
    area[0].style.width = params.width;
  }

  /*Set Padding Attribute*/
  body[0].setAttribute('data-padding', params.allowPadding);

  /*
   * Overlay
   */
  var olay = document.getElementsByTagName("body");
  
  if (typeof params.overlay === 'string') {
    olay[0].setAttribute('data-overlay', params.overlay);

    /* Custom Overlay Color */
    var bg = document.getElementsByClassName("rplm-overlay");
    if(params.overlay == "custom"){
      if (!params.customOverlayColor) {
        params.customOverlayColor = '#000000';
        var color = convertHex(params.customOverlayColor,80);
          bg[0].style.backgroundColor = color;
      }else if (typeof params.customOverlayColor === 'string') {
        var color = convertHex(params.customOverlayColor,80);
        bg[0].style.backgroundColor = color;
      }else{
        var color = convertHex(params.customOverlayColor,80);
        bg[0].style.backgroundColor = color;
      }
    }
  }



  function convertHex(hex,opacity){
    var hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
  }

  /*
   * Show Close Button
   */
    if($('.close-btn').hasClass('close-icon')){
      $('.close-btn').removeClass('close-icon');
    }
   if($('.close-btn').text() !== ""){
      $('.close-btn').text("");
    }
  if(params.showCloseButton === false){
    $('.close-btn').hide();
  }else{
    $('.close-btn').show();

    if(params.closeButtonText === ''){
      $('.close-btn').addClass('close-icon');
    }else{
      $('.close-btn').text( params.closeButtonText );
    }
    
    if(params.closeButtonWithInModal === true){
      $('.close-btn').css({'top':'6%','background-color':'transparent','padding':'0','right':'6%'});
    }else{
      $('.close-btn').css({'top':'-20%','background-color':'#ffffff','padding':'3px 2%','right':'0'});
    }

  }
  $('.close-btn').on('click',function(){
      rplm.close(params);
  });


  // Set cookie for prevent Dialog
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
  }
  $('.rm-prevent-link').on('click',function(){
    if(params.preventDialog === true){
      var user = params.cookieName;//"preventRepleteModal";
      var days = params.preventDays;
      setCookie("rplm"+user, user, days);
    }
    rplm.close(params);
  });

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('Replete Modal: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

},{}]},{},[1])
  
  /*
   * Use Replete Modal with RequireJS
   */
  
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return repleteModal;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = repleteModal;
  }

})(window, document);