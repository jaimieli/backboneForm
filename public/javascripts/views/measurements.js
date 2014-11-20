App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.MeasurementsView = Backbone.View.extend({
		template:_.template($("#measurementsTemplate").html()),
		events: {
			'click #in': 'inUnit',
			'click #cm': 'cmUnit',
			'click #Rectangular': 'rectangleDimensions',
			'click #Circular': 'circleDimensions'
		},
		inUnit: function(){
			$('.unit > p').text('in.')
		},
		cmUnit: function(){
			$('.unit > p').text('cm.')
		},
		rectangleDimensions: function(){
			$('.rectDim').prop('disabled', false)
			$('.circDim').prop('disabled', true)
		},
		circleDimensions: function(){
			$('.rectDim').prop('disabled', true)
			$('.circDim').prop('disabled', false)
		},
		render: function() {
			this.$el.html(this.template(this.attributes));
			return this;
		}
	})
})()

