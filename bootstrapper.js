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
	'underscore',
	'view/indexView',
	'jquery',
	'collection/postsTableCollection'
], function (
	_,
	IndexView,
	$,
	PostsTableCollection
	) {
		var posts = new PostsTableCollection();
		posts.fetch({
			success: function (collection, response) {
				new IndexView({ el: $("body"), posts: collection.models }).render();
			}
		});
	});