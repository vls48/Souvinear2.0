<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once("includes/initialize.php");

$url = "php://input";
$contents = file_get_contents($url); 
//$contents = utf8_encode($contents); 
$postdata = json_decode($contents);
    
$user_id = "24";
$headliner = $postdata->{'headliner'};
$supporting_act = $postdata->{'supporting_act'};
$venue = $postdata->{'venue'};
$concert_date = $postdata->{'concert_date'};
$concert_time = $postdata->{'concert_time'};
$entry = $postdata->{'entry'};

 echo var_dump($postdata);

$query = 'UPDATE concert_info SET ';
$query .= "concert_date = '{$concert_date}', ";
$query .= "concert_time = '{$concert_time}', ";
$query .= "venue = '{$venue}', ";
$query .= "headliner = '{$headliner}', ";
$query .= "supporting_act = '{$supporting_act}', ";
$query .= "entry = '{$entry}' ";
$query .= "WHERE concert_date = '{$concert_date}' ";
$query .= "AND user_id = '{$user_id}' ";
$query .= 'LIMIT 1';

$result = mysqli_query($connection, $query);
    

?>