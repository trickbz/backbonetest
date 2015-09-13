define([
	'backbone',
	'model/postModel'
], function(
	Backbone,
	PostModel
) {
	return Backbone.Collection.extend({
		initialize: function () {
		},
		model: PostModel,
		url: '/api/posts'
	});
});