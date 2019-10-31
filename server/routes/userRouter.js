const express = require('express');
import { createUser, userLogin } from '../controllers/userController';

const routes = () => {
  const userRouter = express.Router();

  userRouter.route('/auth/signup').post(createUser);

  userRouter.route('/auth/login').post(userLogin);
  return userRouter;
};

module.exports = routes;
