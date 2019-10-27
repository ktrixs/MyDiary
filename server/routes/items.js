const express = require('express');
const router = express.Router();
import { data } from '../models/entries';

router.get('/', function(req, res) {
  res.status(200).json(data);
});

module.exports = router;

router.get('/:id', function(req, res) {
  let found = data.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', function(req, res) {
  let itemIds = data.map(item => item.id);
  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let newItem = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    notification: false,
    createdOn: new Date()
  };

  data.push(newItem);

  res.status(201).json(newItem);
});
