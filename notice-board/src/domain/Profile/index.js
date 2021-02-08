import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../components/context/User.context';

const useStyles = makeStyles({
  'root': {
    marginTop: 60,
  },
  'content': {
    display: 'flex',
    justifyContent: 'space-around',
  },
  'input': {
    width: '400px',
  },
  'textInfo': {
    padding: '20px 20px 0',
  },
  'actions': {
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'rgb(249, 250, 251)',
  },
  'label': {
    margin: 0,
  },
  'deleteButton': {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: '8px 16px',
  },
  'opacity-25': {
    opacity: 0.25,
  },
});

const Profile = () => {
  const classes = useStyles();
  const { userInfo, isAuthenticated } = useContext(UserContext);

  let user = {};

  if (isAuthenticated) {
    user = JSON.parse(userInfo);
  }

  const [state, setState] = React.useState({
    checkAgree: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.content}>
            <TextField
              label="Name"
              className={classes.input}
              defaultValue={user.name}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Email"
              className={classes.input}
              defaultValue={user.email}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </div>
          <Typography className={classes.textInfo} color="textSecondary">
            This is a permanent action and it can't be undone.
            <br />
            After you delete your account no one will be able to recover it.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <FormControlLabel
            className={classes.label}
            control={<Checkbox checked={state.checkAgree} onChange={handleChange} name="checkAgree" color="primary" />}
            label="I understand this action is permanent and no one will be able to undo it."
          />
          <Button size="small" className={`${classes.deleteButton} ${!state.checkAgree ? classes['opacity-25'] : ''}`}>
            Delete Account
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Profile;
