import React from 'react';
import UrlForm from './urlForm';

function UrlBox() {
  return (
    <div className="w-full max-w-xl mx-auto mt-4 bg-white border border-gray-300 shadow-xl px-6 py-2 rounded-xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        🔗 URL SHORTENER
      </h1>
      <UrlForm/>
    </div>
  );
}

export default UrlBox;
