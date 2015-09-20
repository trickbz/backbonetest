define([
	'backbone',
	'jquery',
	'text!templates/editPostTemplate.html',
	'model/postModel',
	'stickit'
], function (
	Backbone,
	$,
	EditPostTemplate,
	PostModel,
	Stickit
	) {
		'use strict';

		var ViewPostView = Backbone.View.extend({
			template: _.template(EditPostTemplate),
			initialize: function (options) {
				this.options = options;
				this.model = new PostModel();
				if (options && options.id) {
					this.model.set("id", options.id);
				}
			},

			render: function () {
				var self = this;
				this.model.fetch({
					success: function (data, response) {
						self.$el.html(self.template({ post: self.model.toJSON() }));
						self.stickit();
					}
				});
				return this;
			},

			events: {
				"submit #postEditForm": "submitPost",
			},

			bindings: {
				"#title": "title",
				"#body": "body"
			},

			submitPost: function (event) {
				event.preventDefault();
				event.currentTarget.checkValidity();
				if (this.model.isValid()) {
					this.model.save();
					Backbone.history.navigate('#', true);
				} else {
					this.showErrors(this.model.validationError);
				}
			},
			
			showErrors: function (errors) {
				_.each(errors, function (error) {
					console.log(error.field)
				});
			}


		});

		return ViewPostView;
	});