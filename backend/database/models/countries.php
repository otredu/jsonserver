<?php
require_once "database/connection.php";

function getAllCountries(){
    $pdo =connectDB();
    $sql = "SELECT * FROM country";
    $stm = $pdo->query($sql);
    $all = $stm->fetchAll(PDO::FETCH_ASSOC);
    return $all;
}

