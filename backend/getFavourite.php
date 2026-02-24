<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}
$host = 'db'; 
$db   = 'npm_tracker';
$user = 'root';
$pass = 'root'; 
try {
   $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare("SELECT * FROM favorites ORDER BY added_at DESC");
    $stmt->execute();
    
    $favorites = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($favorites);

} catch(PDOException $e) {
   
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>