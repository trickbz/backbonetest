define([
	'underscore',
	'jquery',
	'backbone',
	'text!templates/postListItemTemplate.html',
], function (_, $, Backbone, PostListItemTemplate) {

	var PostListItemView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		template: _.template(PostListItemTemplate),
		render: function () {
			this.$el.html(this.template({ posts: this.options.post }));
			return this;
		}
	});
	
	return PostListItemView;
});