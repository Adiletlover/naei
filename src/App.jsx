import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import SectionSelection from './components/SectionSelectionPage/SectionSelectionPage'
import SearchPage from './components/SearchResultsPage/SearchResultsPage'
import { Route, Routes, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === '/'
  return (
      <>
        {!hideHeader && <Header />} 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/section-selection' element={<SectionSelection/>} />
          <Route path='/search/:topic' element={<SearchPage/>} />
        </Routes>
      </>
  );
}

export default App;