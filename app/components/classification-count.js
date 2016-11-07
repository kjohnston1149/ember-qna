import Ember from 'ember';

export default Ember.Component.extend({

  generalQuestion: Ember.computed(function() {

    var general = 0;
    this.get('questions').forEach(function(question) {
      var gen = question.get('data').classification;
      if (gen === "general question") {
        general++;
      }

    });
    return general;

  }),
  vertabrateQuestion: Ember.computed(function() {
    var vertabrates = 0;
    this.get('questions').forEach(function(question) {
      var vert = question.get('data').classification;
      if (vert === "marine vertabrates") {
        vertabrates++;
      }

    });
    return vertabrates;
  }),

  invertabrateQuestion: Ember.computed(function() {
    var invertabrates = 0;
    this.get('questions').forEach(function(question) {
      var invert = question.get('data').classification;
      if (invert === "marine invertabrates") {
        invertabrates++;
      }

    });
    return invertabrates;
  }),

});
