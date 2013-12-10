// For more information see: http://emberjs.com/guides/routing/

Emb.StoriesNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('story');
	},

	actions: {
		create: function(story){
			var route = this;
			var actualDate = new Date();
 			var formatedDate = actualDate.toLocaleDateString();
			story.set('published', formatedDate);
			story.save().then(function(){
				route.transitionTo('stories');
			});
		}
	}
});
