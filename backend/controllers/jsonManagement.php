<?php
require_once "database/models/countries.php";
require_once "database/models/products.php";

function getCountriesJson(){
    $all = getAllCountries();
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($all);
    exit();
}

function getProductsJson(){
    $all = getAllProducts();
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($all);
    exit();
}