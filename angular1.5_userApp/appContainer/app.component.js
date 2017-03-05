angular.module('userApp').component('appContainer', {
  templateUrl: 'appContainer/app-template.html',
  controller: function($scope, $element, $attrs,$http) {
    var ctrl = this;
    $http.get("../data.json")
    .then(function(response) {
      console.log(response);
       ctrl.list=response.data;
    });

  ctrl.updateUser = function(user, prop, value) {
    user[prop] = value;
  };

  ctrl.deleteUser = function(user) {
    var idx = ctrl.list.indexOf(user);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}});

