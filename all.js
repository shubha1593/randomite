// Randomite
(function($) {
	window.myapp = {};

	myapp.shapeGenerator = { 
		generateRandomShape: function() {
			var $div = $("<div>", {class: "random-shape"});
			var radius = Math.floor(Math.random() * 75);
			var colors = ["#CCCCCC","#333333","#990099", "#00A5E9"];                
  			var rand = Math.floor(Math.random()*colors.length);      
			$div.css("border-radius", radius);
			$div.css("background-color", colors[rand]);
			$(".playground").append($div);
			$div.fadeTo("slow", 0.50);
		}
	};

	myapp.main = function() {
		$(document).ready(function() {
			$("#shape").click(function() {
				myapp.shapeGenerator.generateRandomShape();
				console.log("reached here too");
			});

			$(document).on("click", ".random-shape", function(event) {
				$(event.currentTarget).remove();
			});

			console.log("reached here");
		});
	};
	console.log("yooo");

	myapp.main();

})(jQuery);