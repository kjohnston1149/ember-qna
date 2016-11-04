import Ember from 'ember';

export function classificationIcon(params/*, hash*/) {
  var question = params[0];
  if(question === "general question"){
    return Ember.String.htmlSafe('<img src="./../images/beach.png" alt="general-question-icon"/>');
  } else if(question === "marine vertabrates"){
    return Ember.String.htmlSafe('<img src="./../images/whale-zone.png" alt="vertabrates-question-icon"/>');
  } else if(question === "marine invertabrates"){
    return Ember.String.htmlSafe('<img src="./../images/starfish.png" alt="invertabrates-question-icon"/>');
  }
}


export default Ember.Helper.helper(classificationIcon);
