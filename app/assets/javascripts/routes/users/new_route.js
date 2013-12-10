// For more information see: http://emberjs.com/guides/routing/

Emb.UsersNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('user');
	},
	
	actions: {
		create: function(user){
			var route = this;
			user.save().then(function(){
				route.transitionTo('stories');
			});
		}
	}	
});
