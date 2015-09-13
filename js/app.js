define([
	'backbone',
	'js/router'
], function (
	Backbone,
	Router
	) {
		'use strict';

		function App() { }

		App.prototype.initialize = function () {
			Router.initialize();
			return Backbone.history.start();
		}

		return new App();
	});