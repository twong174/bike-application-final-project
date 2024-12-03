<?php
namespace Models;

class Bike {
    private $conn;
    private $table_name = 'bikes';

    public $id;
    public $bike_name;
    public $bike_type;
    public $bike_brand;
    public $last_maintenance;
    public $notes;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAllBikes() {
        $query = "SELECT * FROM " . $this->table_name;
        $result = $this->conn->query($query);
        
        $bikes = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $bikes[] = $row;
            }
        }
        
        return $bikes;
    }

    public function createBike($data) {
        $query = "INSERT INTO " . $this->table_name . " 
                  (bike_name, bike_type, bike_brand, notes) 
                  VALUES (?, ?, ?, ?)";
        
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param(
            "ssss", 
            $data['bikeName'], 
            $data['bikeType'], 
            $data['bikeBrand'], 
            $data['notes']
        );
        
        if ($stmt->execute()) {
            return true;
        }
        
        return false;
    }
}
?>