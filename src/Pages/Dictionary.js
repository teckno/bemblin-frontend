import React, { useState } from "react";
import axios from "axios";
import { MagnifyingGlassIcon, SpeakerWaveIcon, GlobeAltIcon, TagIcon, DocumentTextIcon, DocumentDuplicateIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import Header from './Components/Header';
import Footer from './Components/Footer';
import '../index.css';

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
      <div style={{ marginTop: '150px', marginBottom: '200px' }} className="container mx-auto max-w-3xl px-4">
        <h1 className="text-5xl font-extrabold text-center mb-6">Dictionary Search</h1>
        <p className="text-center text-lg mb-10">Find meanings, pronunciations, translations, and more with ease!</p>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center justify-center mb-8">
            <input
              type="text"
              className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Look up a word..."
              value={searchQuery}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="results">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div key={result.id} className="bg-white p-6 mb-6 rounded-lg shadow-md">
                  <p className="text-lg font-semibold mb-2 flex items-center">
                    <TagIcon className="h-5 w-5 mr-2 text-blue-600" /> Word: <span className="ml-2 text-blue-800">{result.word}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <SpeakerWaveIcon className="h-5 w-5 mr-2 text-blue-600" /> Pronunciation: <span className="ml-2">{result.pronunciation || 'N/A'}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <BookOpenIcon className="h-5 w-5 mr-2 text-blue-600" /> Sound: <span className="ml-2">{result.sound || 'N/A'}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <GlobeAltIcon className="h-5 w-5 mr-2 text-blue-600" /> Translation: <span className="ml-2">{result.translation || 'N/A'}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <DocumentDuplicateIcon className="h-5 w-5 mr-2 text-blue-600" /> Part of Speech: <span className="ml-2">{result.part_of_speech || 'N/A'}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-600" /> Definition: <span className="ml-2">{result.definition}</span>
                  </p>
                  <p className="mb-2 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-600" /> Example Sentence: <span className="ml-2">{result.example_sentence || 'N/A'}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No results found</p>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SearchBar;
