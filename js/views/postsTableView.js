define([
	'jquery',
	'backbone'
], function ($, Backbone) {

	var PostsTableView = Backbone.View.extend({
		el: $('#postsTable')
	});
	
	return new PostsTableView();
});