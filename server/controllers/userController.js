import { users } from '../models/users';
import { passwordHasher, matchPassword } from '../helpers/password';
import jwt from 'jsonwebtoken';

const isEmail = (email) => {
  if (typeof email !== 'string') {
    return false;
  }
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return emailRegex.test(email);
};



 const createUser = async (req, res) => {
  let itemIds = users.map(item => item.id);
  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  const { firstName, lastName, email, password } = req.body;
  const passwordHarshed =  await passwordHasher(password, 10);
  let newUser = {
    id: newId,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: passwordHarshed
  };

  if (!isEmail(newUser.email)) {
    res.sendStatus(404);
  }
  if (typeof newUser.password !== 'string') {
    res.sendStatus(404);
  }


  const token = jwt.sign({
    email
  }, 'titi');
  users.push(newUser);
  res.status(201).json({
    status: 201,
    message: "User Successfully Created",
    token,
    user: {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email
    }
  });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

 const foundUser = users.find(us => us.email === email);
 
 if(!foundUser) {
   return res.sendStatus(404).send(`User with this ${email} was not found`);
 }

 const foundPassword = matchPassword(password, foundUser.password);

 if(!foundPassword) {
   return res.status(401).json({
     status: 401,
     message:  "email or password is incorrect"
     }
   );
 }

 const token = jwt.sign({ 
   email 
  }, 'titi');

 return res.status(200).json({
   status: 200,
   message: "Logged in",
   token,
   user: {
     id: foundUser.id,
     firstName: foundUser.firstName,
     lastName: foundUser.lastName,
     email: foundUser.email
   }
 });
};

export { createUser, userLogin }