import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for making HTTP requests
import Header from './Components/Header';
import Footer from './Components/Footer';
import '../index.css'; // Ensure to import your CSS file

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
      <Header />
      <div style={{ marginTop: '150px', marginBottom: '200px' }} className="container">
        <h1 className="text-4xl font-bold mb-4">Dictionary Search</h1>
        <p className="mb-8">Find the meanings, pronunciations, translations, and more of any word easily!</p>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Look up word"
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="search-button"
            >
              Search
            </button>
          </div>
          <div className="results">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div key={result.id} className="result-item">
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
      <Footer />
    </div>
  );
};

export default SearchBar;
