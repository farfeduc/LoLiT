'use strict';

var LoLiT = angular.module('LoLiT', ['ngRoute', 'ui.bootstrap', 'nvd3']);
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

  /* Chart options */
  $scope.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};

  /* Chart data */
  $scope.data = [{
    key: "Cumulative Return",
    values: [
        { "label" : "A" , "value" : -29.765957771107 },
        { "label" : "B" , "value" : 0 },
        { "label" : "C" , "value" : 32.807804682612 },
        { "label" : "D" , "value" : 196.45946739256 },
        { "label" : "E" , "value" : 0.19434030906893 },
        { "label" : "F" , "value" : -98.079782601442 },
        { "label" : "G" , "value" : -13.925743130903 },
        { "label" : "H" , "value" : -5.1387322875705 }
        ]
    }]

var dataController = Sails.controller.dataController;

}]);