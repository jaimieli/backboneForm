App.Models = App.Models || {};

(function() {
	'use strict';

	App.Models.Item = Backbone.Model.extend({
		url: 'json/item.json',

		parse: function(response, options){
			return response.result.item;
		}
	})
})();