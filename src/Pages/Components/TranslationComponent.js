import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for making HTTP requests


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/dictionaries/search/?word=${encodeURIComponent(searchQuery)}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
  
      <div className="flex justify-center items-center min-h-screen bg-blue-900 text-white font-poppins">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="relative">
          <input
            type="text"
            className="search-bar border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full text-black"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
          >
            Search
          </button>
        </div>
        <div className="mt-4 text-black">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div key={result.id} className="border-b border-gray-300 py-2">
                <p><strong><i className="material-icons">label</i> Word:</strong> {result.word}</p>
                <p><strong><i className="material-icons">volume_up</i> Pronunciation:</strong> {result.pronunciation || 'N/A'}</p>
                <p><strong><i className="material-icons">music_note</i> Sound:</strong> {result.sound || 'N/A'}</p>
                <p><strong><i className="material-icons">translate</i> Translation:</strong> {result.translation || 'N/A'}</p>
                <p><strong><i className="material-icons">format_list_bulleted</i> Part of Speech:</strong> {result.part_of_speech || 'N/A'}</p>
                <p><strong><i className="material-icons">description</i> Definition:</strong> {result.definition}</p>
                <p><strong><i className="material-icons">speaker_notes</i> Example Sentence:</strong> {result.example_sentence || 'N/A'}</p>
              </div>
            ))
          ) : (
            <p className="text-center">No results found</p>
          )}
        </div>
      </form>
      </div>
      
     
    </div>
  );
};

export default SearchBar;