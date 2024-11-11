<?php
require_once "database/connection.php";

function getAllProducts(){
    $pdo =connectDB();
    $sql = "SELECT * FROM product";
    $stm = $pdo->query($sql);
    $all = $stm->fetchAll(PDO::FETCH_ASSOC);
    return $all;
}