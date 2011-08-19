(function( $ ){
  $.fn.inputModified = function(eventHandler) {
    this.each(function(idx) {
    	if ("onpropertychange" in this) {
    		this.attachEvent($.proxy(eventHandler, this));
		} else {
    		this.addEventListener("input", eventHandler, false);
    	}
    });
  };
})( jQuery );