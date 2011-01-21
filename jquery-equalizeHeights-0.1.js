(function($){
	
	/*
	 * Function: jquery-equalizeHeights
	 * Equalizes the heights of passed elements
	 * 
	 * Returns:
	 *     jQuery collection containing equalized elements (i.e. is chainable)
	 * 
	 * Example:
	 *     > $greetings = $('section > article').equalizeHeights();
	 * 
	 * Author:
	 *     Chuck Harmston chuck@chuckharmston.com
	 * 
	 * Version:
	 *     0.1
	 */
	$.fn.equalizeHeights = function(){
		var largest = 0;
		this.each(function() {
			height = $(this).outerHeight();
			if(height > largest) largest = height;
		});
		return this.each(function() {
			var $this = $(this),
			    extra = $this.outerHeight() - $this.height();
			$this.height(largest - extra);
		});
	}
	
})(jQuery);