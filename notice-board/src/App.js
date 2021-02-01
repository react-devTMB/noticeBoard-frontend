import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styles';
import NavForm from './components/form/NavForm';
import Container from '@material-ui/core/Container';
import Home from './domain/Home';
import Login from './domain/Login';
import SignUp from './domain/SignUp';
import UserProvider from './components/provider/UserProvider';
import Post from './domain/Post';
import Write from './domain/Write';
import NotFound from './components/error/NotFound';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <NavForm />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path={['/', '/home']} component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signUp" component={SignUp}></Route>
              <Route exact path="/post" component={Post}></Route>
              <Route exact path="/write" component={Write}></Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </Container>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
