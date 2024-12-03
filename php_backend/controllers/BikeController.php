<?php
namespace Controllers;

use Config\Database;
use Models\Bike;

class BikeController {
    private $bike;

    public function __construct() {
        $database = new Database();
        $conn = $database->getConnection();
        $this->bike = new Bike($conn);
    }

    public function index() {
        try {
            $bikes = $this->bike->getAllBikes();
            
            header('Content-Type: application/json');
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: GET, POST");
            header("Access-Control-Allow-Headers: Content-Type");
            
            echo json_encode([
                'success' => true, 
                'data' => $bikes
            ]);
        } catch (\Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false, 
                'message' => $e->getMessage()
            ]);
        }
    }

    public function create() {
      try {
          $data = json_decode(file_get_contents('php://input'), true); 
          
          if (!$this->validateBikeData($data)) {
              http_response_code(400);
              echo json_encode([
                  'success' => false, 
                  'message' => 'Invalid bike data'
              ]);
              return;
          }
          
          $result = $this->bike->createBike($data);
          
          if ($result) {
              echo json_encode([
                  'success' => true, 
                  'message' => 'Bike added successfully'
              ]);
          } else {
              http_response_code(500);
              echo json_encode([
                  'success' => false, 
                  'message' => 'Failed to add bike'
              ]);
          }
      } catch (\Exception $e) {
          http_response_code(500);
          echo json_encode([
              'success' => false, 
              'message' => $e->getMessage()
          ]);
      }
  }
  

    private function validateBikeData($data) {
        return isset($data['bike_name']) && 
               isset($data['bike_type']) && 
               isset($data['bike_brand']);
    }
}
?>