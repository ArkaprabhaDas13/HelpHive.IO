/* global google */

import React, { useEffect, useRef } from "react";
// import { arr } from "../utils/detailsData"; 
import { useLocation } from "react-router-dom";

const MultipleMarkersMap = () => {
  const mapRef = useRef(null);

  const location = useLocation();
  const arr = location.state?.data || [];
  console.log(arr);

  


  useEffect(() => {
    if (mapRef.current) {
      // Initialize the map
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 22.54486846923828, lng: 88.36493682861328 },
        zoom: 14,
        mapId: "DEMO_MAP_ID",
      });

      // Add markers for each location
      arr.map((location) => {
        new google.maps.Marker({
          map,
          position: { lat: location.lat, lng: location.lng },
          title: location.title,
          icon: {
            url: "https://cdn-icons-png.flaticon.com/256/1673/1673221.png", // Custom icon URL
            scaledSize: new google.maps.Size(40, 40), // Adjust the size as needed
          },
        });
      });
    }
  }, [location]);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ height: "100vh", width: "100%" }} // Adjust dimensions as needed
      />
    </div>
  );
};

export default MultipleMarkersMap;




