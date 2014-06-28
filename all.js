// Randomite
(function($) {
	window.myapp = {};
	myapp.shapeGenerator = { 
		_data: {
			colors: ["#CCCCCC","#333333","#990099", "#00A5E9"]
		},

		getRandomRadius: function() {
			return Math.floor(Math.random() * 75);  
		},

		getRandomColor: function() {
			var index = Math.floor(Math.random()*this._data.colors.length);
			return this._data.colors[index];
		},

		getRandomShape: function() {
			var $div = $("<div>", {class: "random-shape"});
			var radius = this.getRandomRadius();               
			$div.css("border-radius", radius);
			$div.css("background-color", this.getRandomColor());
			return $div;
		},

		appendShapeToPlayground: function() {
			var $randomShape = this.getRandomShape();
			$(".playground").append($randomShape);
			$randomShape.fadeTo("slow", 0.50);
		},

		events: function() {
			var self = this;
			$("#shape").click(function() {
				self.appendShapeToPlayground();
			});

			$(document).on("click", ".random-shape", function(event) {
				$(event.currentTarget).remove();
			});
		}
	};

	myapp.main = function() {
		$(document).ready(function() {
			myapp.shapeGenerator.events();		
		});
	};
	
	myapp.main();

})(jQuery);