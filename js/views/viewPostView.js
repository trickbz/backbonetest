define([
	'backbone',
	'jquery',
	'text!templates/postViewTemplate.html',
	'model/postModel'
], function (
	Backbone,
	$,
	PostViewTemplate,
	PostModel
	) {
		'use strict';
		
		var ViewPostView = Backbone.View.extend({
			template: _.template(PostViewTemplate),
			initialize: function (options) {
				this.options = options;
				this.model = new PostModel({id: options.id});
			},
			
			render: function () {
				var self = this;
				this.model.fetch({
					success: function (data, response) {
						self.$el.html(self.template({ post: self.model.toJSON() }));
					}
				});
				return this;				
			},
			
			events: {
				"click #btnDeletePost": "deletePost"
			},
			
			deletePost: function () {
				this.model.destroy();
				Backbone.history.navigate('#', true);
			}
		});
		
		return ViewPostView;
	});