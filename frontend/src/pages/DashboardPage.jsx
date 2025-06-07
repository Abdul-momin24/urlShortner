import React from 'react';
import UserUrl from '../components/UserUrl';
import UrlBox from '../components/UrlBox';

const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-100 to-green-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
        <h1 className="text-3xl font-bold text-emerald-700 text-center">
          Dashboard
        </h1>
        <UrlBox />
        <div className="border-t pt-6">
          <UserUrl />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
