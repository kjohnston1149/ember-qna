import Ember from 'ember';

export default Ember.Component.extend({
  savedQuestion: Ember.inject.service(),

  actions: {
    clearQuestions(question) {
      questions: [];
    }
  }
});
