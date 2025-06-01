import React, { useState } from 'react';
import axios from 'axios';
import UrlForm from './urlForm';

function UrlBox() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page refresh
    if (!url.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setError('');
    setShortUrl('');

    try {
      // Replace this with your actual API endpoint
      const response = await axios.post('https://your-api.com/shorten', {
        originalUrl: url,
      });

      if (response.status !== 200) throw new Error('Failed to shorten URL');

      setShortUrl(response.data.shortUrl);
    } catch (err) {
      console.error(err);
      setError('Failed to generate short URL. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border-2 border-black shadow-xl px-6 py-4 rounded-xl">
      <h1 className="text-3xl font-bold text-center text-black mb-4">
        URL SHORTENER
      </h1>

      <UrlForm/>

    </div>
  );
}

export default UrlBox;
