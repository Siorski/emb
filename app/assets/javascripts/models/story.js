// for more details see: http://emberjs.com/guides/models/defining-models/

Emb.Story = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.attr('string'),
  published: DS.attr('string')
});
