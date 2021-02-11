import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px 0`,
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttonWrap: {
    'display': 'flex',
    'justifyContent': 'flex-end',
    '& > button': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Write = ({ count, onWrite }) => {
  const classes = useStyles();

  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    const value = e.target.value;
    setComment(value);
    setDisabled(!value.trim().length);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="body1" gutterBottom>
        댓글 {count}개
      </Typography>
      <TextField className={classes.textField} label="댓글" placeholder="댓글을 입력해주세요." value={comment} onChange={onChange} fullWidth multiline />
      <div className={classes.buttonWrap}>
        <Button className={classes.button} variant="outlined" color="primary" disabled={disabled} onClick={() => onWrite(comment.trim())}>
          등록
        </Button>
      </div>
    </Box>
  );
};

export default Write;
