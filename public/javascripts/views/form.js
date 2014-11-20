App.Views = App.Views || {};

(function(){
	'use strict';
	App.Views.FormView = Backbone.View.extend({
		template:_.template($("#formTemplate").html()),
		tagName: 'form',
		events: {
			'submit': 'submit'
		},
		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			this.getEnums();
		},
		getEnums: function() {
			var self = this;
			$.ajax({
				url: '/json/enums.json'
			}).done(function(data) {
				App.Enums = data.itemEnums;
				console.log('successfully retrieved enums.json -- App.Enums: ', App.Enums);
			}).error(function(error) {
				console.log('cannot retrieve enums.json -- Error: ', error);
			});
		},
		renderInputTextView: function(){
			var inputTextView = new App.Views.InputTextView({ 
				attributes: {
					title: this.model.attributes.title,
					description: this.model.attributes.description,
					internalNotes: this.model.attributes.dealerInternalNotes
				}
			});
			inputTextView.render();
			this.$el.append(inputTextView.$el);
		},
		renderMaterialsView: function(){
			var materialsView = new App.Views.MaterialsView({ 
				attributes: {
					materialsList: App.Enums.material,
					selectedMaterial: this.model.attributes.material
				} 
			});
			materialsView.render();
			this.$el.append(materialsView.$el);
		},
		renderMeasurementsView: function(){
			var measurementsView = new App.Views.MeasurementsView({ 
				attributes: {
					measurement: this.model.attributes.measurement,
					shapesArr: App.Enums.measurement.shape
				} 
			})
			measurementsView.render();
			this.$el.append(measurementsView.$el)
		},
		renderConditionView: function(){
			var conditionView = new App.Views.ConditionView({
				attributes: {
					condition: this.model.attributes.condition,
					options: App.Enums.condition.description
				}
			});
			conditionView.render();
			this.$el.append(conditionView.$el);
		},
		renderSubmitButtonView: function(){
			var submitButtonView = new App.Views.SubmitButtonView({})
			submitButtonView.render();
			this.$el.append(submitButtonView.$el);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.renderInputTextView();
			this.renderMaterialsView();
			this.renderMeasurementsView();
			this.renderConditionView();	
			this.renderSubmitButtonView();
		},
		submit: function(event){
			event.preventDefault();
			console.log('submitting form');
			var updatedObj = {
				"title": $('#title').val(),
				"description": $('#description').val(),
				"dealerInternalNotes": $('#internal-notes').val(),
				"material": {
					"description": $('#materials option:selected').val(),
				  	"restricted": $('#restricted:checked').val() || 'N'
				},
				"measurement": {
				  	"unit": $('input[name=measurementUnit]:checked', '#measurementUnitDiv').val(),
				  	"shape": $('input[name=shape]:checked', '#measuredItemDiv').val(),
				  	"length": $('#length').val(),
				  	"depth": $('#depth').val(),
				  	"height": $('#height').val(),
				  	"diameter": $('#diameter').val()
				},
				"condition": {
				  	"description": $('input[name=condition]:checked').val()
				}
			};
			this.model.set(updatedObj)
			console.log('this.model.attributes: ', this.model.attributes)
		}
	})
})()



