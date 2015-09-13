define([
	'backbone',
	'moment'
], function (
	Backbone,
	Moment
	) {
		var Post = Backbone.Model.extend({
			idAttribute: 'id',
			urlRoot: '/api/posts',
			parse: function (data) {
				data.createdOn = Moment(data.createdOn).format("MM/DD/YYYY HH:mm");
				return data;
			}
		});
		return Post;
	});