'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone','$route',
  function ($scope, Phone, $route) {
      $scope.route = $route;
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$route','$routeParams', 'Phone',
  function ($scope, $route, $routeParams, Phone) {
      $scope.route = $route;
      $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
          console.log($scope.phone);
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
