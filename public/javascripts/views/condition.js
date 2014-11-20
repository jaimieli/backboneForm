App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.ConditionView = Backbone.View.extend({
		template:_.template($("#conditionTemplate").html()),
		className: 'group',
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()
