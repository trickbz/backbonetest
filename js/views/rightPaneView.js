define([
	'jquery',
	'backbone',
	'view/postsTableView',
], function ($, Backbone, PostListItemView) {

	var RightPaneView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		render: function () {
			new PostListItemView({ el: $("#postsTable"), posts: this.options.posts }).render();
			return this;
		}
	});
	
	return RightPaneView;
});