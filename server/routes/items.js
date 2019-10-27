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
