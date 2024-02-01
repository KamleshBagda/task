import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShowList from './Components/ShowList';
import ShowDetail from './Components/ShowDetail';
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowList />} />
      <Route path="/show/:id" element={<ShowDetail />} />
    </Routes>
  );
}

export default App;
