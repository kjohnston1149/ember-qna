import Ember from 'ember';

export default Ember.Component.extend({
  savedQuestion: Ember.inject.service(),

  // answerCount: Ember.computed('question.answers', function() {
  //   var total = this.get('question').answers;
  //   console.log(total);
  //   return total[].length;
  //
  //
  // }),

  actions: {
    saveThisQuestion(question) {
      this.get('savedQuestion').add(question);
    }
  }

});
