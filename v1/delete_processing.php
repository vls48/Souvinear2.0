<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once("includes/initialize.php");

$url = "php://input";
$contents = file_get_contents($url); 
//$contents = utf8_encode($contents); 
$postdata = json_decode($contents);
    
$headliner = $postdata->{'headliner'};
$concert_date = $postdata->{'concert_date'};

$query = "DELETE FROM concert_info WHERE concert_date = '{$concert_date}' AND headliner = '{$headliner}' AND user_id = 24 ";

$result = mysqli_query($connection, $query);
      
 
?>