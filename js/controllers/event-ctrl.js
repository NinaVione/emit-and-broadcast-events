angular.module('app').controller('EventCtrl', function ($scope, $element) {

  $scope.emitEvent = function () {
    $scope.$emit('eventEmitedName');
  };

  $scope.broadcastEvent = function () {
    $scope.$broadcast('eventBroadcastedName');
  };

  $scope.$on('eventEmitedName', function(event) {
    console.log($element);
    $element.removeClass('red');
    $element.addClass('green');
  });

  $scope.$on('eventBroadcastedName', function(event) {
    console.log($element);
    $element.removeClass('green');
    $element.addClass('red');
  });
});