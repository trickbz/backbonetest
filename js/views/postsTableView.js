define([
	'jquery',
	'backbone'
], function ($, Backbone) {

	var PostsTableView = Backbone.View.extend({
		el: $('#postsTable'),
		render: function (template) {
			this.$el.html(template);
		}
	});
	
	return PostsTableView;
});