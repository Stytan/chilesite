'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
  'angular-md5',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
App.controller("AppController", function($scope) {
	$scope.mes = "Message";
	$scope.goLogin = function(login, psw) {
		$scope.mes = "You logged in as ";
		if(login != "" && psw != "")
		{
			$scope.mes = "You logged in as ";//+login+md5.createHash(psw);
		}
	}
}
