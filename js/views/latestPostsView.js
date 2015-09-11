define([
	'underscore',
	'jquery',
	'backbone',
	'text!templates/latestPostsTemplate.html',
], function (_, $, Backbone, LatestPostsTemplate) {

	var LatestPostsView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		template: _.template(LatestPostsTemplate),
		render: function () {
			this.$el.html(this.template({ posts: this.options.posts }));
			return this;
		}
	});
	
	return LatestPostsView;
});