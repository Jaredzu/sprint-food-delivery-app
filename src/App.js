import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { auth, restaurantsContext } from './context';
import { router } from './Router';
import './styles/App.sass'


const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App Sprint Jared"
  }, []);

  return (
    <>
      <restaurantsContext.RestaurantsProvider>
        <auth.AuthProvider>
          <RouterProvider router={router} />
        </auth.AuthProvider>
      </restaurantsContext.RestaurantsProvider>
    </>
  );
}

export default App;
