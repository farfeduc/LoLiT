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
  	//console.log(newSection);
  });

  // API Management
  $http.get('/api/championpick/find').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    $scope.items = data;
  });

  $http.get('/api/championban/find').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    $scope.items = data;
  });

  $http.get('/api/totalchampions/find').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    $scope.items = data;
  });

  $http.get('/api/totalchampionban/find').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    $scope.items = data;
  });

  $http.get('/api/winpercentage/find').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = i;
    }
    $scope.items = data;
  });


  /* Charts data arrays*/
  // $scope.datapicks = [{
  //   key: "Champions Pick",
  //   values: []
  //   }];
  $scope.datapicks = [];


  //Getting data to display
  $http({method : 'GET',url : 'http://localhost:1337/api/championpick/find'})
    .success(function(data, status) {
        $scope.datapicks = data;
        //$scope.datapicks.values = data;
        //console.log($scope.datapicks);
    })
    .error(function(data, status) {
        console.log("Error getting api data array (championpick)");
    });

  /* Chart options */
  $scope.optionspicks = {
      chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.id;},
          y: function(d){return d.total;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
              margin: {
                  top: 5,
                  right: 35,
                  bottom: 5,
                  left: 0
              }
          }
      }
  };

}]);