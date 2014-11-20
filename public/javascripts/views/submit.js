App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.SubmitButtonView = Backbone.View.extend({
		template:_.template($("#submitTemplate").html()),
		tagName: 'div',
		id: '',
		className: '',
		events: {

		},
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()