import React, { useState } from 'react';
import axios from 'axios';
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createShortUrl } from '../api/shortUrl.api';

function UrlForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setShortUrl('');
    setCopied(false);

    try {
      const { data } = await createShortUrl(url);
      setShortUrl(data.shortUrl);
    } catch (err) {
      console.error(err);
      setError('Failed to shorten the URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <label htmlFor="urlInput" className="block text-black font-medium">
        Enter the URL:
      </label>
      <input
        id="urlInput"
        type="text"
        value={url}
        placeholder="https://example.com"
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md outline-emerald-400 focus:ring-2 focus:ring-emerald-300"
        aria-label="Enter URL"
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading || !url.trim()}
        className="w-full bg-emerald-500 text-white font-semibold py-2 rounded-md hover:bg-emerald-600 transition duration-300 disabled:opacity-50"
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>

      {shortUrl && (
        <div className="text-green-600 font-medium mt-4">
          Shortened URL:{' '}
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="underline break-all"
          >
            {shortUrl}
          </a>
          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}

      {error && (
        <p className="text-red-600 font-medium mt-2">{error}</p>
      )}
    </div>
  );
}

export default UrlForm;
