<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bike_garage";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['bikeName']) || empty($data['bikeType']) || empty($data['bikeBrand'])) {
    echo json_encode(['success' => false, 'message' => 'Required fields are missing']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO bikes (bike_name, bike_type, bike_brand, notes) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $data['bikeName'], $data['bikeType'], $data['bikeBrand'], $data['notes']);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Bike added successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error adding bike: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
