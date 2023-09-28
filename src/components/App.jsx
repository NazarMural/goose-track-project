import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


const MainPage = lazy(() => import('../pages/MainPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
 <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};


export default App;
