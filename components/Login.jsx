import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

function Login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="text-sm bg-white flex flex-col items-end font-light px-5">
        <div className="hidden md:flex">
          Welcome, <span className="ml-1">{user.name}</span>
        </div>
        <a href="/api/auth/logout">
          <span className="text-boablue font-bold hover:underline">
            {' '}
            Logout
          </span>
        </a>
      </div>
    );
  } else {
    return (
      <a href="/api/auth/login">
        <button
          type="button"
          className="mx-5 mb-5 mt-4 text-gray-100 bg-boablue hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Login
        </button>
      </a>
    );
  }
}

export default Login;
