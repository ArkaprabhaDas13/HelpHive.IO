export const MapAPI = "AIzaSyA9U99srqUrI3LKMobDwzXOnMTaBX_JuaM"



// import React, { useEffect, useRef } from "react";

// const MultipleMarkersMap = () => {
//   const mapRef = useRef(null);

//   // Array of locations
//   const locations = [
//     { lat: 22.54486846923828, lng: 88.36493682861328, title: "Location 1" },
//     { lat: 22.572645, lng: 88.363892, title: "Location 2" },
//     { lat: 22.585778, lng: 88.359161, title: "Location 3" },
//   ];

//   useEffect(() => {
//     if (mapRef.current) {
//       // Initialize the map
//       const map = new google.maps.Map(mapRef.current, {
//         center: { lat: 22.54486846923828, lng: 88.36493682861328 },
//         zoom: 14,
//         mapId: "DEMO_MAP_ID",
//       });

//       // Add markers for each location
//       locations.forEach((location) => {
//         new google.maps.marker.AdvancedMarkerView({
//           map,
//           position: { lat: location.lat, lng: location.lng },
//           title: location.title,
//         });
//       });
//     }
//   }, [locations]);

//   return (
//     <div>
//       <div
//         ref={mapRef}
//         style={{ height: "500px", width: "100%" }} // Adjust dimensions as needed
//       />
//     </div>
//   );
// };

// export default MultipleMarkersMap;
