import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api';
import { Link, ClipboardCheck, ClipboardCopy } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-green-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          URL Shortener 🔗
        </h2>

        <div className="space-y-4">
          <label htmlFor="urlInput" className="block text-sm font-medium text-gray-700">
            Enter a long URL:
          </label>
          <div className="relative">
            <Link className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="urlInput"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/long-url"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !url.trim()}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>

          {shortUrl && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 rounded-lg">
              <p className="text-sm text-emerald-700 mb-1">Shortened URL:</p>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-800 font-medium underline break-all"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-emerald-600 hover:text-emerald-800 transition"
                  title="Copy to clipboard"
                >
                  {copied ? <ClipboardCheck size={20} /> : <ClipboardCopy size={20} />}
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-600 font-medium mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UrlForm;
