<?php
session_start();
set_include_path(dirname(__FILE__) . '/../');

//env
require_once('../vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

$route = explode("?", $_SERVER["REQUEST_URI"])[0];
$method = strtolower($_SERVER["REQUEST_METHOD"]);

require_once 'libraries/cors.php';
require_once 'controllers/jsonManagement.php';

//cors();

switch($route) {
  
  case "/countries":
    getCountriesJson();
  break;

  case "/products":
    getProductsJson();
  break;
 
  default:
      echo "404";
}
