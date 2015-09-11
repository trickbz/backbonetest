define([
	'jquery',
	'backbone',
	'view/latestPostsView',
	'view/postCounterView'
], function ($, Backbone, LatestPostsView, PostCounterView) {

	var LeftPaneView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		render: function () {
			new PostCounterView({ el: $("#postsCounter"), posts: this.options.posts }).render();
			new LatestPostsView({ el: $("#latestPosts"), posts: this.options.posts }).render();
			return this;
		}
	});
	
	return LeftPaneView;
});