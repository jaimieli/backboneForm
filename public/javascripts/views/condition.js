App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.ConditionView = Backbone.View.extend({
		template:_.template($("#conditionTemplate").html()),
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
