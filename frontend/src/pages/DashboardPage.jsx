import React from 'react';
import UserUrl from '../components/UserUrl';
import UrlBox from '../components/UrlBox';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 w-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full ">
        <UrlBox />
        <UserUrl/>
      </div>
    </div>
  );
};

export default DashboardPage;
