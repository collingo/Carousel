define(function() {
	function Carousel() {
		// instance properties
		this.test = "hello";

		this.init.call(this);
	}
	// class properties
	Carousel.prototype.name = "Carousel";
	// class methods
	Carousel.prototype.init = function() {
		console.log("Carousel init'd")
	};
	return Carousel;
});