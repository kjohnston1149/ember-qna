import Ember from 'ember';

export default Ember.Component.extend({
  savedQuestion: Ember.inject.service(),

  actions: {
    saveThisQuestion(question) {
      this.get('savedQuestion').add(question);
    }
  }

});
