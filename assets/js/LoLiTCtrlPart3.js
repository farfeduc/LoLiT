app.controller('LoLiTCtrlPart3', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  $rootScope.sectionSelectionnee = 3;

  $scope.selectionnerSection = function(section)
  {
    $rootScope.sectionSelectionnee = section;
  };

  $scope.$watch(function() {
    return $rootScope.sectionSelectionnee;
  }, function(newSection){
    //console.log(newSection);
  });

  $scope.barchart = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                width: 700,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 150
                },
                x: function(d){return d.id;},
                y: function(d){return d.total + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Il y a '
                },
                yAxis: {
                    axisLabel: 'Nombre de parties jouées',
                    axisLabelDistance: 30
                }
            }
        };


        $scope.barchart2 = {
            chart: {
                type: 'discreteBarChart',
                height: 550,
                width: 1100,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 150
                },
                x: function(d){return d.id;},
                y: function(d){return d.total + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Types de parties'
                },
                yAxis: {
                    axisLabel: 'Nombre de parties jouées',
                    axisLabelDistance: 30
                }
            }
        };


      $scope.datadailygames =  [
      {
                key: "daily games number (7 days)",
                values: []
      }];

      /* Getting data of dailygames to display */
      $http({method : 'GET',url : 'http://localhost:1337/api/dailygames/find'})
        .success(function(data, status) {
            $scope.datadailygames[0].values = data;
        })
        .error(function(data, status) {
            console.log("Error getting api data array (daily games)");
        });


        $scope.dataqueues =  [
      {
                key: "Queuetypes",
                values: []
      }];

      /* Getting data of dailygames to display */
      $http({method : 'GET',url : 'http://localhost:1337/api/queuetype/find'})
        .success(function(data, status) {
            $scope.dataqueues[0].values = data;
        })
        .error(function(data, status) {
            console.log("Error getting api data array (daily games)");
        });
}]);