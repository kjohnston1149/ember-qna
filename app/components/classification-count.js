import Ember from 'ember';

export default Ember.Component.extend({

  generalQuestion: Ember.computed(function(question) {

    var general = 0;
    this.get('questions').forEach(function(question) {
      // debugger;
      var gen = question.get('data').classification;
      if (gen === "general question") {
        general++;
      }

    });
    return general;

  }),
  vertabrateQuestion: Ember.computed(function(question) {
      var verts = this.get('question')
      var vertabrates = [];
      if (question.classification === "marine vertabrates") {
        this.get('question').objectPush(vertabrates);
      };
      return vertabrates.length;

  }),

  invertabrateQuestion: Ember.computed(function(question) {
      var inverts = this.get('question')
      var invertabrates = [];
      if (question.classification === "marine invertabrates") {
        this.get('question').objectPush(vertabrates);
      };
      return invertabrates.length;

  }),

});
