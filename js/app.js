'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl',
        breadcrumbs: [home]
      }).
        when('/phones/specification', {
            templateUrl: 'partials/specification.html',
            controller: 'PhoneDetailCtrl',
            breadcrumbs: [home,specification]
        }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        breadcrumbs: [home, phone]
      }).
      otherwise({
          redirectTo: '/phones',
          breadcrumbs: [home]
      });
  }]);
const home = { href: '#/phones', label: 'home' };
const specification = { href: '#/phones/specification', label: 'specification' };
const phone = { href: 'javascript:void(0);', label: 'phone' };

phonecatApp.controller('BreadcrumbsController', function ($scope, $route) {
    $scope.route = $route;
    console.log($scope.route);
});
