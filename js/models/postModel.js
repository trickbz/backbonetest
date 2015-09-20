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
			},
			validate: function (attrs) {
				var errors = [];
				if (attrs.title.length <= 0) {
					errors.push({ field: "title", message: "Title cannot be empty" });
				}
				
				if (attrs.title.length > 10) {
					errors.push({ field: "title", message: "Title should be < 10 chars" });
				}

				if (attrs.body.length > 200 && attrs.body.length < 50000) {
					errors.push({ field: "body", message: "Body length should be betwee 200 and 5000 characters" });
				}

				if (errors.length > 0) {
					return errors;
				}
			}
		});
		return Post;
	});