app.controller('deleteCtrl', function($scope, $http, $window, $localStorage) {
        
       
    $scope.delete_concert = function() {
    //$scope.$storage = $localStorage;
    
        var displayInfo = $localStorage.entryInfo;

        console.log(displayInfo);
    
        $http({
        url: "../angular/v1/delete_processing.php",
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: displayInfo
    }).success(function(data, status, headers, config, response) {
         document.getElementById("message").textContent = "Concert entry deleted.";
         console.log("Data: " + data);
        window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.replace("#/main");

    }, 3000);

    }).error(function(data, status, headers, config) {

    });
    }
});