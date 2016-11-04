import Ember from 'ember';

export default Ember.Component.extend({
  generalQuestion: Ember.computed(function(question) {
    for(var i = 0; i <= question.length; i++) {
    var gen = this.get('question.classification');
    var general = [];
    if (gen === "general question") {
      gen.objectPush(general);
    };
    return general.length;
  }
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
