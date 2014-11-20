App.Routers = App.Routers || {};

(function(){
	'use strict';

	App.Routers.Router = Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function(){
			var self = this;
			var item = new App.Models.Item();
			var formView = new App.Views.FormView({model: item});
			$('body').append(formView.$el);
			item.fetch({
				success: function(result){
					console.log('fetched item from item.json -- result: ', result)
					var itemsList = new App.Collections.ItemsList( result.toJSON() );
					self.collection = itemsList;
					console.log('collection: ', self.collection)
				},
				error: function(error){
					console.log('unable to get item.json -- error: ', error)
				}
			})
		}
	})
})()