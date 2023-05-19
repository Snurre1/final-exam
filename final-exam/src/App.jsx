import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import FrontPage from './components/frontpage';
import Register from './components/register';
import Login from './components/login';
function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="/home/snurre/React/final-exam/src/components/register/index.jsx" element={<Register />} />
          <Route path="/home/snurre/React/final-exam/src/components/login/index.jsx" element={<Login />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
      
  );
}

export default App;

