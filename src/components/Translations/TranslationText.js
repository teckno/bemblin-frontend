import React, { useState } from 'react';

const TranslationText = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleTranslate = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setTranslation(data.translation);
      } else {
        console.error('Translation failed');
      }
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Translation</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate} disabled={isLoading}>
        Translate
      </button>
      {isLoading && <p>Loading...</p>}
      {translation && <p>Translation: {translation}</p>}
    </div>
  );
};

export default TranslationText;
