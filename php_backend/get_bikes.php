<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bike_garage";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$sql = "SELECT * FROM bikes";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $bikes = [];
    while ($row = $result->fetch_assoc()) {
        $bikes[] = $row;
    }
    echo json_encode(['success' => true, 'data' => $bikes]);
} else {
    echo json_encode(['success' => false, 'message' => 'No bikes found']);
}

$conn->close();
?>
