// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require ember-simple-auth
//= require_self
//= require emb

// for more details see: http://emberjs.com/guides/application/
Emb = Ember.Application.create();

Emb.ApplicationAdapter = DS.RESTAdapter;
//= require_tree .

Ember.TextField = Ember.TextField.extend({
  focusOut: function() {
    var valid = this.get('value') ? valid = true : valid = false;
    this.$().next(".err").remove();

    if(!valid){
      this.$().addClass("invalid").after("<span class='err'>This field is required</span>");
    } else {
      this.$().removeClass("invalid");
    }
  }
});