app.controller('editDisplayCtrl', function($scope, $http, dataService) {
    
    $scope.formData = {};
    
    $scope.getEditInfo = function() {
    
    //onclick traverses the DOM to target the input elements before the edit button to get the 
    //id of each input for the value of the headliner and concert date
    var headliner = $(this).prevAll().prevObject["0"].$parent.$$watchers["2"].last;
    var concert_date = $(this).prevAll().prevObject["0"].$parent.$$watchers["1"].last;
    
    var concert_obj = JSON.stringify({ "headliner":headliner, "concert_date":concert_date});    
    
    dataService.set(concert_obj);
        
    //console.log(dataService.get());

//$http({
//    url: "v1/editConcertList.php", 
//    method: "GET",
//    params: concert_info
// });
    }
});