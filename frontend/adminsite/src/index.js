import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndividualPost from './IndividualPost'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>


  <Route path='/' element = {<App/>} />
  <Route path='/posts/:id' element = {<IndividualPost/>} />


    </Routes>
  </BrowserRouter>
);
