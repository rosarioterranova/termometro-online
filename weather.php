<?php

if(isset($_GET["city"])){
    define("REQUEST_URL", "http://api.weatherstack.com/current");
    define("ACCESS_KEY", "c1c003d65ec1209501969e90e3eba69d");

    $request = file_get_contents(REQUEST_URL."?access_key=".ACCESS_KEY."&query=".urlencode($_GET["city"]));
    $data_received = json_decode($request);
    send_json($data_received);
}

function send_json($data){
    header('Content-Type: application/json;charset=utf-8');
    echo json_encode($data);
}