import React, { useState, useCallback } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Title from '../../components/common/Title';
import { FormGroup } from '@material-ui/core';
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
        console.log(response);
      } catch (e) {
        console.error(e);
      }

      console.log(title, content);
    },
    [title, content]
  );

  return (
    <div>
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
    </div>
  );
};

export default Write;
