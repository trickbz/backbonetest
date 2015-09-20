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
				var lastRecordsCount = 5;
				var topN = new Backbone.Collection(this.options.collection.last(lastRecordsCount));
				this.$el.html(this.template({ posts: topN.toJSON() }));				
				return this;
			}
			
		});
		
		return CountOfPostsView;
	});