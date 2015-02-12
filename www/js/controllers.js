angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ExpsCtrl', function($scope, Exps) {
  $scope.exps = Exps.all();
})

.controller('ExpDetailCtrl', function($scope, $stateParams, Exps) {
  $scope.exp = Exps.get($stateParams.expId);
})

.controller('FormsCtrl', function($scope, Forms) {
  $scope.forms = Forms.all();
})

.controller('FormDetailCtrl', function($scope, $stateParams, Forms) {
  $scope.form = Forms.get($stateParams.formId);
});
