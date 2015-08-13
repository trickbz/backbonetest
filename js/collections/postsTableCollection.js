define([
	'backbone',
	'model/postModel'
], function(
	Backbone,
	PostModel
) {
	return Backbone.Collection.extend({
		model: PostModel,
		url: '/posts'
	});
});