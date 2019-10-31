import { users } from '../models/users';

const isEmail = (email) => {
  if (typeof email !== 'string') {
    return false;
  }
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return emailRegex.test(email);
};


export const createUser = (req, res) => {
  let itemIds = users.map(item => item.id);
  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  let newUser = {
    id: newId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };

    if (!isEmail(newUser.email)) {
      res.sendStatus(404);
    }
    if (typeof newUser.password !== 'string') {
      res.sendStatus(404);
    }


  users.push(newUser);
  res.status(201).send(newUser);
};

export const userLogin = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };


  users.find(user);
  res.status(201).send(user);
};
