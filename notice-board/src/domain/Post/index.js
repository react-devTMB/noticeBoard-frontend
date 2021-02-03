import React from 'react';
import { Route } from 'react-router-dom';
import List from './_list';
import Detail from './_detail';

const Post = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={List} />
      <Route path={`${match.path}/:seq`} component={Detail} />
    </>
  );
};

export default Post;
