import React from 'react';

const Account = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white min-h-screen w-full max-w-sm">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Account Settings</h1>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="relative mr-4">
              <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="User"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold">Marry Doe</p>
              <p className="text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        <div className="absolute bottom-0 w-full max-w-sm p-4">
          <hr className="border-t border-dashed border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Account;
