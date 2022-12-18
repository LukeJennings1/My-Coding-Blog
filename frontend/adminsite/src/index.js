import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndividualPost from './IndividualPost'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>

    <Routes>


  <Route path='/' element = {<App/>} />
  <Route path='/posts' element = {<IndividualPost/>} />


    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
