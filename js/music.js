var tools = {
	addElement: function (name, attr = null, handler = null) {
		try {
			if ((name != null) && (name != "")) {
				var tmp = document.createElement(name);
				for (var key in attr) {
					if (attr.hasOwnProperty(key) && key != "innerHTML") {
         				tmp.setAttribute(key, attr[key]);
    				} else if (key == "innerHTML") {
    					tmp.innerHTML = attr[key];
    				}
				}
				for (var key in handler) {
					if (handler.hasOwnProperty(key)) {
						tmp.addEventListener(key, handler[key]);
					}
				}
				return tmp;
			} else {
				throw new SyntaxError("Error create Element! Variables 'name' is null or not valid!");
			}
		} catch (e) {
			throw e;
		}
	},
}
function player (config) {
	tmp = Object.create(null);
	tmp.audio = new Audio();
	if (config.buttons != null) {
		tmp.controls = [];
		for (var key in config.buttons) {
			if ( config.buttons.hasOwnProperty(key) ) {
				tmp.controls.push( tools.addElement(config.buttons[key][0], config.buttons[key][1], config.buttons[key][2]) );
				document.querySelector("body").appendChild(tmp.controls[key]);
			}
		}
	}
	return tmp;
}

function playlist () {
	tmp = Object.create(null);
	return tmp;
}

document.addEventListener("DOMContentLoaded", function () {
	var music = Object.create(null);
	try {
		var config = {
			"buttons": [[
				"i", {"class": "fa fa-2x fa-backward controls", "id": "backwardButton"}, {"click": function () {alert("backward");}}
			],[	"i", {"class": "fa fa-2x fa-play controls", "id": "playButton"}, {"click": function () {alert("play");}}
			],[	"i", {"class": "fa fa-2x fa-pause controls", "id": "pauseButton"}, {"click": function () {alert("pause");}}
			],[	"i", {"class": "fa fa-2x fa-forward controls", "id": "forwardButton"}, {"click": function () {alert("forward");}}
			]]
		}
		var t = config;
		music.player = player();
		console.log(t);
		music.playlist = playlist(t);
	} catch (e) {
		alert(e.message);
	} finally {
		console.log(music.player);
	}
});