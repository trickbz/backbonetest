require.config({
	baseUrl: '.',
	paths: {
		// app locations
		'view': 'js/views',
		'model': 'js/models',
		'collection': 'js/collections',
		'router': 'js/router',
		
		// frameworks
		'jquery': 'bower_components/jquery/dist/jquery',
		'text': 'bower_components/text/text',
		'underscore': 'bower_components/underscore/underscore',
		'backbone': 'bower_components/backbone/backbone',
		'moment': 'bower_components/moment/min/moment.min',
		'stickit': 'bower_components/backbone.stickit/backbone.stickit'
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
});

define([
	'js/app'
], function (
	App
	) {
		'use strict';
		return App.initialize();
	});