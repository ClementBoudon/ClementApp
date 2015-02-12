angular.module('starter.services', [])

.factory('Exps', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var exps = [{
    id: 0,
    name: 'Interact-IV.com Lux',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Absolu Telecom',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Absolu Network France',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Starting Prod',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Connect Games',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
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
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'DUT Genie logiciel',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
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
