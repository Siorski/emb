// for more details see: http://emberjs.com/guides/models/defining-models/

Emb.User = DS.Model.extend({
  name: DS.attr('string'),
  password: DS.attr('string'),
  token: DS.attr('string')
});
