$( document ).ready(function() {
	// (function() {
	// 	var Acousticbeat, Heartbeat, Line, Parabola, canvas, ctx, height, height_offset, redraw, t, width, x1, x2, y1, y2;

	// 	window.N = 400;

	// 	Heartbeat = (function() {
	// 		function Heartbeat(parabola_smoothing, height_offset, offset_x, width) {
	// 			this.parabola_smoothing = parabola_smoothing;
	// 			this.height_offset = height_offset;
	// 			this.offset_x = offset_x;
	// 			this.width = width;
	// 		}

	// 		Heartbeat.prototype.coordinates = function() {
	// 			var coordinates, dx, i, x, y, _i, _ref;
	// 			coordinates = [];
	// 			dx = this.width / window.N;
	// 			for (i = _i = 0, _ref = window.N; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
	// 				x = dx * i;
	// 				y = this.f_xt(x, t);
	// 				coordinates.push([x, y]);
	// 			}
	// 			return coordinates;
	// 		};

	// 		Heartbeat.prototype.f_xt = function(x, t) {
	// 			return this.height_offset + (this.height_offset * 0.18) * Math.cos(x / 25 + t * 0.01 + this.offset_x) * this.parabola_smoothing.fx(x);
	// 		};

	// 		return Heartbeat;

	// 	})();

	// 	Acousticbeat = (function() {
	// 		function Acousticbeat(height_offset, offset_x, width) {
	// 			this.height_offset = height_offset;
	// 			this.offset_x = offset_x;
	// 			this.width = width;
	// 		}

	// 		Acousticbeat.prototype.coordinates = function() {
	// 			var coordinates, dx, i, x, y, _i, _ref;
	// 			coordinates = [];
	// 			dx = this.width / window.N;
	// 			for (i = _i = 0, _ref = window.N; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
	// 				x = dx * i;
	// 				y = this.f_xt(x, t);
	// 				coordinates.push([x, y]);
	// 			}
	// 			return coordinates;
	// 		};

	// 		Acousticbeat.prototype.f_xt = function(x, t) {
	// 			return this.height_offset + this.height_offset * 0.7 * Math.sin(x * 0.025 + 0.02 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 10000);
	// 		};

	// 		return Acousticbeat;

	// 	})();

	// 	Line = (function() {
	// 		function Line(context, coordinates, color) {
	// 			this.context = context;
	// 			this.coordinates = coordinates;
	// 			this.color = color != null ? color : 'rand';
	// 		}

	// 		Line.prototype.draw = function() {
	// 			var next_coordinates, _i, _len, _ref;
	// 			ctx.beginPath();
	// 			ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
	// 			_ref = this.coordinates;
	// 			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	// 				next_coordinates = _ref[_i];
	// 				ctx.lineTo(next_coordinates[0], next_coordinates[1]);
	// 			}
	// 			ctx.lineWidth = 6;
	// 			if (this.color === 'rand') {
	// 				ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
	// 			} else {
	// 				ctx.strokeStyle = this.color;
	// 			}
	// 			return ctx.stroke();
	// 		};

	// 		return Line;

	// 	})();

	// 	Parabola = (function() {
	// 		function Parabola(coordinates, borders) {
	// 			this.coordinates = coordinates;
	// 			this.borders = borders;
	// 			this.x1 = this.coordinates[0][0];
	// 			this.y1 = this.coordinates[0][1];
	// 			this.x2 = this.coordinates[1][0];
	// 			this.y2 = this.coordinates[1][1];
	// 			this.x3 = this.coordinates[2][0];
	// 			this.y3 = this.coordinates[2][1];
	// 			this.a = this.get_a();
	// 			this.b = this.get_b();
	// 			this.c = this.get_c();
	// 		}

	// 		Parabola.prototype.fx = function(x) {
	// 			if (x < this.borders[0] || x > this.borders[1]) {
	// 				return 0;
	// 			} else {
	// 				return this.a * x * x + this.b * x + this.c;
	// 			}
	// 		};

	// 		Parabola.prototype.coefficients = function() {
	// 			return {
	// 				a: this.get_a(),
	// 				b: this.get_b(),
	// 				c: this.get_c()
	// 			};
	// 		};

	// 		Parabola.prototype.get_a = function() {
	// 			return (this.y3 - (this.x3 * (this.y2 - this.y1) + this.x2 * this.y1 - this.x1 * this.y2) / (this.x2 - this.x1)) / (this.x3 * (this.x3 - this.x1 - this.x2) + this.x1 * this.x2);
	// 		};

	// 		Parabola.prototype.get_b = function() {
	// 			return (this.y2 - this.y1) / (this.x2 - this.x1) - this.get_a() * (this.x1 + this.x2);
	// 		};

	// 		Parabola.prototype.get_c = function() {
	// 			return (this.x2 * this.y1 - this.x1 * this.y2) / (this.x2 - this.x1) + this.get_a() * this.x1 * this.x2;
	// 		};

	// 		return Parabola;

	// 	})();

	// 	canvas = document.getElementById("canvas1");

	// 	if (canvas.getContext) {
	// 		ctx = canvas.getContext("2d");
	// 		width = canvas.width = window.innerWidth;
	// 		height = canvas.height;
	// 		x1 = 0;
	// 		y1 = height / 2;
	// 		x2 = width;
	// 		y2 = height / 2;
	// 		height_offset = height / 2;
	// 		t = 0;
	// 		redraw = function() {
	// 			var acousticbeat, acousticbeat_line, base_line_coordinates, color, colors, i, _i, _len;
	// 			t += 1;
	// 			ctx.clearRect(0, 0, width, height);
	// 			ctx.globalCompositeOperation = "source-over";
	// 			base_line_coordinates = [[x1, y1], [x2, y2]];
	// 			colors = ["#3498db", "#ffd071", "#f0776c", "#1abc9c", "#7779EB", "#C4273E", "black"];
 //        // colors = ["#ff9d9d", "#fcc9a3", "#fcf5a3", "#cffca3", "#a3fcf0", "#a3cbfc", "#e4a3fc"];
 //        i = 0;
 //        for (_i = 0, _len = colors.length; _i < _len; _i++) {
 //        	color = colors[_i];
 //        	acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
 //        	acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
 //        	acousticbeat_line.draw();
 //        	i += 1;
 //        }
 //        return requestAnimationFrame(redraw);
 //      };
 //      requestAnimationFrame(redraw);
 //    }

 //  }).call(this);

$('a[href^="#"]').click(function(event) {
	var id = $(this).attr("href");
	var target = $(id).offset().top;
	if($(id).hasClass("hidden")){
		$(".active").addClass("hidden");
		$(id).removeClass("hidden");
		$(id).addClass("active");
	}

	
	// $('html, body').animate({scrollTop:target}, 500);
	// event.preventDefault();
});


});


