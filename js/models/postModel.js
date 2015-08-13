define([
	'backbone'
], function (Backbone) {
	var Post = Backbone.Model.extend({
		idAttribute: 'id',
		urlRoot: '/posts'
	});
	return Post;
})

