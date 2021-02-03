import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Detail = ({ match, history }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await Axios(`/api/post/${match.params.seq}`);
      console.log(response);
      setPost(response.data.post);
    };
    getPost();
  }, [match.params.seq]);

  return (
    post && (
      <>
        <pre>{JSON.stringify(post, null, 4)}</pre>
      </>
    )
  );
};

export default Detail;
