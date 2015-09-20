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
		
		var PostsListView = Backbone.View.extend({
			initialize: function (attrs) {
				this.attrs = attrs;
			},
			template: _.template(PostsListTemplate),
			render: function () {
				var self = this;
				// var collection = new PostsCollection();
				// debugger;
				// this.attrs.collection.on('add remove', function() {
				// 	self.trigger('postsCollectionChanged', self.attrs.collection.length);
				// });
				this.attrs.collection.fetch({
					success: function (collection, response) {
						self.$el.html(self.template({ posts: collection.toJSON() }));
					}
				});
				return this;
			}
		});
		
		return PostsListView;

	});