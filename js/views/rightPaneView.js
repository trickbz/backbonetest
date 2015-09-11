define([
	'jquery',
	'backbone',
	'view/postsTableView',
], function ($, Backbone, PostsTableView) {

	var RightPaneView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		render: function () {
			new PostsTableView({ el: $("#postsTable"), posts: this.options.posts }).render();
			return this;
		}
	});
	
	return RightPaneView;
});