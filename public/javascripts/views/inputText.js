App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.InputTextView = Backbone.View.extend({
		template:_.template($("#inputTextTemplate").html()),
		tagName: 'div',
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()