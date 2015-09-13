define([
	'backbone',
	'view/postsListView',
	'view/viewPostView',
	'view/editPostView'
], function (
	Backbone,
	PostsListView,
	ViewPostView,
	EditPostView
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
			}
		});

		Router.prototype.initialize = function () {

		}


		return new Router();

	});