import React, { useState, useCallback } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Title from '../../components/common/Title';
import { FormGroup } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from 'reactstrap';
import { stateToHTML } from 'draft-js-export-html';
import Axios from 'axios';
import _ from 'lodash';
import config from '../../config';

const { inputDelay } = config;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Write = () => {
  const classes = useStyles();

  const [editorState, setEditorState] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    onChangeContent(stateToHTML(editorState.getCurrentContent()));
  };

  const onChangeTitle = useCallback(
    _.debounce((value) => setTitle(value), inputDelay),
    [title]
  );

  const onChangeContent = useCallback(
    _.debounce((value) => setContent(value), inputDelay),
    [content]
  );

  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const response = await Axios.post(
          '/api/post',
          {
            title,
            content,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        );

        setOpen(true);
        setMessage(response.data.message);
      } catch (e) {
        setOpen(true);
        setMessage(e.data.message);
      }
    },
    [title, content]
  );

  const onClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Title text="Post"></Title>
      <Container>
        <form className={classes.root} onSubmit={onSubmitForm}>
          <FormGroup>
            <Input type="text" placeholder="Title" onChange={(e) => onChangeTitle(e.target.value)} />
          </FormGroup>
          <div className="demo-section">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbar-class"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
              placeholder="Please fill in the content."
            />
          </div>
          <Button type="submit" className="btn-lg btn-dark btn-block">
            {' '}
            Regist{' '}
          </Button>
        </form>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={onClose}
        message={message}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default Write;
