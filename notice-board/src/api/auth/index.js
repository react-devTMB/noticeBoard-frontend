const { Router } = require("react-router-dom");
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/login', authCtrl.login);
auth.post('/logout', authCtrl.logout);
auth.post('/socialLogin', authCtrl.socialLogin);

export default auth;