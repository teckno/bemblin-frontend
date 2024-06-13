import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

const DictionaryComponent = () => {
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('');

    const addEntry = (word, definition) => {
        if (word && definition) {
            const newEntry = { word, definition };
            setEntries([...entries, newEntry]);
        }
    };

    const removeEntry = (index) => {
        const newEntries = entries.filter((entry, idx) => idx !== index);
        setEntries(newEntries);
    };

    const filteredEntries = entries.filter(entry => entry.word.toLowerCase().includes(searchTerm.toLowerCase()) && entry.word.toLowerCase().startsWith(selectedLetter.toLowerCase()));

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-semibold text-lg mb-4">Dictionary</h3>
            <div className="flex justify-center mb-4">
                {alphabet.map(letter => (
                    <button
                        key={letter}
                        onClick={() => setSelectedLetter(letter)}
                        className={`mx-1 px-2 py-1 rounded-md ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-400 p-2 m-2 rounded-md"
            />
            <div className="flex justify-center items-center">
                <button 
                    onClick={() => addEntry('exampleWord', 'exampleDefinition')} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    Search Term
                </button>
            </div>
            <ul className="text-left">
                {filteredEntries.map((entry, index) => (
                    <li key={index} className="mt-2 flex items-center justify-between">
                        <div>
                            <strong>{entry.word}</strong>: {entry.definition}
                        </div>
                        <button 
                            onClick={() => removeEntry(index)} 
                            className="text-red-500 ml-4 hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DictionaryComponent;
