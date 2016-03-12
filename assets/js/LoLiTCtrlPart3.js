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
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value + (1e-10);},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.0f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Jour'
                },
                yAxis: {
                    axisLabel: 'Nombre de parties jouées',
                    axisLabelDistance: -10
                }
            }
        };

        $scope.dailygames = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Lundi" ,
                        "value" : 28742
                    } ,
                    {
                        "label" : "Mardi" ,
                        "value" : 19347
                    } ,
                    {
                        "label" : "Mercredi" ,
                        "value" : 16342
                    } ,
                    {
                        "label" : "Jeudi" ,
                        "value" : 28669
                    } ,
                    {
                        "label" : "Vendredi" ,
                        "value" : 27878
                    } ,
                    {
                        "label" : "Samedi" ,
                        "value" : 35368
                    } ,
                    {
                        "label" : "Dimanche" ,
                        "value" : 31465
                    }
                ]
            }
        ];
}]);