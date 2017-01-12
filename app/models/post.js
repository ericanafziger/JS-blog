import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  place: DS.attr(),
  date: DS.attr(),
  type: DS.attr(),
  cover: DS.attr(),
  text: DS.attr(),
  images: DS.attr(),
  comments: DS.attr()
});
