App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.MaterialsView = Backbone.View.extend({
		template:_.template($("#materialsTemplate").html()),
		tagName: 'div',
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()