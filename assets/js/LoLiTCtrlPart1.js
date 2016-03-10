app.controller('LoLiTCtrlPart1', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

  var champions=[{"id": 266, "name": "Aatrox"}, {"id": 103, "name": "Ahri"}, {"id": 84, "name": "Akali"}, {"id": 12, "name": "Alistar"}, {"id": 32, "name": "Amumu"}, {"id": 34, "name": "Anivia"}, {"id": 1, "name": "Annie"}, {"id": 22, "name": "Ashe"}, {"id": 268, "name": "Azir"}, {"id": 432, "name": "Bard"}, {"id": 53, "name": "Blitzcrank"}, {"id": 63, "name": "Brand"}, {"id": 201, "name": "Braum"}, {"id": 51, "name": "Caitlyn"}, {"id": 69, "name": "Cassiopeia"}, {"id": 31, "name": "Cho'Gath"}, {"id": 42, "name": "Corki"}, {"id": 122, "name": "Darius"}, {"id": 131, "name": "Diana"}, {"id": 119, "name": "Draven"}, {"id": 36, "name": "Dr. Mundo"}, {"id": 245, "name": "Ekko"}, {"id": 60, "name": "Elise"}, {"id": 28, "name": "Evelynn"}, {"id": 81, "name": "Ezreal"}, {"id": 9, "name": "Fiddlesticks"}, {"id": 114, "name": "Fiora"}, {"id": 105, "name": "Fizz"}, {"id": 3, "name": "Galio"}, {"id": 41, "name": "Gangplank"}, {"id": 86, "name": "Garen"}, {"id": 150, "name": "Gnar"}, {"id": 79, "name": "Gragas"}, {"id": 104, "name": "Graves"}, {"id": 120, "name": "Hecarim"}, {"id": 74, "name": "Heimerdinger"}, {"id": 420, "name": "Illaoi"}, {"id": 39, "name": "Irelia"}, {"id": 40, "name": "Janna"}, {"id": 59, "name": "Jarvan IV"}, {"id": 24, "name": "Jax"}, {"id": 126, "name": "Jayce"}, {"id": 202, "name": "Jhin"}, {"id": 222, "name": "Jinx"}, {"id": 429, "name": "Kalista"}, {"id": 43, "name": "Karma"}, {"id": 30, "name": "Karthus"}, {"id": 38, "name": "Kassadin"}, {"id": 55, "name": "Katarina"}, {"id": 10, "name": "Kayle"}, {"id": 85, "name": "Kennen"}, {"id": 121, "name": "Kha'Zix"}, {"id": 203, "name": "Kindred"}, {"id": 96, "name": "Kog'Maw"}, {"id": 7, "name": "LeBlanc"}, {"id": 64, "name": "Lee Sin"}, {"id": 89, "name": "Leona"}, {"id": 127, "name": "Lissandra"}, {"id": 236, "name": "Lucian"}, {"id": 117, "name": "Lulu"}, {"id": 99, "name": "Lux"}, {"id": 54, "name": "Malphite"}, {"id": 90, "name": "Malzahar"}, {"id": 57, "name": "Maokai"}, {"id": 11, "name": "Master Yi"}, {"id": 21, "name": "Miss Fortune"}, {"id": 62, "name": "Wukong"}, {"id": 82, "name": "Mordekaiser"}, {"id": 25, "name": "Morgana"}, {"id": 267, "name": "Nami"}, {"id": 75, "name": "Nasus"}, {"id": 111, "name": "Nautilus"}, {"id": 76, "name": "Nidalee"}, {"id": 56, "name": "Nocturne"}, {"id": 20, "name": "Nunu"}, {"id": 2, "name": "Olaf"}, {"id": 61, "name": "Orianna"}, {"id": 80, "name": "Pantheon"}, {"id": 78, "name": "Poppy"}, {"id": 133, "name": "Quinn"}, {"id": 33, "name": "Rammus"}, {"id": 421, "name": "Rek'Sai"}, {"id": 58, "name": "Renekton"}, {"id": 107, "name": "Rengar"}, {"id": 92, "name": "Riven"}, {"id": 68, "name": "Rumble"}, {"id": 13, "name": "Ryze"}, {"id": 113, "name": "Sejuani"}, {"id": 35, "name": "Shaco"}, {"id": 98, "name": "Shen"}, {"id": 102, "name": "Shyvana"}, {"id": 27, "name": "Singed"}, {"id": 14, "name": "Sion"}, {"id": 15, "name": "Sivir"}, {"id": 72, "name": "Skarner"}, {"id": 37, "name": "Sona"}, {"id": 16, "name": "Soraka"}, {"id": 50, "name": "Swain"}, {"id": 134, "name": "Syndra"}, {"id": 223, "name": "Tahm Kench"}, {"id": 91, "name": "Talon"}, {"id": 44, "name": "Taric"}, {"id": 17, "name": "Teemo"}, {"id": 412, "name": "Thresh"}, {"id": 18, "name": "Tristana"}, {"id": 48, "name": "Trundle"}, {"id": 23, "name": "Tryndamere"}, {"id": 4, "name": "Twisted Fate"}, {"id": 29, "name": "Twitch"}, {"id": 77, "name": "Udyr"}, {"id": 6, "name": "Urgot"}, {"id": 110, "name": "Varus"}, {"id": 67, "name": "Vayne"}, {"id": 45, "name": "Veigar"}, {"id": 161, "name": "Vel'Koz"}, {"id": 254, "name": "Vi"}, {"id": 112, "name": "Viktor"}, {"id": 8, "name": "Vladimir"}, {"id": 106, "name": "Volibear"}, {"id": 19, "name": "Warwick"}, {"id": 101, "name": "Xerath"}, {"id": 5, "name": "Xin Zhao"}, {"id": 157, "name": "Yasuo"}, {"id": 83, "name": "Yorick"}, {"id": 154, "name": "Zac"}, {"id": 238, "name": "Zed"}, {"id": 115, "name": "Ziggs"}, {"id": 26, "name": "Zilean"}, {"id": 143, "name": "Zyra"}];
  
  //Get name from id
  function getname (id) {
    for (var i=0; i<champions.length; i++){
      if (champions[i].id===id){
        return champions[i].name;
      }
    }
  }



  $rootScope.sectionSelectionnee = 1;

  $scope.selectionnerSection = function(section)
  {
    $rootScope.sectionSelectionnee = section;
  };

  $scope.$watch(function() {
    return $rootScope.sectionSelectionnee;
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
  $scope.datapicks = []; //championpick data
  $scope.newdatapicks = []; //pour ajouter le champ autres.

  $scope.databans = []; //championpick data
  $scope.newdatabans = []; //pour ajouter le champ autres.

  $scope.nbr_fields = 19;


  //Getting data of championpick to display
  $http({method : 'GET',url : 'http://localhost:1337/api/championpick/find'})
    .success(function(data, status) {
        $scope.datapicks = data;
        //Now we change id by names for championpick data
        for (var i = $scope.datapicks.length - 1; i >= 0; i--) {
          $scope.datapicks[i].id=getname($scope.datapicks[i].id);
        };


        for (var j = 0; j < $scope.nbr_fields; j++) {
          $scope.newdatapicks[j] = $scope.datapicks[j];
        };
        
        $scope.newdatapicks[$scope.nbr_fields] = {"total" : 0,"id" : "Autres"};

        for (var j = $scope.nbr_fields; j <= $scope.datapicks.length - 1; j++) {
          $scope.newdatapicks[$scope.nbr_fields].total += $scope.datapicks[j].total;
        };
  


    })
    .error(function(data, status) {
        console.log("Error getting api data array (championpick)");
    });


  //Getting data of championban to display
  $http({method : 'GET',url : 'http://localhost:1337/api/championban/find'})
    .success(function(data, status) {
        $scope.databans = data;
        //Now we change id by names for championban data
        for (var i = $scope.databans.length - 1; i >= 0; i--) {
          $scope.databans[i].id=getname($scope.databans[i].id);
        };


        for (var j = 0; j < $scope.nbr_fields; j++) {
          $scope.newdatabans[j] = $scope.databans[j];
        };
        
        $scope.newdatabans[$scope.nbr_fields] = {"total" : 0,"id" : "Autres"};

        for (var j = $scope.nbr_fields; j <= $scope.databans.length - 1; j++) {
          $scope.newdatabans[$scope.nbr_fields].total += $scope.databans[j].total;
        };
  


    })
    .error(function(data, status) {
        console.log("Error getting api data array (championban)");
    });



  /* Pie Chart */
  $scope.piechart = {
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

  /* Donut Chart */
  $scope.donutchart = {
  chart: {
    type: "pieChart",
    height: 450,
    x: function(d){return d.id;},
    y: function(d){return d.total;},
    donut: true,
    showLabels: true,
    pie: {},
    duration: 500,
    legend: {
      margin: {
        top: 5,
        right: 140,
        bottom: 5,
        left: 0
      }
    }
  }
}

}]);
