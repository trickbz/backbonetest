define([
	'jquery',
	'backbone',
	'text!templates/PostsTableTemplate.html',
	'text!templates/postListItemTemplate.html',
], function ($, Backbone, PostsTableTemplate, PostListItemTemplate) {

	var PostsTableView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		itemTemplateFn: _.template(PostListItemTemplate),
		template: _.template(PostsTableTemplate),
		render: function () {
			this.$el.html(this.template({ 
				posts: this.options.posts, 
				itemTemplateFn: this.itemTemplateFn 
			}));
		}
	});
	
	return PostsTableView;
});