import Ember from 'ember';

export default Ember.Component.extend({
  savedQuestion: Ember.inject.service(),

  secondaryDisplay: Ember.computed('question.classification','question.author', function() {
    return 'Posted in ' + this.get('question.classification') + ' by ' + this.get('question.author');


  }),

  actions: {
    saveThisQuestion(question) {
      this.get('savedQuestion').add(question);
    }
  }

});
