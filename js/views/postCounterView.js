define([
	'underscore',
	'jquery',
	'backbone',
	'text!templates/postsCounterTemplate.html',
], function (_, $, Backbone, PostsCounterTemplate) {

	var PostCounterView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		template: _.template(PostsCounterTemplate),
		render: function () {
			this.$el.html(this.template({ posts: this.options.posts }));
			return this;
		}
	});
	
	return PostCounterView;
});