import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavForm from './components/form/NavForm';
import LoginPage from './components/pages/LoginPages';
import HomePage from './components/pages/HomePages';
import SignUpPages from './components/pages/SignUpPages';
import UserProvider from './components/provider/UserProvider';

const App = () => {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <NavForm />
        <Route exact path={['/', '/home']} component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signUp" component={SignUpPages}></Route>
      </BrowserRouter>
    </UserProvider>
    </>
  );
};

export default App;
