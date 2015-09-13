define([
	'backbone',
	'jquery',
	'text!templates/postsListTemplate.html',
	'collection/postsCollection'
], function (
	Backbone,
	$,
	PostsListTemplate,
	PostsCollection
	) {
		'use strict';
		
		var PostsListVIew = Backbone.View.extend({
			template: _.template(PostsListTemplate),
			render: function () {
				var self = this;
				var collection = new PostsCollection();
				collection.fetch({
					success: function (collection, response) {
						self.$el.html(self.template({ posts: collection.models }));
					}
				});
				return this;
			}
		});
		
		return PostsListVIew;

	});