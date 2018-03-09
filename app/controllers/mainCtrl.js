app.controller('mainCtrl', function($scope, $http, $window, $localStorage) {
        $http.get("v1/concertList.php")
        .then(function (response) {$scope.entries = response.data.entries;});

    
    $scope.$storage = $localStorage;
    $localStorage.$reset();
    $scope.concertInfo = {};
    $scope.entryInfo = {};
    console.log("b4: " + $localStorage.concertInfo);
    
    $scope.getEditInfo = function() {    
    //onclick traverses the DOM to target the input elements before the edit button to get the 
    //id of each input for the value of the headliner and concert date
    var headliner = $(this).prevAll().prevObject["0"].$$watchers[1].last;
    var concert_date = $(this).prevAll().prevObject["0"].$$watchers["0"].last;
    
    console.log(headliner); 
        
    $scope.concertInfo = JSON.stringify({ "headliner":headliner, "concert_date":concert_date});    
    $localStorage.concertInfo = $scope.concertInfo;
        
    $window.location.href = '#/edit-entry';
    
    console.log($localStorage.concertInfo);
    }
    
    $scope.getEntryInfo = function() {
        var headliner = $(this).nextAll().prevObject["0"].$$watchers[1].last;
        var concert_date = $(this).nextAll().prevObject["0"].$$watchers["0"].last;
        
        $scope.entryInfo = JSON.stringify({ "headliner":headliner, "concert_date":concert_date});
        
        $localStorage.entryInfo = $scope.entryInfo;
        
        $window.location.href = '#/concert-entry';
        
        console.log($localStorage.entryInfo);
    }
});