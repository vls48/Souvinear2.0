app.controller('editCtrl', function($scope, $http, $window, $localStorage) {
        
        //$scope.$storage = $localStorage;
    
        var editInfo = $localStorage.concertInfo;

        console.log(editInfo);
    
        $http({
        url: "../angular/v1/editConcertList.php",
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: editInfo
    }).success(function(data, status, headers, config, response) {
         $scope.entries = data.entries;
         //console.log("Data: " + data);

    }).error(function(data, status, headers, config) {

    });
    
    $scope.edit_concert = function() {
        
        var headliner = $("#headliner").val();
        var supporting_act = $("#supporting_act").val();
        var concert_date = $("#concert_date").val();
        var concert_time = $("#concert_time").val();
        var venue = $("#venue").val();
        var entry = $("#entry").val();
        
        var concert_info = JSON.stringify({"headliner": headliner, "supporting_act": supporting_act, "concert_date": concert_date, "concert_time": concert_time, "venue": venue, "entry": entry});
        
        console.log(concert_info);

        document.getElementById("message").textContent = "";
        
        $http({
            url: "../angular/v1/edit_processing.php",
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: concert_info
        }).success(function(data, status, headers, config, response) {
            document.getElementById("message").textContent = "Concert entry updated!";
            console.log("Data: " + data);

        }).error(function(data, status, headers, config) {

        });

    }
    
});