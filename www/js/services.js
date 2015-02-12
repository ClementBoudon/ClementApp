angular.module('starter.services', [])

.factory('Exps', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var exps = [{
    id: 0,
    name: 'Interact-IV.com Lux',
    lastText: 'Depuis 2013',
    face: 'img/logos/interactiv-logo.jpg'
  }, {
    id: 1,
    name: 'Absolu Telecom',
    lastText: '2011 - 2013',
    face: 'img/logos/absolu-telecom-logo.png'
  }, {
    id: 2,
    name: 'Absolu Network France',
    lastText: '2010 - 2011',
    face: 'img/logos/anf-logo.png'
  }, {
    id: 3,
    name: 'Starting Prod',
    lastText: '2007 - 2010',
    face: 'img/logos/starting-prod-logo.jpg'
  }];

  return {
    all: function() {
      return exps;
    },
    get: function(expId) {
      return exps[expId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Forms', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var forms = [{
    id: 0,
    name: 'Licence METINET',
    notes: '2006-2007',
    face: 'img/logos/metinet-logo.gif'
  }, {
    id: 1,
    name: 'DUT Genie logiciel',
    notes: '2004-2006',
    face: 'img/logos/iut-logo.jpg'
  }];


  return {
    all: function() {
      return forms;
    },
    get: function(formId) {
      // Simple index lookup
      return forms[formId];
    }
  }
});
