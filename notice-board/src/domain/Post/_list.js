import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  button: {
    float: 'right',
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

const List = ({ match }) => {
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
    <>
      <Typography variant="h5" gutterBottom>
        게시판
      </Typography>
      <Button className={classes.button} component={Link} to="/write" variant="outlined" size="small" color="primary" startIcon={<CreateIcon />}>
        글쓰기
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="60px" />
            <col />
            <col width="100px" />
            <col width="120px" />
            <col width="80px" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">제목</TableCell>
              <TableCell align="left">글쓴이</TableCell>
              <TableCell align="left">등록일</TableCell>
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
                  <TableCell align="left">
                    <Link to={`${match.url}/${post.seq}`}>{post.title}</Link>
                  </TableCell>
                  <TableCell align="left">{post.creator}</TableCell>
                  <TableCell align="left">{moment(post.created_date).format('YYYY-MM-DD')}</TableCell>
                  <TableCell align="left">{post.view_cnt}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
