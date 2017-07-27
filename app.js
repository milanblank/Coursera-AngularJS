(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', MyFirstController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  MyFirstController.$inject = ['$scope', '$filter', 'lovesFilter'];
  function MyFirstController($scope, $filter, lovesFilter) {
    $scope.name = "Milan";
    $scope.sayHello = function () {
      return "Hello Coursera";
    };

    var upper = $filter('uppercase')($scope.name);
    $scope.nameUpper = upper;

    $scope.cookie = .45;

    $scope.sayLoveMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      msg = lovesFilter(msg);
      return msg;
    }


  };

  function LovesFilter(){
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    }
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();
