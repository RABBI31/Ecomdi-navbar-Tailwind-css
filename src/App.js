import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/profile'  component={Profile} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
