App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.SubmitButtonView = Backbone.View.extend({
		template:_.template($("#submitTemplate").html()),
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()