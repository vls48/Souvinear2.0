<?php

$client_id = 'f77925f0471243af97142794fd2efe1d'; 
$client_secret = '75c4616ff46c42468e1f5a0395b14022'; 

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            'https://accounts.spotify.com/api/token' );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     'grant_type=client_credentials' ); 
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Authorization: Basic '.base64_encode($client_id.':'.$client_secret))); 

$result=curl_exec($ch);
echo $result;

?>

<html>

<head></head>
<body>
 <div id="wrapper">
 <form id="search-form"> 
     <input type='text' id="query" placeholder="search for artist" oninput="saveinput(this.value);">
     <input type="submit" id="search" class="btn btn-primary" value="Search">
 </form>
    <div id="results">
    </div>
     </div>
</body>
<script src="../js/handlebars-v4.0.11.js"></script>
<script src="../js/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
    var access = <?php echo json_encode($result) ?>;
</script>
<script id="results-template" type="text/x-handlebars-template">
    {{#each albums.items}}
    <div style="background-image:url({{images.0.url}})" data-album-id="{{id}}" class="cover"></div>
    {{/each}}
</script>
<script src="../js/spotify.js"></script>
</html>