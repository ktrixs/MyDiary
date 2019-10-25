const express = require('express');
const router = express.Router();
import { data } from '../models/entries';

router.get('/', function(req, res) {
  res.status(200).json(data);
});

module.exports = router;
