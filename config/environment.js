/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-qna',
    environment: environment,
    rootURL: '/',
    locationclassification: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
      },

      firebase: {
        apiKey: "AIzaSyCJUIStPjm-gDw6LB8bHWB8NnV6EuDzxVM",
        authDomain: "ember-qna-a9168.firebaseapp.com",
        databaseURL: "https://ember-qna-a9168.firebaseio.com",
        storageBucket: "ember-qna-a9168.appspot.com",
      },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationclassification = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
