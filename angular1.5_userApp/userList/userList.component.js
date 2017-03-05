
angular.module('userListModule').component('userList', {
  templateUrl: 'userList/userList-template.html',
  bindings: {
    user: '<',
    onDelete: '&',
    onUpdate: '&'
  },
  controller:function() {
  var ctrl = this;
console.log(ctrl.user);
  ctrl.delete = function() {
    ctrl.onDelete({user: ctrl.user});
  };

  ctrl.update = function(key, value) {
    ctrl.onUpdate({user: ctrl.user, key: key, value: value});
  };
}
});
