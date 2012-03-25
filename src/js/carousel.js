define(function() {

	/**
	 * Carousel
	 * ---
	 * creates a smooth looping carousel from an HTML list element
	 */
	function Carousel(options) {
		// instance properties
		this.options = $.extend({}, {
			itemsPerPage: 1
		}, options);
		this.current = 0;

		// cache jQ objects
		this.element = this.options.element;
		this.list = this.$('ul');
		this.items = this.$('ul li');
		this.btnPrev = $('<a class="previous" href="#previous"></a>');
		this.btnNext = $('<a class="next" href="#next"></a>');

		// setup DOM
		this.element.addClass('scrolling').append(this.btnPrev).append(this.btnNext);
		this.list.addClass('stage');
		this.items.filter(this.pageFilter.bind(this)).addClass('current')
		this.items.not(this.pageFilter.bind(this)).addClass('right');

		// bind events
		this.btnPrev.on('click', this.btnPrevTap.bind(this));
		this.btnNext.on('click', this.btnNextTap.bind(this));

		// debug
		if(this.options.debug) {
			this.log(this);
			this.element.data(this.name, this);
		}
	}

	// class properties
	Carousel.prototype.name = "Carousel";

	// class methods
	Carousel.prototype.goto = function(_page) {
		var page = _page;
		if(_page < 0) {
			page = this.items.length - 1;
		}
		if(_page >= this.items.length) {
			page = 0;
		}
		this.current = page;
		this.log("goto", page);
	};
	Carousel.prototype.next = function() {
		this.goto.call(this, this.current+1);
	};
	Carousel.prototype.prev = function() {
		this.goto.call(this, this.current-1);
	};
	Carousel.prototype.reset = function() {
		this.goto.call(this, 0);
	};

	// private class methods
	Carousel.prototype.pageFilter = function(index) {
		return (index < this.options.itemsPerPage) ? true : false;
	};

	// event handlers
	Carousel.prototype.btnPrevTap = function(e) {
		e.preventDefault();
		this.prev.call(this);
	};
	Carousel.prototype.btnNextTap = function(e) {
		e.preventDefault();
		this.next.call(this);
	};

	// utility methods
	Carousel.prototype.log = function() {
		if(typeof console !== 'undefined' && console.log.apply && this.options.debug) {
			var msg = arguments;
			Array.prototype.unshift.call(msg, this.name+":");
			console.log.apply(console, msg);
		}
		return this;
	};
	Carousel.prototype.$ = function(s) {
		return $(s, this.element);
	};

	return Carousel;
});