import React, { useState } from 'react';

function DeleteWord() {
  const [word, setWord] = useState('');

  const handleDelete = async () => {
    const response = await fetch(`/api/dictionaries/${word}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Word successfully deleted!');
      setWord('');
    } else {
      console.error('Failed to delete word');
    }
  };

  return (
    <div>
      <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Word to delete" />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteWord;