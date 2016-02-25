'use strict';

var LoLiT = angular.module('LoLiT', ['ngRoute', 'ui.bootstrap']);
// LoLiT.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.when('/', {
//       templateUrl: '/templates/accueil.html',
//       controller: 'LoLiTCtrl'
//     }).otherwise({
//       redirectTo: '/',
//       caseInsensitiveMatch: true
//     })
//   }]);

LoLiT.controller('LoLiTCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  //This is where we should place the controller functions.
  $scope.sections = [
  	{id : 1, label: "Section 1"},
  	{id : 2, label: "Section2"}
  ];

  $scope.sectionSelectionnee = null;
  $scope.selectionnerSection = function(section)
  {
  	$scope.sectionSelectionnee = section;
  }

  $scope.$watch(function() {
  	return $scope.sectionSelectionnee;
  }, function(newSection){
  	console.log(newSection);
  });

var dataController = Sails.controller.dataController;

}]);