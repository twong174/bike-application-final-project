<?php
namespace Controllers;

use config\Database;
use models\Bike;
use views\BikeView;

class BikeController {
    private $bike;
    private $view;

    public function __construct() {
        $database = new Database();
        $conn = $database->getConnection();
        $this->bike = new Bike($conn);
        $this->view = new BikeView();
    }

    public function index() {
        try {
            $bikes = $this->bike->getAllBikes();
            
            header('Content-Type: application/json');
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: GET, POST");
            header("Access-Control-Allow-Headers: Content-Type");
            
            $this->view->renderBikeList($bikes);
        } catch (\Exception $e) {
            $this->view->renderError($e->getMessage(), 500);
        }
    }

    public function create() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!$this->validateBikeData($data)) {
                $this->view->renderError('Invalid bike data', 400);
                return;
            }
            
            $result = $this->bike->createBike($data);
            
            if ($result) {
                echo json_encode([
                    'success' => true, 
                    'message' => 'Bike added successfully'
                ]);
            } else {
                $this->view->renderError('Failed to add bike', 500);
            }
        } catch (\Exception $e) {
            $this->view->renderError($e->getMessage(), 500);
        }
    }

    private function validateBikeData($data) {
        return isset($data['bikeName']) && 
               isset($data['bikeType']) && 
               isset($data['bikeBrand']);
    }
}
?>