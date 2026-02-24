<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
    }

header('Content-Type: application/json');
$host = 'db'; 
$db   = 'npm_tracker';
$user = 'root';
$pass = 'root'; 
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['name'])) {
    $name = $data['name'];

    try {
     $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $stmt = $conn->prepare("INSERT IGNORE INTO favorites (package_name) VALUES (:name)");
        $stmt->bindParam(':name', $name);
        $stmt->execute();

        echo json_encode(["status" => "success", "message" => "Added to favorites: $name"]);
    } catch(PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>