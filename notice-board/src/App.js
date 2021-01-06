import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styles';
import NavForm from './components/form/NavForm';
import Home from './domain/Home';
import Login from './domain/Login';
import SignUp from './domain/SignUp';
import UserProvider from './components/provider/UserProvider';
import Write from './domain/Board/write';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <NavForm />
          <Route exact path={['/', '/home']} component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route exact path="/post" component={Write}></Route>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
