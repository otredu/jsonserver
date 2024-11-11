<?php

function connectDB(){
        static $connection;
        if(!isset($connection)) {
            $connection = connect();
        }      
        return $connection;
}

function connect() {
        $host = $_ENV['DB_HOST'] ?: "localhost";
        $port = $_ENV['DB_PORT'] ?: 3306; 
        $dbname = $_ENV['DB_NAME'] ?: "notes_db"; 
        $user = $_ENV['DB_USERNAME'] ?: "root"; 
        $password = $_ENV['DB_PASSWORD'] ?: "mypass123"; 

        $connectionString = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8";

        try {       
                $pdo = new PDO($connectionString, $user, $password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
        } catch (PDOException $e){
                echo "Virhe tietokantayhteydessä: " . $e->getMessage();
                die();
        }
}