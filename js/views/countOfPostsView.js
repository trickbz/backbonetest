define([
	'backbone',
	'jquery',
	'text!templates/countOfPostsTemplate.html',
	'collection/postsCollection',
], function (
	Backbone,
	$,
	CountOfPostsTemplate,
	PostsCollection
	) {
		'use strict';
		
		var CountOfPostsView = Backbone.View.extend({
			template: _.template(CountOfPostsTemplate),
			initialize: function (options) {
				this.options = options;
				
			},
			
			render: function () {
				var self = this;
				var collection = new PostsCollection();
				collection.fetch({
					success: function (collection, response) {
						self.$el.html(self.template({ countOfPosts: collection.length }));		
					}
				});
				
				return this;
			}
			
		});
		
		return CountOfPostsView;
	});