define([
	'backbone',
	'view/postsListView',
	'view/viewPostView',
	'view/editPostView',
	'view/countOfPostsView',
	'view/latestPostsView'
], function (
	Backbone,
	PostsListView,
	ViewPostView,
	EditPostView,
	CountOfPostsView,
	LatestPostsView
	) {
		'use strict';
		var Router = Backbone.Router.extend({
			routes: {
				"": "index",
				":id/view": "viewPost",
				":id/edit": "editPost",
				"new": "newPost"
			},
			index: function () {
				$(".target").html(new PostsListView().render().$el);
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
			change: function () {
				$("#countOfPosts").html(new CountOfPostsView().render().$el);
				$("#latestPosts").html(new LatestPostsView().render().$el);
			}
		});

		Router.prototype.initialize = function () {
			this.listenTo(this, "all", this.change);
		}

		return new Router();

	});