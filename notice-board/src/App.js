import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavForm from './components/form/NavForm';
import LoginPage from './components/pages/LoginPages';
import HomePage from './components/pages/HomePages';


const App = () => {
  return (
    <>
      <BrowserRouter> 
        <NavForm/>
          <Route exact path={['/', '/home']} component={ HomePage }></Route>
          <Route exact path="/login" component={ LoginPage }></Route>
      </BrowserRouter>
    </>
  )
}

export default App;
