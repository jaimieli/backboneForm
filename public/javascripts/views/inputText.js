App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.InputTextView = Backbone.View.extend({
		template:_.template($("#inputTextTemplate").html()),
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()