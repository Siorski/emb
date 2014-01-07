// For more information see: http://emberjs.com/guides/routing/

Emb.Router.map(function() {
	this.resource('about');
	this.resource('users', function(){
		this.route('new');
	});
	this.route('login');
  this.resource('stories', function() {
 		this.resource('story', {path: ':story_id'}, function() {
 			this.route('edit');
 		});
 		this.route('new');
 	});
});

Emb.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin);
/*
Emb.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {
	actions: {
		loginFailed: function(error) {
			this.controllerFor('application').set('loginErrorMessage', error.message);
		}
  }
});
*/