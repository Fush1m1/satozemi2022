import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Top from './pages/top';
import Articles from './pages/article';
import Admin from './pages/admin';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Top/>} />
          <Route path="/articles" element={<Articles/>}/>
          <Route path= "/admin" element = {<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
  };

export default App;