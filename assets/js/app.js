'use strict';

var LoLiT = angular.module('LoLiT', ['ngRoute', 'ui.bootstrap', 'nvd3']);

LoLiT.controller('LoLiTCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

  $scope.sections = [
  	{id : 1, label: "Section 1"},
  	{id : 2, label: "Section2"}
  ];

  $scope.sectionSelectionnee = null;

  $scope.selectionnerSection = function(section)
  {
  	$scope.sectionSelectionnee = section;
  };

  $scope.$watch(function() {
  	return $scope.sectionSelectionnee;
  }, function(newSection){
  	console.log(newSection);
  });

  /* Chart options test */
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

  /* Chart data test */
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
    }];

    $http.get('/championpick/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    $http.get('/championban/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    $http.get('/totalchampions/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    $http.get('/totalchampionban/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    $http.get('/winpercentage/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

}]);