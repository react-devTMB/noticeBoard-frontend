import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Post = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await Axios('/api/post');
      setPosts(response.data.posts);
    };
    getPosts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">제목</TableCell>
            <TableCell align="left">글쓴이</TableCell>
            <TableCell align="left">등록일시</TableCell>
            <TableCell align="left">조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts &&
            posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell component="th" scope="row">
                  {post.seq}
                </TableCell>
                <TableCell align="left">{post.title}</TableCell>
                <TableCell align="left">{post.creator}</TableCell>
                <TableCell align="left">{moment(post.created_date).format('YYYY-MM-DD hh:mm:ss')}</TableCell>
                <TableCell align="left">{post.view_cnt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Post;
