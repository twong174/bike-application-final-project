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

use controllers\BikeController;

try {
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $inputData = file_get_contents("php://input");
        
        $bikeDetails = json_decode($inputData, true);
        
        if ($bikeDetails === null) {
            echo json_encode(["error" => "Invalid JSON data received."]);
            exit();
        }
        
        echo json_encode(["message" => "Bike added successfully", "data" => $bikeDetails]);
    } else {
        echo json_encode(["message" => "Index.php is working and handling request"]);
    }
} catch (\Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
