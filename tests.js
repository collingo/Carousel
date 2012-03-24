require([
	"jquery",
	"src/js/carousel"
],
function(
	$,
	Carousel
) {

    describe('Carousel', function () {
       var carousel = new Carousel();

       it('exists', function () {
           expect(carousel).toBeDefined();
       });

    });

});