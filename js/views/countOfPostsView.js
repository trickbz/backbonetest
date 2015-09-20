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
				self.$el.html(self.template({ countOfPosts: self.options.collection.length }));
				return this;
			}
		});
		
		return CountOfPostsView;
	});