import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import "./assets/styles/global.css";


function App() {


  return (
    <>
    
      <RouterProvider router={router}/>

    </>
  )
}

export default App
