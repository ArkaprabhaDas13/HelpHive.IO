import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {details} from "../utils/detailsData";

const Search = () => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (filteredData.length > 0) {
      // Navigate to the specific service page if matches exist
      navigate(`/services/${filteredData[0].category}`);
    } else {
      alert("No matches found.");
    }
  };

  return (
    <>
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search for a service..."
          value={input}
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            setInput(value);

            if (value) {
              // Filter the data based on the input value
              const filtered = details.filter((item) =>
                item.category.toLowerCase().includes(value)
              );
              setFilteredData(filtered);
            } else {
              setFilteredData([]); // Clear filtered data if input is empty
            }
          }}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <button
          className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-r-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;