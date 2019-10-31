import { data } from '../models/entries';

export const createEntry = (req, res) => {
  let itemIds = data.map(item => item.id);
  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let newMemory = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    notification: false,
    createdOn: new Date()
  };
  data.push(newMemory);
  res.status(201).json(newMemory);
};

export const getEntries = (req, res) => {
  return res.json(data);
};

export const updateEntry = (req, res) => {
  let found = data.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let updated = {
      id: found.id,
      title: req.body.title,
      content: req.body.content,
      notification: req.body.notification
    };

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updated);

    res.send(201).json(data);
  } else {
    res.sendStatus(404);
  }
};

export const getEntry = (req, res) => {
  let found = data.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
};
