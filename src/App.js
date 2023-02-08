import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './Router';


const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App Sprint Jared"
  }, []);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
