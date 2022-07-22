import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard, Employees, Customers, Login } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
  const { token } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        {token === null ? (
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        ) : (
          <div className='flex relative dark:bg-main-dark-bg'>
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
            <div className='dark:bg-main-dark-bg bg-main-bg min-h-screen w-full md:ml-72'>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>

              <div>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/customers' element={<Customers />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
