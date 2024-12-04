<?php
namespace Config;

class Database {
    private $host;
    private $username;
    private $password;
    private $database;
    
    public function getConnection() {
        $conn = new \mysqli($this->host, $this->username, $this->password, $this->database);
        
        if ($conn->connect_error) {
            throw new \Exception('Database connection failed: ' . $conn->connect_error);
        }
        
        return $conn;
    }
}
?>