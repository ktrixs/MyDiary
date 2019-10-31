const express = require('express');
import {
  createEntry,
  getEntries,
  getEntry,
  updateEntry
} from '../controllers/entryController';

const routes = () => {
  const diaryRouter = express.Router();

  diaryRouter
    .route('/')
    .post(createEntry)
    .get(getEntries);

  diaryRouter
    .route('/:id')
    .get(getEntry)
    .put(updateEntry);

  return diaryRouter;
};

module.exports = routes;
