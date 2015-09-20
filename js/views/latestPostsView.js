define([
	'backbone',
	'jquery',
	'text!templates/latestPostsTemplate.html',
	'collection/postsCollection',
], function (
	Backbone,
	$,
	LatestPostsTemplate,
	PostsCollection
	) {
		'use strict';
		
		var CountOfPostsView = Backbone.View.extend({
			template: _.template(LatestPostsTemplate),
			initialize: function (options) {
				this.options = options;
			},
			
			render: function () {
				var self = this;
				var collection = new PostsCollection();
				collection.fetch({
					success: function (collection, response) {
						var lastRecordsCount = 5;
						var topN = new Backbone.Collection(collection.last(lastRecordsCount));
						self.$el.html(self.template({ posts: topN.toJSON() }));		
					}
				});
				
				return this;
			}
			
		});
		
		return CountOfPostsView;
	});