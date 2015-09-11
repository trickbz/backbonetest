define([
	'jquery',
	'backbone',
	'view/leftPaneView',
	'view/rightPaneView'
], function ($, Backbone, LeftPaneView, RightPaneView) {

	var IndexView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;	
		},
		render: function () {
			new LeftPaneView({ el: $("#leftPane"), posts: this.options.posts }).render();
			new RightPaneView({ el: $("#rightPane"), posts: this.options.posts }).render();
			return this;
		}
	});

	return IndexView;
});