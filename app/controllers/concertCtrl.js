app.controller('concertCtrl', function($scope, $http, $window, $localStorage) {
        
        //$scope.$storage = $localStorage;
    
        var displayInfo = $localStorage.entryInfo;

        console.log(displayInfo);
    
        $http({
        url: "../angular/v1/editConcertList.php",
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: displayInfo
    }).success(function(data, status, headers, config, response) {
         $scope.entries = data.entries;
         console.log("Data: " + data);

    }).error(function(data, status, headers, config) {

    });
});