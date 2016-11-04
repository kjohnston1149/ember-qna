import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
});
