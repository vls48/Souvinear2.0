app.controller('addCtrl', function($scope, $http) {

$scope.formData = {};
    
$scope.add_concert = function() {
  
    
var concert_info = JSON.stringify($scope.formData);
    
console.log(concert_info);

document.getElementById("message").textContent = "";

    
$http({
    url: "../angular/v1/concert_processing.php",
    method: "POST",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: concert_info
}).success(function(data, status, headers, config, response) {
    document.getElementById("message").textContent = "Concert entry saved.";
    console.log("Data: " + data);
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.replace("#/main");

    }, 3000);

}).error(function(data, status, headers, config) {

});

    

//console.log($scope.headliner);
/* checks whether the request is successful or not */
//request.then(function (data) {
//    document.getElementById("message").textContent = "Concert entry saved.";
//});
}
});