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
}]);