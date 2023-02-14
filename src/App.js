import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { AuthProvider } from './context/auth';
import { router } from './Router';
import './styles/App.sass'


const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App Sprint Jared"
  }, []);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
