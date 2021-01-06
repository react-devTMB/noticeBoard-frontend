
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

const Write = (value) => {

  const [ editorState, setEditorState ] = useState('');

  const onEditorStateChange = (editorState) => {
    console.log(stateToHTML(editorState.getCurrentContent()));
    // console.log('editorState >> ' , editorState);
    // EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(editorState)));

    // console.log('EditorState >>> ',  EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(editorState))));

    setEditorState(editorState);
  };

  const handleOnSubmit = async(e) => {
    console.log('e  >>  ', e.target.value);

    console.log(localStorage.getItem('userInfo'), editorState);

    // console.log('handleOnSubmit >> ' );
    await Axios
      .post('/board/post', {
        title: "",
        contents: editorState,
        author : localStorage.getItem('userInfo').nickname
      },{
        headers: {
          'Authorization': localStorage.getItem('access_token'),
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
    .then((res) => {
      console.log('res >> ' , res);
    })
    .catch((error) => {
      console.log(error.response);
      // setLoading(false);
    });

  }

  const onChangeTitle = useCallback(e => {
    e.preventDefault();
    const { value } = e.target;

    console.log('value >>  ', value);

  },[]);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();


  return(
    <div>
      <Title text="Post"></Title>
      <Container>
        <form className={classes.root}>
          <FormGroup>
            <Input type="text" name="title" placeholder="Title" onChange={ onChangeTitle }/>
          </FormGroup>
          <div className="demo-section">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbar-class"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={ onEditorStateChange }
              placeholder="Please fill in the content."
            />
          </div>
        </form>
        <Button onClick={ handleOnSubmit }  type="submit" className="btn-lg btn-dark btn-block"> Regist </Button>
      </Container>
    </div>
  )
};

export default Write;