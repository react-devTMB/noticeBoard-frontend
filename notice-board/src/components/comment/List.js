import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  noComment: {
    textAlign: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
  },
  creator: {
    fontWeight: 600,
  },
  createdDate: {
    marginLeft: theme.spacing(0.75),
    paddingTop: theme.spacing(0.25),
    color: '#a2a2a2',
  },
  body: {},
  // comment list
}));

const List = ({ list }) => {
  const classes = useStyles();

  return !list.length ? (
    <Typography className={classes.noComment} variant="body1">
      등록된 댓글이 없습니다.
    </Typography>
  ) : (
    <>
      {list.map((item) => (
        <Box key={item._id} className={classes.root}>
          <div className={classes.header}>
            <Typography className={classes.creator} variant="subtitle1">
              {item.creator}
            </Typography>
            <Typography className={classes.createdDate}>{moment(item.created_date).format('YYYY-MM-DD')}</Typography>
          </div>
          <div className={classes.body}>
            <p>{item.content}</p>
          </div>
        </Box>
      ))}
    </>
  );
};

export default List;
