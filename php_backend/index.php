<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK"); 
    exit; 
}

require_once 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use controllers\BikeController;

try {
    // Database connection details
    $host = $_ENV['DB_HOST'];
    $db = $_ENV['DB_NAME'];
    $user = $_ENV['DB_USER'];
    $pass = $_ENV['DB_PASS'];
    $charset = $_ENV['DB_CHARSET'];

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $inputData = file_get_contents("php://input");
        $bikeDetails = json_decode($inputData, true);

        if ($bikeDetails === null) {
            echo json_encode(["error" => "Invalid JSON data received."]);
            exit();
        }

        // Insert data into the database
        $stmt = $pdo->prepare("INSERT INTO bikes (bike_name, bike_type, bike_brand, notes) VALUES (:bikeName, :bikeType, :bikeBrand, :notes)");
        $stmt->execute([
            ':bikeName' => $bikeDetails['bikeName'],
            ':bikeType' => $bikeDetails['bikeType'],
            ':bikeBrand' => $bikeDetails['bikeBrand'],
            ':notes' => $bikeDetails['notes'] ?? null,
        ]);

        echo json_encode(["message" => "Bike added successfully", "data" => $bikeDetails]);
    } else {
        echo json_encode(["message" => "Index.php is working and handling request"]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
} catch (Exception $e) {
    echo json_encode(["error" => "Error: " . $e->getMessage()]);
}
?>
