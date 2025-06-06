import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUrls } from '../api/user.api';
import { ClipboardCopy, ClipboardCheck } from 'lucide-react';

function UserUrl() {

  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUrls,
    refetchOnWindowFocus: false,
    refetchInterval: 20000,
    staleTime: 0,
  });

  const [copied, setCopied] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  if (isLoading)
    return <p className="text-center text-lg font-medium mt-10">Loading your links...</p>;

  if (isError)
    return <p className="text-center text-red-500 font-semibold mt-10">Error: {error.message}</p>;

  const urlcontent = urls.urls

{console.log(urlcontent, "urls from userUrl component")}
  
if (!urlcontent || urlcontent.length === 0) {
  return (
    <div className="text-center text-gray-500 my-6 p-4 bg-gray-50 rounded-lg">
      <svg
        className="w-12 h-12 mx-auto text-gray-400 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008H14.25V9.75zm-7.5 6h10.5M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
        />
      </svg>
      <p className="text-lg font-medium">No shortened URLs found</p>
      <p className="text-sm text-gray-400 mt-1">Start by creating your first short link!</p>
    </div>
  );
}

  const SHORT_URL_DOMAIN = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🔗 Your Shortened Links</h1>
    {/* {console.log(urls)} */}


      {urlcontent && urlcontent.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {urlcontent.reverse().map((url) => (
            <div
              key={url._id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="mb-3">
                <p className="text-sm text-gray-500">Original URL</p>
                <a
                  href={url.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-words"
                >
                  {url.originalUrl}
                </a>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-sm text-gray-500">Short URL</p>
                  <a
                    href={`${SHORT_URL_DOMAIN}/${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline break-all"
                  >
                    {`${SHORT_URL_DOMAIN}/${url.shortUrl}`}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Clicks</p>
                  
                    {url.clicks > 0 ? (
                      <span className="text-gray-700">{url.clicks}</span> 
                    ) : (
                      <span className="text-gray-400">No clicks yet</span>
                    )}
                  
                </div>
                <button
                  onClick={() => handleCopy(url.shortUrl, url._id)}
                  className="text-gray-700 hover:text-black transition-colors"
                  title="Copy short URL"
                >
                  {copied === url._id ? <ClipboardCheck className="text-green-500" /> : <ClipboardCopy />}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">You haven't shortened any URLs yet.</p>
      )}
    </div>
  );
}

export default UserUrl;
