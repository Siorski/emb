// For more information see: http://emberjs.com/guides/routing/

Emb.UsersRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('story');
	}
});
