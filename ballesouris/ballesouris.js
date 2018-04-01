		var sprite;

		function init(){
			sprite = document.getElementById("sprite");
			document.onmousemove = mouseListener;
		}

		function mouseListener(e){
			if(!e){
				e = window.event;
			}

			height = parseInt(sprite.style.height);
			width = parseInt(sprite.style.width);

			x = e.pageX - (width/2);
			y = e.pageY - (height/2);

			sprite.style.left = x + "px";
			sprite.style.top = y + "px";
		}