import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavForm from './components/form/NavForm';
import LoginPage from './components/pages/LoginPages';
import HomePage from './components/pages/HomePages';
import SignUpPages from './components/pages/SignUpPages';
import UserProvider from './components/provider/UserProvider';
import PostPages from './components/pages/PostPages';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <NavForm/>
          <Route exact path={['/', '/home']} component={HomePage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signUp" component={SignUpPages}></Route>
          <Route exact path="/post" component={PostPages}></Route>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
