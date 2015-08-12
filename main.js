var Color = Backbone.Model.extend({
	idAttribute: 'id',
	urlRoot: '/colors'
});

var color = new Color({name: 'orange'});
color.save();