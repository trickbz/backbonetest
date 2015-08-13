require.config({
	baseUrl: '.',
	paths: {
		// app locations
		'view': 'js/views',
		'model': 'js/models',
		'collection': 'js/collections',
		
		// frameworks
		'jquery': 'bower_components/jquery/dist/jquery',
		'text': 'bower_components/text/text',
		'underscore': 'bower_components/underscore/underscore',
		'backbone': 'bower_components/backbone/backbone'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
})

define([
	'collection/postsTableCollection',
	'underscore',
	'text!templates/postsTableTemplate.html',
	'view/postsTableView'
], function (
	Posts,
	_,
	PostsTableTemplate,
	PostsTableView
	) {
		var posts = new Posts();
		posts.fetch({
			success: function (items, response, options) {
				var template = _.template(PostsTableTemplate)({ posts: items.toJSON() });
				PostsTableView.render(template);
			}
		});
	});