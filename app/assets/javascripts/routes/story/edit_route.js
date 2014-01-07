// For more information see: http://emberjs.com/guides/routing/

Emb.StoryEditRoute = Ember.Route.extend({
	model: function () {
		return this.modelFor('story');
	},

	actions: {
		update: function(story) {
			story.save().then(function(){
				route.transitionTo('stories');
			});
		}
	}
});
