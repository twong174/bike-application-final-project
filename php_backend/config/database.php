<?php
namespace Config;

class Database {
    private $host = 'localhost';
    private $username = 'root';
    private $password = 'root';
    private $database = 'bike_garage';
    
    public function getConnection() {
        $conn = new \mysqli($this->host, $this->username, $this->password, $this->database);
        
        if ($conn->connect_error) {
            throw new \Exception('Database connection failed: ' . $conn->connect_error);
        }
        
        return $conn;
    }
}
?>