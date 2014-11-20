window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		'use strict';
		new App.Routers.Router();
		Backbone.history.start({pushState: true});
	}
}

$(document).ready(function(){
	'use strict';
	App.init();
})