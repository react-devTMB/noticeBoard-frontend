import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import moment from 'moment';

import CommentWrite from '../../components/comment/Write';
import CommentList from '../../components/comment/List';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  header: {
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid #a2a2a2',
  },
  title: {
    fontWeight: 700,
  },
  subtitle: {
    color: '#a2a2a2',
  },
  section: {
    'padding': `${theme.spacing(4)}px 0`,
    'borderBottom': '1px solid #a2a2a2',
    'marginBottom': theme.spacing(2),
    '& > div': {
      margin: `0 ${theme.spacing(2)}px`,
    },
  },
}));

const Detail = ({ match, history }) => {
  const classes = useStyles();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await Axios(`/api/post/${match.params.seq}`);
      console.log(response);
      setPost(response.data.post);
    };
    getPost();
  }, [match.params.seq]);

  const addComment = async (content) => {
    try {
      const response = await Axios.post(
        `/api/post/${match.params.seq}/comment`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    post && (
      <Box className={classes.root}>
        <Box className={classes.header} component="header">
          <Typography className={classes.title} variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1" gutterBottom>
            작성자 {post.creator} | 등록일 {moment(post.created_date).format('YYYY-MM-DD')} | 조회수 {post.view_cnt}
          </Typography>
        </Box>
        <Box className={classes.section} component="section">
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Box>
        <Box component="footer">
          <CommentWrite count={post.comments.length} onWrite={addComment} />
          <CommentList list={post.comments} />
        </Box>
      </Box>
    )
  );
};

export default Detail;
