import React, { useState, useEffect } from "react";

const BikeList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
       
        const response = await fetch(
          "http://localhost:8888/php_backend/get_bikes.php"
        );
        const data = await response.json();

        if (data.success) {
          setBikes(data.bikes); 
        } else {
          setError("Failed to fetch bikes.");
        }
      } catch (error) {
        setError("Error fetching bikes.");
      } finally {
        setLoading(false); 
      }
    };

    fetchBikes();
  }, []);

  
  if (loading) return <p>Loading bikes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Bike List</h2>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <strong>{bike.bike_name}</strong> - {bike.bike_type} -
            {bike.bike_brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BikeList;
