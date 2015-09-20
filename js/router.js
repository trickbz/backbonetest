define([
	'backbone',
	'view/postsListView',
	'view/viewPostView',
	'view/editPostView',
	'view/countOfPostsView',
	'view/latestPostsView',
	'collection/postsCollection'
], function (
	Backbone,
	PostsListView,
	ViewPostView,
	EditPostView,
	CountOfPostsView,
	LatestPostsView,
	PostsCollection
	) {
		'use strict';
		var Router = Backbone.Router.extend({
			initialize: function () {
				// move all of this to separate module/object?
				this.postsCollection = new PostsCollection();
				this.countOfPostsView = new CountOfPostsView({
					collection: this.postsCollection
				});
				this.latestPostsView = new LatestPostsView({
					collection: this.postsCollection
				});
				this.postsListView = new PostsListView({
					collection: this.postsCollection
				});
				this.viewPostView = new ViewPostView({
					collection: this.postsCollection
				});
				this.listenTo(this.postsCollection, 'add remove', this.renderWidgets, this);
			},
			routes: {
				"": "index",
				":id/view": "viewPost",
				":id/edit": "editPost",
				"new": "newPost"
			},
			index: function () {
				$(".target").html(this.postsListView.render().$el);
			},
			viewPost: function (postId) {
				$(".target").html(new ViewPostView({ id: postId }).render().$el);
			},
			editPost: function (postId) {
				$(".target").html(new EditPostView({ id: postId }).render().$el);
			},
			newPost: function () {
				$(".target").html(new EditPostView().render().$el);
			},
			renderWidgets: function () {
				$("#countOfPosts").html(this.countOfPostsView.render().$el);
				$("#latestPosts").html(this.latestPostsView.render().$el);
			}
		});

		return new Router();

	});