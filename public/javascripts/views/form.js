App.Views = App.Views || {};

(function(){
	'use strict';
	var enums;
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
				enums = data.itemEnums;
				console.log('successfully retrieved enums.json -- enums: ', enums);
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
					materialsList: enums.material,
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
					shapesArr: enums.measurement.shape
				} 
			})
			measurementsView.render();
			this.$el.append(measurementsView.$el)
		},
		renderConditionView: function(){
			var conditionView = new App.Views.ConditionView({
				attributes: {
					condition: this.model.attributes.condition,
					options: enums.condition.description
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
			var updatedObj;
			if ($('input[name=shape]:checked', '#measuredItemDiv').val() === 'Rectangular') {
				updatedObj = {
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
					  	"height": $('#height').val()
					},
					"condition": {
					  	"description": $('input[name=condition]:checked').val()
					}
				};
			} else if ($('input[name=shape]:checked', '#measuredItemDiv').val() === 'Circular'){
				updatedObj = {
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
					  	"diameter": $('#diameter').val()
					},
					"condition": {
					  	"description": $('input[name=condition]:checked').val()
					}
				};
			};
			this.model.set(updatedObj)
			console.log('this.model JSON: ', JSON.stringify(this.model));
		}
	})
})()



