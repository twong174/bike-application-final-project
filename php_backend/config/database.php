<?php
namespace Config;

class Database {
    private $host;
    private $username;
    private $password;
    private $database;

    public function __construct() {
        // Get the database credentials from the environment variables
        $this->host = getenv('DB_HOST') ?: 'localhost';
        $this->username = getenv('DB_USER') ?: 'root';
        $this->password = getenv('DB_PASS') ?: 'root';
        $this->database = getenv('DB_NAME') ?: 'bike_garage';
    }

    public function getConnection() {
        $conn = new \mysqli($this->host, $this->username, $this->password, $this->database);
        
        if ($conn->connect_error) {
            throw new \Exception('Database connection failed: ' . $conn->connect_error);
        }
        
        return $conn;
    }
}

?>